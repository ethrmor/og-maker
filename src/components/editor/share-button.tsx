import { useCallback } from "react";
import { Share2 } from "lucide-react";
import type { TemplateFields } from "@/types/template";
import { encodeState, sanitizeFieldsForShare } from "@/lib/url-state";
import { useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

interface ShareButtonProps {
  templateId: string;
  fields: TemplateFields;
  platformPresetId: string;
}

const SHAREABLE_IMAGE_KEYS: Array<"logoUrl" | "backgroundImageUrl"> = [
  "logoUrl",
  "backgroundImageUrl",
];

export function ShareButton({ templateId, fields, platformPresetId }: ShareButtonProps) {
  const { showToast } = useToast();

  const handleShare = useCallback(async () => {
    try {
      const sanitizedFields = sanitizeFieldsForShare(fields);
      const shareFields: TemplateFields = {
        ...fields,
        ...sanitizedFields,
      };

      const hasExcludedImages = SHAREABLE_IMAGE_KEYS.some((key) => {
        const originalValue = fields[key];
        const sharedValue = shareFields[key];

        return Boolean(originalValue) && sharedValue !== originalValue;
      });

      const encoded = encodeState(templateId, shareFields, platformPresetId);
      const shareUrl = `${window.location.origin}${window.location.pathname}#s=${encoded}`;

      if (!navigator.clipboard) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(shareUrl);
      showToast("Link copied to clipboard", "success");

      if (hasExcludedImages) {
        showToast("Note: uploaded images not included in share link", "info");
      }
    } catch (error) {
      console.error("Failed to copy share link:", error);
      showToast("Failed to copy share link", "error");
    }
  }, [fields, showToast, templateId]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleShare}
      className="text-muted-foreground hover:text-foreground h-8 px-2"
    >
      <Share2 className="size-4 mr-1" />
      Share
    </Button>
  );
}

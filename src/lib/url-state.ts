import type { TemplateFields } from "@/types/template";

const SHARE_STATE_PREFIX = "s=";
const SHARE_STATE_VERSION = 1;
const MAX_SHARED_URL_LENGTH = 500;

interface SharePayload {
  v: number;
  t: string;
  f: Partial<TemplateFields>;
}

function toBase64Url(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64Url(value: string): string {
  const normalized = value
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return new TextDecoder().decode(bytes);
}

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object";
}

function sanitizeShareableUrl(url: string | null): string | null {
  if (!url) return null;

  const normalizedUrl = url.trim();

  if (normalizedUrl.startsWith("data:") || normalizedUrl.startsWith("blob:")) {
    return null;
  }

  if (!/^https?:\/\//i.test(normalizedUrl)) {
    return null;
  }

  if (normalizedUrl.length >= MAX_SHARED_URL_LENGTH) {
    return null;
  }

  return normalizedUrl;
}

export function sanitizeFieldsForShare(fields: TemplateFields): Partial<TemplateFields> {
  return {
    ...fields,
    logoUrl: sanitizeShareableUrl(fields.logoUrl),
    backgroundImageUrl: sanitizeShareableUrl(fields.backgroundImageUrl),
  };
}

export function encodeState(templateId: string, fields: TemplateFields): string {
  const payload: SharePayload = {
    v: SHARE_STATE_VERSION,
    t: templateId,
    f: fields,
  };

  return toBase64Url(JSON.stringify(payload));
}

export function decodeState(hash: string): { templateId: string; fields: Partial<TemplateFields> } | null {
  const normalizedHash = hash.replace(/^#/, "");

  if (!normalizedHash.startsWith(SHARE_STATE_PREFIX)) {
    return null;
  }

  const encodedPayload = normalizedHash.slice(SHARE_STATE_PREFIX.length);

  if (!encodedPayload) {
    return null;
  }

  try {
    const decoded = JSON.parse(fromBase64Url(encodedPayload)) as unknown;

    if (!isObject(decoded)) {
      return null;
    }

    const version = decoded.v;
    const templateId = decoded.t;
    const fields = decoded.f;

    if (version !== SHARE_STATE_VERSION) {
      return null;
    }

    if (typeof templateId !== "string") {
      return null;
    }

    if (!isObject(fields)) {
      return null;
    }

    return {
      templateId,
      fields: fields as Partial<TemplateFields>,
    };
  } catch {
    return null;
  }
}

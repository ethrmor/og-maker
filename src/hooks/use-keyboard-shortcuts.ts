import { useEffect, useCallback } from "react";

interface KeyboardShortcuts {
  onDownload?: () => void;
  onCopy?: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
}

export function useKeyboardShortcuts({ onDownload, onCopy, onUndo, onRedo }: KeyboardShortcuts) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Don't trigger shortcuts when user is typing in an input
      const target = event.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const modKey = isMac ? event.metaKey : event.ctrlKey;

      // ⌘D / Ctrl+D → Download
      if (modKey && event.key === "d" && !event.shiftKey) {
        event.preventDefault();
        onDownload?.();
      }

      // ⌘Shift+C / Ctrl+Shift+C → Copy to clipboard
      if (modKey && event.shiftKey && (event.key === "C" || event.key === "c")) {
        event.preventDefault();
        onCopy?.();
      }

      // ⌘Z / Ctrl+Z → Undo
      if (modKey && event.key === "z" && !event.shiftKey) {
        event.preventDefault();
        onUndo?.();
      }

      // ⌘Shift+Z / Ctrl+Shift+Z → Redo
      if (modKey && event.shiftKey && (event.key === "Z" || event.key === "z")) {
        event.preventDefault();
        onRedo?.();
      }

      // ⌘Y / Ctrl+Y → Redo (Windows alternate)
      if (modKey && event.key === "y") {
        event.preventDefault();
        onRedo?.();
      }
    },
    [onDownload, onCopy, onUndo, onRedo]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
}

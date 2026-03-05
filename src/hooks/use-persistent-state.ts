import { useEffect, useCallback, useRef } from "react";
import type { EditorState } from "@/types/template";

const STORAGE_KEY = "og-maker-state";

interface PersistedState {
  selectedTemplateId: string;
  fields: EditorState["fields"];
  platformPresetId: string;
  timestamp: number;
}

export function usePersistentState() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loadState = useCallback((): Partial<EditorState> | null => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return null;
      const parsed: PersistedState = JSON.parse(saved);
      return {
        selectedTemplateId: parsed.selectedTemplateId,
        fields: parsed.fields,
        platformPresetId: parsed.platformPresetId,
      };
    } catch {
      return null;
    }
  }, []);

  const saveState = useCallback((state: EditorState) => {
    // Debounce saves
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      try {
        const data: PersistedState = {
          selectedTemplateId: state.selectedTemplateId,
          fields: state.fields,
          platformPresetId: state.platformPresetId,
          timestamp: Date.now(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch {
        // Ignore storage errors (e.g., quota exceeded)
      }
    }, 300);
  }, []);

  const clearState = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore errors
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { loadState, saveState, clearState };
}

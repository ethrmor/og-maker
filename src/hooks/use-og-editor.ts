import { useReducer, useEffect, useCallback, useRef } from "react";
import type {
  EditorState,
  EditorAction,
  TemplateFields,
  EditorStep,
} from "@/types/template";
import { getTemplate, DEFAULT_FIELDS } from "@/lib/templates";
import { decodeState } from "@/lib/url-state";
import { useToast } from "@/components/ui/toast";
import { usePersistentState } from "./use-persistent-state";

const INITIAL_TEMPLATE_ID = "minimal";
const MAX_HISTORY_SIZE = 50;

const CONTENT_KEYS: (keyof TemplateFields)[] = [
  "title",
  "subtitle",
  "brandName",
  "logoUrl",
];

const STEP_ORDER: EditorStep[] = ["template", "content", "branding", "visuals"];

interface HistoryState {
  past: TemplateFields[];
  present: TemplateFields;
  future: TemplateFields[];
}

interface InitialStateSeed {
  selectedTemplateId?: string;
  fields?: Partial<TemplateFields>;
  currentStep?: EditorStep;
}

function getInitialState(savedState: InitialStateSeed | null): EditorState {
  const requestedTemplateId = savedState?.selectedTemplateId ?? INITIAL_TEMPLATE_ID;
  const template = getTemplate(requestedTemplateId);

  return {
    selectedTemplateId: template.id,
    fields: {
      ...DEFAULT_FIELDS,
      ...template.defaults,
      ...savedState?.fields,
    },
    isExporting: false,
    currentStep: savedState?.currentStep ?? "template",
  };
}

function getSharedStateFromHash() {
  if (typeof window === "undefined") {
    return null;
  }

  return decodeState(window.location.hash);
}

function editorReducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case "SELECT_TEMPLATE": {
      const template = getTemplate(action.templateId);
      // Preserve user-entered content, reset visual defaults
      const preservedContent: Partial<TemplateFields> = {};
      for (const key of CONTENT_KEYS) {
        preservedContent[key] = state.fields[key] as never;
      }
      // Auto-advance to content step after template selection
      const nextStepIndex = STEP_ORDER.indexOf("content");
      return {
        ...state,
        selectedTemplateId: action.templateId,
        fields: {
          ...DEFAULT_FIELDS,
          ...template.defaults,
          ...preservedContent,
        },
        currentStep: STEP_ORDER[nextStepIndex],
      };
    }
    case "UPDATE_FIELD": {
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.key]: action.value,
        },
      };
    }
    case "SET_EXPORTING": {
      return {
        ...state,
        isExporting: action.value,
      };
    }
    case "RESET_STYLE": {
      const template = getTemplate(state.selectedTemplateId);
      // Preserve content, reset only style fields to template defaults
      const preservedContent: Partial<TemplateFields> = {};
      for (const key of CONTENT_KEYS) {
        preservedContent[key] = state.fields[key] as never;
      }
      return {
        ...state,
        fields: {
          ...DEFAULT_FIELDS,
          ...template.defaults,
          ...preservedContent,
        },
      };
    }
    case "CLEAR_CONTENT": {
      // Clear content fields, keep style as-is
      return {
        ...state,
        fields: {
          ...state.fields,
          title: "",
          subtitle: "",
          brandName: "",
          logoUrl: null,
        },
      };
    }
    case "PATCH_FIELDS": {
      return {
        ...state,
        fields: {
          ...state.fields,
          ...action.patch,
        },
      };
    }
    case "SET_STEP": {
      return {
        ...state,
        currentStep: action.step,
      };
    }
    case "NEXT_STEP": {
      const currentIndex = STEP_ORDER.indexOf(state.currentStep);
      const nextIndex = Math.min(currentIndex + 1, STEP_ORDER.length - 1);
      return {
        ...state,
        currentStep: STEP_ORDER[nextIndex],
      };
    }
    case "PREV_STEP": {
      const currentIndex = STEP_ORDER.indexOf(state.currentStep);
      const prevIndex = Math.max(currentIndex - 1, 0);
      return {
        ...state,
        currentStep: STEP_ORDER[prevIndex],
      };
    }
    default:
      return state;
  }
}

export function useOgEditor() {
  const { showToast } = useToast();
  const { loadState, saveState, clearState: clearSavedState } = usePersistentState();
  const sharedStateFromUrlRef = useRef<ReturnType<typeof getSharedStateFromHash>>(undefined);
  const hasShownSharedToastRef = useRef(false);
  const historyRef = useRef<HistoryState>({
    past: [],
    present: DEFAULT_FIELDS,
    future: [],
  });
  const isUndoingRef = useRef(false);
  const lastFieldsRef = useRef<TemplateFields | null>(null);

  if (sharedStateFromUrlRef.current === undefined) {
    sharedStateFromUrlRef.current = getSharedStateFromHash();
  }

  const sharedStateFromUrl = sharedStateFromUrlRef.current;
  const loadedFromUrl = Boolean(sharedStateFromUrl);

  // Load saved state on mount
  const savedState = loadedFromUrl
    ? {
        selectedTemplateId: sharedStateFromUrl?.templateId,
        fields: sharedStateFromUrl?.fields,
      }
    : loadState();

  const [state, dispatch] = useReducer(editorReducer, savedState, getInitialState);

  useEffect(() => {
    if (!loadedFromUrl || hasShownSharedToastRef.current) {
      return;
    }

    hasShownSharedToastRef.current = true;
    showToast("Loaded shared design", "success");
  }, [loadedFromUrl, showToast]);

  // Initialize history with loaded/saved state
  useEffect(() => {
    historyRef.current.present = state.fields;
    lastFieldsRef.current = state.fields;
  }, []);

  // Track field changes for history (excluding undo/redo actions)
  useEffect(() => {
    if (isUndoingRef.current) {
      isUndoingRef.current = false;
      lastFieldsRef.current = state.fields;
      return;
    }

    // Only add to history if fields actually changed and we're not undoing
    if (lastFieldsRef.current && JSON.stringify(lastFieldsRef.current) !== JSON.stringify(state.fields)) {
      const currentHistory = historyRef.current;
      currentHistory.past = [...currentHistory.past, lastFieldsRef.current].slice(-MAX_HISTORY_SIZE);
      currentHistory.present = state.fields;
      currentHistory.future = [];
      lastFieldsRef.current = state.fields;
    }
  }, [state.fields]);

  // Auto-save state changes
  useEffect(() => {
    saveState(state);
  }, [state, saveState]);

  const selectTemplate = (templateId: string) =>
    dispatch({ type: "SELECT_TEMPLATE", templateId });

  const updateField = (key: keyof TemplateFields, value: string | null | boolean) =>
    dispatch({ type: "UPDATE_FIELD", key, value });

  const setExporting = (value: boolean) =>
    dispatch({ type: "SET_EXPORTING", value });

  const resetStyle = () =>
    dispatch({ type: "RESET_STYLE" });

  const clearContent = () =>
    dispatch({ type: "CLEAR_CONTENT" });

  const patchFields = (patch: Partial<TemplateFields>) =>
    dispatch({ type: "PATCH_FIELDS", patch });

  const canUndo = historyRef.current.past.length > 0;
  const canRedo = historyRef.current.future.length > 0;

  const undo = useCallback(() => {
    const { past, present, future } = historyRef.current;
    if (past.length === 0) return;

    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);

    isUndoingRef.current = true;
    historyRef.current = {
      past: newPast,
      present: previous,
      future: [present, ...future].slice(0, MAX_HISTORY_SIZE),
    };

    // Apply all fields from previous state
    Object.entries(previous).forEach(([key, value]) => {
      dispatch({ type: "UPDATE_FIELD", key: key as keyof TemplateFields, value });
    });
  }, []);

  const redo = useCallback(() => {
    const { past, present, future } = historyRef.current;
    if (future.length === 0) return;

    const next = future[0];
    const newFuture = future.slice(1);

    isUndoingRef.current = true;
    historyRef.current = {
      past: [...past, present].slice(-MAX_HISTORY_SIZE),
      present: next,
      future: newFuture,
    };

    // Apply all fields from next state
    Object.entries(next).forEach(([key, value]) => {
      dispatch({ type: "UPDATE_FIELD", key: key as keyof TemplateFields, value });
    });
  }, []);

  const clearAll = () => {
    clearSavedState();
    window.location.hash = "";
    // Reload to reset to defaults
    window.location.reload();
  };

  const setStep = (step: EditorStep) =>
    dispatch({ type: "SET_STEP", step });

  const goToNextStep = () =>
    dispatch({ type: "NEXT_STEP" });

  const goToPrevStep = () =>
    dispatch({ type: "PREV_STEP" });

  const currentStepIndex = STEP_ORDER.indexOf(state.currentStep);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === STEP_ORDER.length - 1;

  return {
    state,
    selectTemplate,
    updateField,
    setExporting,
    resetStyle,
    clearContent,
    patchFields,
    clearAll,
    undo,
    redo,
    canUndo,
    canRedo,
    setStep,
    goToNextStep,
    goToPrevStep,
    isFirstStep,
    isLastStep,
    STEP_ORDER,
  };
}

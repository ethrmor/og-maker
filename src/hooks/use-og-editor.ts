import { useReducer } from "react";
import type {
  EditorState,
  EditorAction,
  TemplateFields,
} from "@/types/template";
import { getTemplate, DEFAULT_FIELDS } from "@/lib/templates";

const INITIAL_TEMPLATE_ID = "minimal";

function getInitialState(): EditorState {
  const template = getTemplate(INITIAL_TEMPLATE_ID);
  return {
    selectedTemplateId: INITIAL_TEMPLATE_ID,
    fields: {
      ...DEFAULT_FIELDS,
      ...template.defaults,
    },
    isExporting: false,
  };
}

// Content fields preserved when switching templates
const CONTENT_KEYS: (keyof TemplateFields)[] = [
  "title",
  "subtitle",
  "brandName",
  "logoUrl",
];

function editorReducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case "SELECT_TEMPLATE": {
      const template = getTemplate(action.templateId);
      // Preserve user-entered content, reset visual defaults
      const preservedContent: Partial<TemplateFields> = {};
      for (const key of CONTENT_KEYS) {
        preservedContent[key] = state.fields[key] as never;
      }
      return {
        ...state,
        selectedTemplateId: action.templateId,
        fields: {
          ...DEFAULT_FIELDS,
          ...template.defaults,
          ...preservedContent,
        },
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
    default:
      return state;
  }
}

export function useOgEditor() {
  const [state, dispatch] = useReducer(editorReducer, undefined, getInitialState);

  const selectTemplate = (templateId: string) =>
    dispatch({ type: "SELECT_TEMPLATE", templateId });

  const updateField = (key: keyof TemplateFields, value: string | null) =>
    dispatch({ type: "UPDATE_FIELD", key, value });

  const setExporting = (value: boolean) =>
    dispatch({ type: "SET_EXPORTING", value });

  return {
    state,
    selectTemplate,
    updateField,
    setExporting,
  };
}

import type { ComponentType } from "react";
import type { TemplateProps } from "@/types/template";
import { MinimalTemplate } from "./minimal";
import { BoldTemplate } from "./bold";
import { SplitTemplate } from "./split";
import { ElegantTemplate } from "./elegant";
import { GeometricTemplate } from "./geometric";
import { FrameTemplate } from "./frame";
import { DiagonalTemplate } from "./diagonal";
import { MonoTemplate } from "./mono";

export const TEMPLATE_COMPONENTS: Record<string, ComponentType<TemplateProps>> = {
  minimal: MinimalTemplate,
  bold: BoldTemplate,
  split: SplitTemplate,
  elegant: ElegantTemplate,
  geometric: GeometricTemplate,
  frame: FrameTemplate,
  diagonal: DiagonalTemplate,
  mono: MonoTemplate,
};

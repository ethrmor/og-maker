import type { ComponentType } from "react";
import type { TemplateProps } from "@/types/template";
import { MinimalTemplate } from "./minimal";
import { BoldTemplate } from "./bold";
import { SplitTemplate } from "./split";
import { ElegantTemplate } from "./elegant";
import { GeometricTemplate } from "./geometric";
import { FrameTemplate } from "./frame";
import { LayersTemplate } from "./layers";
import { MonoTemplate } from "./mono";
import { EditorialTemplate } from "./editorial";
import { AuroraTemplate } from "./aurora";
import { SpotlightTemplate } from "./spotlight";
import { TypographicTemplate } from "./typographic";
import { NebulaTemplate } from "./nebula";
import { BlueprintTemplate } from "./blueprint";
import { HorizonTemplate } from "./horizon";
import { KineticTemplate } from "./kinetic";
import { PrismTemplate } from "./prism";
import { NoirTemplate } from "./noir";

export const TEMPLATE_COMPONENTS: Record<string, ComponentType<TemplateProps>> = {
  minimal: MinimalTemplate,
  bold: BoldTemplate,
  split: SplitTemplate,
  elegant: ElegantTemplate,
  geometric: GeometricTemplate,
  frame: FrameTemplate,
  layers: LayersTemplate,
  mono: MonoTemplate,
  editorial: EditorialTemplate,
  aurora: AuroraTemplate,
  spotlight: SpotlightTemplate,
  typographic: TypographicTemplate,
  nebula: NebulaTemplate,
  blueprint: BlueprintTemplate,
  horizon: HorizonTemplate,
  kinetic: KineticTemplate,
  prism: PrismTemplate,
  noir: NoirTemplate,
};

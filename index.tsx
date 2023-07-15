
import React from "react";
import { createComponent } from "@lit-labs/react";
import {
  FlexBox as FlexBoxBase,
  FitBox as FitBoxBase,
  FlexCanvas as FlexCanvasBase,
  FlexCell as FlexCellBase,
  FlexDivider as FlexDividerBase,
  FlexGrid as FlexGridBase,
  FlexMedia as FlexMediaBase,
  SpaceBox as SpaceBoxBase,
  StackedBox as StackedBoxBase,
  StackedCell as StackedCellBase,
  AspectRatio as AspectRatioBase,
  StyleBox as StyleBoxBase,
  ScreenReaderOnly as ScreenReaderOnlyBase,
  LtrOnly as LtrOnlyBase,
} from "flex-layout-system";


export const LtrOnly = createComponent({
  react: React,
  tagName: "ltr-only",
  elementClass: LtrOnlyBase,
});

export const AspectRatio = createComponent({
  react: React,
  tagName: "a-ratio",
  elementClass: AspectRatioBase,
});

export const SrOnly = createComponent({
  react: React,
  tagName: "sr-only",
  elementClass: ScreenReaderOnlyBase,
});

export const FlexBox = createComponent({
  react: React,
  tagName: "flex-box",
  elementClass: FlexBoxBase,
});

export const FitBox = createComponent({
  react: React,
  tagName: "fit-box",
  elementClass: FitBoxBase,
});

export const FlexCanvas = createComponent({
  react: React,
  tagName: "flex-canvas",
  elementClass: FlexCanvasBase,
});

export const FlexCell = createComponent({
  react: React,
  tagName: "flex-cell",
  elementClass: FlexCellBase,
});

export const FlexDivider = createComponent({
  react: React,
  tagName: "flex-divider",
  elementClass: FlexDividerBase,
});

export const FlexGrid = createComponent({
  react: React,
  tagName: "flex-grid",
  elementClass: FlexGridBase,
});

export const FlexMedia = createComponent({
  react: React,
  tagName: "flex-media",
  elementClass: FlexMediaBase,
});

export const SpaceBox = createComponent({
  react: React,
  tagName: "space-box",
  elementClass: SpaceBoxBase,
});

export const StackedBox = createComponent({
  react: React,
  tagName: "stacked-box",
  elementClass: StackedBoxBase,
});

export const StackedCell = createComponent({
  react: React,
  tagName: "stacked-cell",
  elementClass: StackedCellBase,
});

export const StyleBox = createComponent({
  react: React,
  tagName: "s-box",
  elementClass: StyleBoxBase,
});


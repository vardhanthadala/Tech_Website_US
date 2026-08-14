import React from "react";
import { notFound, redirect } from "next/navigation";
import { uiUxCategories } from "@/data/uiUxData";

export default function UiUxDesignRootPage() {
  const defaultSlug = Object.keys(uiUxCategories)[0];
  if (defaultSlug) {
    redirect(`/services/ui-ux-design/${defaultSlug}`);
  }
  notFound();
}

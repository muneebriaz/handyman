import { Routes } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: "landing",
    loadChildren: () =>
      import("../portal-module/portal-module.module").then(
        m => m.PortalModuleModule,
      ),
  },
];

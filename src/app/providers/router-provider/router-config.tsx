import { MainPage } from "@/pages/main-page"
import { NotFoundPage } from "@/pages/not-found-page"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN = "main",
  NOT_FOUND = "not_found",
}

export const AppPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",

  [AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: AppPaths.main, element: <MainPage /> },

  [AppRoutes.NOT_FOUND]: {
    path: AppPaths.not_found,
    element: <NotFoundPage />,
  },
}

import { MainPage } from "@/pages/main-page"
import { NotFoundPage } from "@/pages/not-found-page"
import { RouteProps } from "react-router-dom"

type AppRoutes = "main" | "not_found"

export const AppPaths: Record<AppRoutes, string> = {
  main: "/",

  not_found: "*",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  main: { path: AppPaths.main, element: <MainPage /> },

  not_found: { path: AppPaths.not_found, element: <NotFoundPage /> },
}

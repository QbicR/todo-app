import type { RouteProps } from "react-router-dom"

import { MainPage } from "@/pages/main-page"
import { NotFoundPage } from "@/pages/not-found-page"
import { AppPaths, AppRoutes } from "@/shared/config/router"
import { Route, Routes } from "react-router-dom"

const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: AppPaths.main, element: <MainPage /> },

  [AppRoutes.NOT_FOUND]: {
    path: AppPaths.not_found,
    element: <NotFoundPage />,
  },
}

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }, index) => (
      <Route key={index} path={path} element={element} />
    ))}
  </Routes>
)

import { Route, Routes } from "react-router-dom"

import { routeConfig } from "./router-config"

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }, index) => (
      <Route key={index} path={path} element={element} />
    ))}
  </Routes>
)

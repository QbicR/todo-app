import { routeConfig } from "../../../shared/config/router-config"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }, index) => (
      <Route key={index} path={path} element={element} />
    ))}
  </Routes>
)

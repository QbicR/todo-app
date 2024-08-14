import { NextUIProvider } from "@nextui-org/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./app/App.tsx"
import { ErrorBoundary } from "./app/providers"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)

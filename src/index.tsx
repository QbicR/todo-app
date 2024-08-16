import { NextUIProvider } from "@nextui-org/react"
import { createRoot } from "react-dom/client"
import { QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"

import App from "./app/App.tsx"
import { ErrorBoundary } from "./app/providers"
import { queryClient } from "./shared/api"
import "./shared/config/i18n"

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ErrorBoundary>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </QueryClientProvider>,
)

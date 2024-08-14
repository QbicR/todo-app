import { Header } from "@/widgets/header"

import { AppRouter } from "./providers"
import "./styles/index.css"

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  )
}

export default App

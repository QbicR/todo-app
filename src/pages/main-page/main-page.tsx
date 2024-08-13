import { AppPaths } from "@/app/providers"
import { useNavigate } from "react-router-dom"

export const MainPage = () => {
  const navigate = useNavigate()

  const click = () => {
    navigate(AppPaths.not_found)
  }

  return (
    <div>
      MainPage
      <button onClick={click}>На страницу ошибки</button>
    </div>
  )
}

import { AppPaths } from "@/app/providers"
import { useNavigate } from "react-router-dom"

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const click = () => {
    navigate(AppPaths.main, { replace: true })
  }

  return (
    <div>
      NotFoundPage
      <button onClick={click}>На главную</button>
    </div>
  )
}

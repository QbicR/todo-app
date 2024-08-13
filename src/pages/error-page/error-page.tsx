import { AppPaths } from "@/app/providers"
import { useNavigate } from "react-router-dom"

export const ErrorPage = () => {
  const navigate = useNavigate()

  const click = () => {
    navigate(AppPaths.main)
  }

  return (
    <div>
      ErrorPage<button onClick={click}>На главную</button>
    </div>
  )
}

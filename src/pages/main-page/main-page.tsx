import { AppPaths } from "@/app/providers"
import { ContentTemplate, Heading } from "@/shared/ui"
import { AppLink } from "@/shared/ui"

export const MainPage = () => {
  return (
    <ContentTemplate title="Мои дела">
      <div className="flex flex-col gap-8">
        <Heading>MainPage</Heading>
        <AppLink to={AppPaths.not_found} className="w-fit">
          На страницу ошибки
        </AppLink>
      </div>
    </ContentTemplate>
  )
}

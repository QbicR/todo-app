import { AppPaths } from "@/app/providers"
import { ContentTemplate, AppLink, Heading } from "@/shared/ui"

export const NotFoundPage = () => {
  return (
    <ContentTemplate title="Страница не найдена">
      <div className="flex flex-col gap-8">
        <Heading>NotFoundPage</Heading>
        <AppLink className="w-fit" to={AppPaths.main} replace>
          На главную
        </AppLink>
      </div>
    </ContentTemplate>
  )
}

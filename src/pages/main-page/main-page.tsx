import { useGetAndFilterTodos } from "@/entities/todo"
import { FindTodo } from "@/features/find-todo"
import { ContentTemplate, EmptyMessage } from "@/shared/ui"
import { TodoList } from "@/widgets/todo-list"
import { Toolbar } from "@/widgets/toolbar"
import { useTranslation } from "react-i18next"

export const MainPage = () => {
  const {
    data,
    isFetching,
    handleChangeSearch,
    handleChangeStatus,
    handleChangeLimit,
  } = useGetAndFilterTodos()
  const { t } = useTranslation()

  const showEmptyMssage = data && data.length === 0 && !isFetching

  return (
    <ContentTemplate title={t("title.main")}>
      <div className="flex h-full flex-col gap-8">
        <h1 className="text-foreground-600">{t("header.app")}</h1>
        <FindTodo setSearchValue={handleChangeSearch} />
        <div className="-m-2 flex h-full flex-col gap-4 overflow-hidden p-2">
          <Toolbar setFilterValue={handleChangeStatus} />
          {!showEmptyMssage ? (
            <TodoList
              todos={data || []}
              isFetching={isFetching}
              handleChangeLimit={handleChangeLimit}
            />
          ) : (
            <EmptyMessage />
          )}
        </div>
      </div>
    </ContentTemplate>
  )
}

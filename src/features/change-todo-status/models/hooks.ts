import type { ITodo } from "@/entities/todo"

import { queryClient, request } from "@/shared/api"
import { FETCH_TODOS_QUERY_KEY } from "@/shared/constants"
import { useMutation } from "react-query"

const changeTodoStatus = async ({
  id,
  todo,
}: {
  id: number
  todo: Partial<ITodo>
}) =>
  (await request<ITodo>("patch", `/todos/${String(id)}`, { data: todo })).data

export const useChangeTodoStatus = () =>
  useMutation(changeTodoStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FETCH_TODOS_QUERY_KEY })
    },
  })

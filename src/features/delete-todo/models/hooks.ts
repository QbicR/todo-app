import type { ITodo } from "@/entities/todo"

import { queryClient, request } from "@/shared/api"
import { FETCH_TODOS_QUERY_KEY } from "@/shared/constants"
import { useMutation } from "react-query"

const deleteTodo = async ({ id }: { id: number }) =>
  (await request<ITodo>("delete", `/todos/${String(id)}`, {})).data

export const useDeleteTodo = () =>
  useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FETCH_TODOS_QUERY_KEY })
    },
  })

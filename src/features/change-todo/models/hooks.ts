import type { ITodo } from "@/entities/todo"

import { queryClient, request } from "@/shared/api"
import { FETCH_TODOS_QUERY_KEY } from "@/shared/constants"
import { useMutation } from "react-query"

const changeTodo = async ({
  id,
  todo,
}: {
  id: number
  todo: CustomOmit<ITodo, "status">
}) => (await request<ITodo>("put", `/todos/${String(id)}`, { data: todo })).data

export const useChangeTodo = () =>
  useMutation(changeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FETCH_TODOS_QUERY_KEY })
    },
  })

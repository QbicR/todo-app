import type { ITodo } from "@/entities/todo"

import { queryClient, request } from "@/shared/api"
import { FETCH_TODOS_QUERY_KEY } from "@/shared/constants"
import { useMutation } from "react-query"

const createTodo = async (todo: Omit<ITodo, "id">) =>
  (await request<ITodo>("post", "/todos", { data: todo })).data

export const useCreateTodo = () =>
  useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FETCH_TODOS_QUERY_KEY })
    },
  })

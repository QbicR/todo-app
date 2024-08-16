import { request } from "@/shared/api"
import { FETCH_TODOS_QUERY_KEY } from "@/shared/constants"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

import type { IFetchTodosParams, ITodo, TTodoStatus } from "../types"

const fetchTodos = async ({ search, status }: IFetchTodosParams) => {
  const params: {
    q?: string
    status?: TTodoStatus
    _sort?: keyof ITodo
    _order?: "asc" | "desc"
  } = { _sort: "id", _order: "desc" }

  if (search) {
    params.q = search
  }

  if (status) {
    params.status = status
  }

  return (await request<ITodo[]>("get", "/todos", { params })).data
}

const useGetTodos = ({ search, status }: IFetchTodosParams) =>
  useQuery(FETCH_TODOS_QUERY_KEY, () => fetchTodos({ search, status }), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

export const useGetAndFilterTodos = () => {
  const [{ search, status }, setFilters] = useState<{
    search: string
    status: TTodoStatus
  }>({ search: "", status: "" })

  const { data, refetch, isFetching } = useGetTodos({
    search,
    status,
  })

  useEffect(() => {
    refetch()
  }, [refetch, search, status])

  const handleChangeSearch = (search: string) => {
    setFilters(prevState => ({ ...prevState, search }))
  }

  const handleChangeStatus = (status: TTodoStatus) => {
    setFilters(prevState => ({ ...prevState, status }))
  }

  return { data, isFetching, handleChangeSearch, handleChangeStatus }
}

import { request } from "@/shared/api"
import { FETCH_TODOS_QUERY_KEY } from "@/shared/constants"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

import type { IFetchTodosParams, ITodo, TTodoStatus } from "../types"

const fetchTodos = async ({ search, status }: IFetchTodosParams) => {
  const params: {
    q?: string
    status?: TTodoStatus
  } = {}

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
    meta: { search: search, status: status },
  })

export const useGetAndFilterTodos = () => {
  const [{ search, status }, setFilters] = useState<{
    search: string
    status: TTodoStatus
  }>({ search: "", status: "" })

  const { data, refetch } = useGetTodos({
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

  return { data, handleChangeSearch, handleChangeStatus }
}

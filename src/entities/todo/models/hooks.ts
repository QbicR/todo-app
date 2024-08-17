import { request } from "@/shared/api"
import { FETCH_TODOS_QUERY_KEY, PER_PAGE_LIMIT } from "@/shared/constants"
import { useCallback, useEffect, useState } from "react"
import { useQuery } from "react-query"

import type { IFetchTodosParams, ITodo, TTodoStatus } from "../types"

const fetchTodos = async ({
  search,
  status,
  limitPerPage,
}: IFetchTodosParams) => {
  const params: {
    q?: string
    status?: TTodoStatus
    _sort?: keyof ITodo
    _order?: "asc" | "desc"
    _limit?: number
  } = { _sort: "id", _order: "desc", _limit: limitPerPage }

  if (search) {
    params.q = search
  }

  if (status) {
    params.status = status
  }

  return (await request<ITodo[]>("get", "/todos", { params })).data
}

const useGetTodos = ({ search, status, limitPerPage }: IFetchTodosParams) =>
  useQuery(
    FETCH_TODOS_QUERY_KEY,
    () => fetchTodos({ search, status, limitPerPage }),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  )

export const useGetAndFilterTodos = () => {
  const [{ search, status, limitPerPage }, setFilters] = useState<{
    search: string
    status: TTodoStatus
    limitPerPage: number
  }>({ search: "", status: "", limitPerPage: PER_PAGE_LIMIT })

  const { data, refetch, isFetching, remove } = useGetTodos({
    search,
    status,
    limitPerPage,
  })

  useEffect(() => {
    refetch()
  }, [refetch, search, status, limitPerPage])

  const handleChangeSearch = useCallback(
    (search: string) => {
      remove()

      setFilters(prevState => ({
        ...prevState,
        search,
        limitPerPage: PER_PAGE_LIMIT,
      }))
    },
    [remove],
  )

  const handleChangeStatus = useCallback(
    (status: TTodoStatus) => {
      remove()

      setFilters(prevState => ({
        ...prevState,
        status,
        limitPerPage: PER_PAGE_LIMIT,
      }))
    },
    [remove],
  )

  const handleChangeLimit = (limit: number) => {
    setFilters(prevState => ({
      ...prevState,
      limitPerPage: limitPerPage + limit,
    }))
  }

  return {
    data,
    isFetching,
    handleChangeSearch,
    handleChangeStatus,
    handleChangeLimit,
  }
}

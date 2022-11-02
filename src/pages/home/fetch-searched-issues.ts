import { ApolloError, useQuery } from '@apollo/client'
import { client } from '../../services'
import { SearchIssuesList } from './query'
import { SearchedIssueType } from './types'

type SearchedIssueTypeQuery = {
  issues: SearchedIssueType
  loading: boolean
  error: ApolloError | undefined
}

export const useSearchedIssuesList = (search: string, status: string): SearchedIssueTypeQuery => {
  const queryString = `repo:facebook/react in:title ${search} in:bodyText ${search} is:issue is:${status}`
  const { data, loading, error } = useQuery(SearchIssuesList, {
    variables: { query: queryString },
    skip: !queryString,
    fetchPolicy: 'cache-and-network',
    client,
  })

  return {
    issues: data?.search,
    loading: loading,
    error,
  }
}

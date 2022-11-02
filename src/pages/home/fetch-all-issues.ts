import { ApolloError, useQuery } from '@apollo/client'
import { IssueEdges } from './types'
import { client } from '../../services'
import { IssuesList } from './query'

type AllIssueType = {
  allIssues: IssueEdges
  allIssuesLoading: boolean
  allIssuesError: ApolloError | undefined
}

export const useAllIssuesList = (activeClass: string): AllIssueType => {
  const status = activeClass.toUpperCase()
  const { data, loading, error } = useQuery(IssuesList, {
    variables: { states: [status] },
    skip: !status,
    fetchPolicy: 'cache-and-network',
    client,
  })

  return {
    allIssues: data?.repository?.issues,
    allIssuesLoading: loading,
    allIssuesError: error,
  }
}

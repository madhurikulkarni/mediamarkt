import { ApolloError, useQuery } from '@apollo/client'
import { IssueDetailType } from './types'
import { client } from '../../services'
import { IssueCommentsQuery } from './query'

type IssueDetailsType = {
  issue: IssueDetailType
  loading: boolean
  error: ApolloError | undefined
}

export const useIssueComments = (issueNumber: Number): IssueDetailsType => {
  const { data, loading, error } = useQuery(IssueCommentsQuery, {
    variables: {
      number: issueNumber,
    },
    client,
  })

  return {
    issue: data?.repository?.issue,
    loading,
    error,
  }
}

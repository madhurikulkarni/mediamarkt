import { gql } from '@apollo/client'

export const IssuesList = gql`
  query IssuesList($states: [IssueState!]) {
    repository(owner: "facebook", name: "react") {
      id
      issues(last: 100, states: $states, orderBy: { field: CREATED_AT, direction: ASC }) {
        edges {
          node {
            id
            title
            number
            state
            createdAt
            closed
            closedAt
            author {
              url
            }
          }
        }
      }
    }
  }
`

export const SearchIssuesList = gql`
  query SearchIssuesList($query: String!) {
    search(query: $query, type: ISSUE, last: 100) {
      nodes {
        ... on Issue {
          id
          number
          title
          state
          createdAt
          closed
          closedAt
        }
      }
    }
  }
`

import { gql } from '@apollo/client'

export const IssueCommentsQuery = gql`
  query IssueCommentsQuery($number: Int!) {
    repository(name: "react", owner: "facebook") {
      id
      issue(number: $number) {
        bodyHTML
        number
        title
        author {
          avatarUrl
        }
        comments(first: 10) {
          edges {
            node {
              id
              author {
                avatarUrl
              }
              bodyHTML
            }
          }
        }
      }
    }
  }
`

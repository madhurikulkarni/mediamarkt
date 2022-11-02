import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { CommentsType } from './types'
import { useIssueComments } from './fetch-issue-comments'
import { CommentBox } from '../../atom/CommentBox'
import './styles.css'

export interface IssueDetailProp {
  number: Number
}

export const IssueComments = () => {
  const location = useLocation().state as IssueDetailProp
  const { issue, loading, error } = useIssueComments(location.number)

  if (loading || error) {
    return (
      <div className="wrapper">
        <p>{error ? error.message : 'Loading...'}</p>
      </div>
    )
  }

  return (
    <div className="wrapper">
      <h2>{`${issue.title} - #${issue.number}`}</h2>
      <hr />
      <CommentBox avatarUrl={issue.author.avatarUrl} bodyHTML={issue.bodyHTML} />
      {issue.comments.edges.map((comment: CommentsType) => {
        return (
          <div key={comment.node.id}>
            <CommentBox
              avatarUrl={comment.node.author.avatarUrl}
              bodyHTML={comment.node.bodyHTML}
            />
          </div>
        )
      })}
    </div>
  )
}

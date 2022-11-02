export type IssuesType = {
  repository: {
    id: string
    issues: IssueEdges
  }
}

export type IssueEdges = {
  edges: [IssueType]
}

export type IssueType = {
  node: IssueNode
}

export type SearchedIssueType = {
  nodes: [IssueNode]
}

export type IssueNode = {
  id: string
  title: string
  number: Number
  state: string
  createdAt: string
  closed: Boolean
  closedAt: string
}

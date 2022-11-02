export type IssueDetailType = {
  title: string
  bodyHTML: string
  number: Number
  author: {
    avatarUrl: string
  }
  comments: {
    edges: [CommentsType]
  }
}

export type CommentsType = {
  node: {
    id: string
    author: {
      avatarUrl: string
    }
    bodyHTML: string
  }
}

// @ts-ignore
import { Markup } from 'react-render-markup'
import './styles.css'

interface CommentBoxProps {
  avatarUrl: string
  bodyHTML: string
}

export const CommentBox = ({ avatarUrl, bodyHTML }: CommentBoxProps) => {
  return (
    <div className="issueBody">
      <img src={avatarUrl} alt="avatar" className="avatarUrl" />
      <div className="bodyText">
        <Markup markup={bodyHTML} />
      </div>
    </div>
  )
}

import { formatDate } from '../../utils/format-date'
import './styles.css'

interface IssueRowProps {
  issueTitle: string
  issueNumber: Number
  status?: string
  date: string
}

export const IssueRow = ({ issueTitle, issueNumber, status, date }: IssueRowProps) => {
  const statusString =
    status === 'OPEN' ? `was opened on ${formatDate(date)}` : `was closed on ${formatDate(date)}`
  return (
    <div className="boxRow">
      <div className="issueName">
        <a href="issuelink" className="issueTitle">
          {issueTitle}
        </a>
        <p className="issueDetail">
          <span>{`# ${issueNumber} ${statusString}`}</span>
        </p>
      </div>
    </div>
  )
}

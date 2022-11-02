import { Routes, Route } from 'react-router-dom'
import { IssueComments } from './pages/detail'
import { GithubIssues } from './pages/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<GithubIssues />}></Route>
      <Route path="/issuelink" element={<IssueComments />} />
    </Routes>
  )
}

export default App

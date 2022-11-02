import * as React from 'react'
import { useState } from 'react'
import { useSearchedIssuesList } from './fetch-searched-issues'
import { useAllIssuesList } from './fetch-all-issues'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import { IssueRow } from '../../atom/IssueRow'
import { Form } from '../../atom/Form'
import { IssueNode, IssueType } from './types'

export const GithubIssues = () => {
  const states = ['open', 'closed']
  const [activeClass, setActiveClass] = useState(Number)
  const { allIssues, allIssuesLoading, allIssuesError } = useAllIssuesList(states[activeClass])
  const [searchInput, setSearchInput] = useState('')
  const [search, setSearch] = useState('')
  const { issues, loading, error } = useSearchedIssuesList(search, states[activeClass])
  const navigate = useNavigate()

  // WIP: using react route to update search params in URL and retrieve them on navigating back from detail page
  /*   let [searchParams, setSearchParams] = useSearchParams()
  const searchParamsString = searchParams.toString()
  const searchedURI = decodeURIString(searchParamsString) */

  const onIssueItemClicked = (issueId: Number) => {
    navigate('/issuelink', {
      state: {
        number: issueId,
      },
    })
  }

  const changeActiveButton = (index: number) => () => {
    setActiveClass(index)
  }

  const onSearchPressed = (event: any) => {
    if (event.key === 'Enter') {
      setSearch(searchInput)
    }
  }

  const renderSearchResults = () => {
    return issues.nodes.length > 1 ? (
      issues?.nodes?.map((issues: IssueNode) => {
        return (
          <div key={issues.id} onClick={() => onIssueItemClicked(issues.number)}>
            <IssueRow
              issueTitle={issues.title}
              issueNumber={issues.number}
              status={issues.state}
              date={issues.closed ? issues.closedAt : issues.createdAt}
            />
          </div>
        )
      })
    ) : (
      <p className="searchResultsError">No Search Results Found</p>
    )
  }

  const renderAllIssues = () => {
    return allIssues?.edges?.map((issue: IssueType) => {
      return (
        <div key={issue.node.id} onClick={() => onIssueItemClicked(issue.node.number)}>
          <IssueRow
            issueTitle={issue.node.title}
            issueNumber={issue.node.number}
            status={issue.node.state}
            date={issue.node.closed ? issue.node.closedAt : issue.node.createdAt}
          />
        </div>
      )
    })
  }

  if (loading || error) {
    return (
      <div className="wrapper">
        <p>{error ? error.message : 'Loading Search Results...'}</p>
      </div>
    )
  }

  if (allIssuesLoading || allIssuesError) {
    return (
      <div className="wrapper">
        <p>{allIssuesError ? allIssuesError.message : 'Loading...'}</p>
      </div>
    )
  }

  return (
    <div className="wrapper">
      <Form
        value={searchInput}
        onSearchPressed={(event) => onSearchPressed(event)}
        onChangeText={(text) => setSearchInput(text)}
      />
      <div className="issueWrapper">
        <div className="issueFilter">
          {states.map((state, index) => {
            return (
              <button
                key={state}
                onClick={changeActiveButton(index)}
                className={`stateButton ${index === activeClass ? 'active' : 'inactive'}`}
              >
                {state}
              </button>
            )
          })}
        </div>
        {search.length > 1 ? renderSearchResults() : renderAllIssues()}
      </div>
    </div>
  )
}

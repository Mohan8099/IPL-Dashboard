import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-matches-container">
      <h1 className="latest-matches-heading">Latest Matches</h1>
      <div className="latest-matches-card">
        <div className="latest-matches-logo-container">
          <div className="latest-matches-details-container">
            <p className="team-names">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="status">{result}</p>
          </div>
          <img
            className="logo"
            src={competingLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="match-details-info">
          <div className="matches-info-card">
            <p className="match-label">First Innings</p>
            <p className="match-details">{firstInnings}</p>
          </div>
          <div className="matches-info-card">
            <p className="match-label">Second Innings</p>
            <p className="match-details">{secondInnings}</p>
          </div>
          <div className="matches-info-card">
            <p className="match-label">Man Of The Match</p>
            <p className="match-details">{manOfTheMatch}</p>
          </div>
          <div className="matches-info-card">
            <p className="match-label">Umpires</p>
            <p className="match-details">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch

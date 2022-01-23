import './index.css'

const MatchCard = props => {
  const {recentMatchData} = props
  const {result, competingTeam, competingLogo, matchStatus} = recentMatchData
  return (
    <li className={`match-card ${matchStatus}`}>
      <img
        className="logo"
        src={competingLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard

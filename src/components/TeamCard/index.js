import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {matchDetails} = props
  const {id, imgUrl, name} = matchDetails

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="team-card">
        <img src={imgUrl} alt={`${name}`} className="img" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

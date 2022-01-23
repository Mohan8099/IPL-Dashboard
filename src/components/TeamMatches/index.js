import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchData: [], isRendered: false}

  componentDidMount = () => {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    //    console.log(data)

    const updatedData = {
      bannerUrl: data.team_banner_url,
      latestMatch: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }

    //    console.log(updatedData)

    this.setState({matchData: updatedData, isRendered: true})
  }

  renderLatestMatches = () => {
    const {matchData} = this.state
    const {bannerUrl, latestMatch} = matchData

    return (
      <div className="matches-container">
        <img src={bannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchDetails={latestMatch} />
        {this.renderMatchCards()}
      </div>
    )
  }

  renderMatchCards = () => {
    const {matchData} = this.state
    const {recentMatches} = matchData

    return (
      <ul className="recent-match-container">
        {recentMatches.map(eachMatch => (
          <MatchCard recentMatchData={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isRendered} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-match-container ${id}`}>
        {isRendered ? this.renderLatestMatches() : this.renderLoader()}
      </div>
    )
  }
}

export default TeamMatches

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplData: [], isRendered: false}

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    //  console.log(data)

    const updatedData = data.teams.map(each => ({
      id: each.id,
      imgUrl: each.team_image_url,
      name: each.name,
    }))

    //  console.log(updatedData)

    this.setState({iplData: updatedData, isRendered: true})
  }

  renderTeamCard = () => {
    const {iplData} = this.state
    return (
      <ul className="team-list-container">
        {iplData.map(eachTeam => (
          <TeamCard key={eachTeam.id} matchDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isRendered} = this.state
    return (
      <div className="home-container">
        <div className="ipl-card">
          <div className="header-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isRendered ? this.renderTeamCard() : this.renderLoader()}
        </div>
      </div>
    )
  }
}

export default Home

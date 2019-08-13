import React from 'react'
import PropTypes from 'prop-types'

class Player2 extends React.Component {
  render () {
    const {avtar2,username2,name2,bio2,followers2,following2,created2,link2,repo2,location2} = this.props

   return(
      <div>
         {avtar2 && <img src={avtar2}/> }
      </div>
     )
  }
}

export default Player2;

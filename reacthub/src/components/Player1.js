import React from 'react'
import PropTypes from 'prop-types'

class Player1 extends React.Component {
  render () {
        const {avtar1, username1, name1, bio1, followers1, following1, created1, link1, repo1, location1} = this.props
      return(
        <div>
          <img src={avtar1}/>
        </div>

      )

  }
}

export default Player1;

import React from 'react'
import PropTypes from 'prop-types'

class Player2 extends React.Component {
  render () {
    const {avtar2,username2,name2,bio2,followers2,following2,created2,link2,repo2,location2} = this.props

   return(
     <div>
     {
       profile1 && <div className='container panel z-depth-5'>
                    <div className='row'>
                     <img src={avtar1} alt={avtar1} class="circle responsive-img avtar"  />
                     </div>
                     <div classname='info'>
                       <p className='name1'>{name1}</p>
                       <h6>{bio1}</h6>
                       <h5>{location1}</h5>
                       <div className='row'>
                         <div className='col s4'>
                           <h6><ion-icon name="people" id='size'></ion-icon><h6 className='repo'>{followers1} Followers</h6></h6>
                         </div>
                         <div className='col s4'>
                           <h6><ion-icon name="person" id='size'></ion-icon><h6 className='repo'>{following1} Following</h6></h6>
                         </div>
                         <div className='col s4'>
                           <h6><ion-icon name="code" id='size'></ion-icon><h6 className='repo'>{repo1} Repository</h6></h6>
                         </div>
                       </div>
                       <a class="waves-effect waves-light btn-small green darken-1 button" href={link1} target="_blank">See full Profile</a>

                     </div>
                   </div>
     }
     </div>
     )
  }
}

export default Player2;

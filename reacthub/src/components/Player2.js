import React from 'react'
import PropTypes from 'prop-types'
import './css/Player1.css'

class Player2 extends React.Component {
  render () {
    const {avtar2,username2,name2,bio2,followers2,following2,created2,link2,repo2,location2,profile2} = this.props

   return(
     <div>
     {
       profile2 && <div className='container panel z-depth-5'>
                    <div className='row'>
                     <img src={avtar2} alt={avtar2} class="circle responsive-img avtar"  />
                     </div>
                     <div classname='info'>
                       <p className='name1'>{name2}</p>
                       <h6>{bio2}</h6>
                       <h5>{location2}</h5>
                       <div className='row'>
                         <div className='col s4'>
                           <h6><ion-icon name="people" id='size'></ion-icon><h6 className='repo'>{followers2} Followers</h6></h6>
                         </div>
                         <div className='col s4'>
                           <h6><ion-icon name="person" id='size'></ion-icon><h6 className='repo'>{following2} Following</h6></h6>
                         </div>
                         <div className='col s4'>
                           <h6><ion-icon name="code" id='size'></ion-icon><h6 className='repo'>{repo2} Repository</h6></h6>
                         </div>
                       </div>
                       <a class="waves-effect waves-light btn-small green darken-1 button" href={link2} target="_blank">See full Profile</a>

                     </div>
                   </div>
     }
     </div>
     )
  }
}

export default Player2;

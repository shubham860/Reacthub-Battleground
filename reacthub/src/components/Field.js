import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Player1 from './Player1'
import Player2 from './Player2'
import './css/Field.css'
import logo from './Images/logo.png';

const client_id =  'Iv1.713715a78bd3e712'
const client_secret =  '15fdb5692f7730109c2eb41ceefcc9360be24de6'

class Field extends React.Component {
  constructor(){
    super()
    this.state = {
      avtar1 : '',
      avtar2 : '',
      username1 : '',
      username2 : '',
      name1 : '',
      name2 : '',
      bio1 : '',
      bio2 : '',
      followers1 : '',
      followers2 : '',
      following1 : '',
      following2 : '',
      created1 : '',
      created2 : '',
      link1 : '',
      link2 : '',
      repo1 : '',
      repo2 : '',
      location1 : '',
      location2 : '',
      show1 : false,
      hide1 : true,
      show2 : false,
      hide2 : true,
      profile1 : false,
      profile2 : false,
      score1 : '',
      score2 : ''
    }
  }

  input1 = event => {
      this.setState({
        username1 : event.target.value
      })
  }

  input2 = event => {
      this.setState({
        username2 : event.target.value
      })
  }

  handler1 = event => {
    axios
        .get(`https://api.github.com/users/${this.state.username1}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(response =>{
            console.log(response.data)
            var  metrices = response.data
            this.setState({
              avtar1 : metrices.avatar_url,
              username1 : metrices.login,
              name1 : metrices.name,
              bio1 : metrices.bio,
              followers1 : metrices.followers,
              following1 : metrices.following,
              created1 : metrices.created_at,
              link1 : metrices.html_url,
              location1 : metrices.location,
              repo1 : metrices.public_repos,
              show1 : false,
              profile1:true,
              winner : '',
              score1 : '',
              score2 : ''
            })

        })
        .catch(error => {
    				alert('Invalid Inputs')
    			})
          }


  handler2 = event => {
    axios
        .get(`https://api.github.com/users/${this.state.username2}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(response =>{
            console.log(response.data)
            var  metrices = response.data
            this.setState({
              avtar2 : metrices.avatar_url,
              username2 : metrices.login,
              name2 : metrices.name,
              bio2 : metrices.bio,
              followers2 : metrices.followers,
              following2 : metrices.following,
              created2 : metrices.created_at,
              link2 : metrices.html_url,
              location2 : metrices.location,
              repo2 : metrices.public_repos,
              show2 : false,
              profile2 : true
            })
        })
        .catch(error => {
            alert('Invalid Inputs')
          })

  }

  toggle1 = event =>{
     this.setState({
       show1 : true,
       hide1 : false
     })
  }

  toggle2 = event =>{
     this.setState({
       show2 : true,
       hide2 : false
     })
  }



  click = event =>{
    const repofol_Sum1 = this.state.repo1 + this.state.followers1
    const repofol_Sum2 = this.state.repo2 + this.state.followers2
    repofol_Sum1 > repofol_Sum2 ? (this.setState({
      winner : 'Winner A',
      score1 :  `${repofol_Sum1}`,
      score2 : `${repofol_Sum2}`
    })
     ):(this.setState({
       winner : 'Winner B',
       score1 :  `${repofol_Sum1}`,
       score2 : `${repofol_Sum2}`
    }))
  }

  render () {
    const {avtar1,avtar2,username1,username2,name1,name2,bio1,bio2,followers1,followers2,following1,following2,created1,created2,link1,link2,repo1,repo2,location1,location2,show1,show2,profile1,profile2,winner,score1,score2} = this.state
   return(

      <div className="container">
        <div className='row'>
          <h1 class='white-text heading' id="mainhead"><span>BATTLE </span><span class='ground'> GROUND</span></h1>
        </div>
        <div className="row"  id="main">
          <div className="col s4">

           { this.state.hide1 && <div className='button'>
             <h5 class='white-text'>Player A</h5><br/>
             <a class="btn-floating btn-large waves-effect waves-light green darken-1 " onClick={this.toggle1}><i class="material-icons">+</i></a>
            </div>
           }

           {
            this.state.show1 && <div className="Player1">
                                <input type='text' className='input' value={username1} onChange={this.input1} placeholder='GitHub Username'/><br/><br/>
                                  <a class="waves-effect waves-light btn-small green darken-1 button" onClick={this.handler1}>Submit</a>


                               </div>
           }
                 <Player1 avtar1={avtar1} username1={username1} name1={name1} bio1={bio1} followers1={followers1} following1={following1} created1={created1} link1={link1} location1={location1} repo1={repo1} show1={show1} profile1={profile1}/>

           </div>

            <div className='col s4'>
              <a onClick={this.click}><img src={logo} className="img"/></a>
            </div>

        <div className="col s4">

          { this.state.hide2 && <div className='button'>
            <h5 class='white-text'>Player B</h5><br/>
            <a class="btn-floating btn-large waves-effect waves-light green darken-1" onClick={this.toggle2}><i class="material-icons">+</i></a>
            </div>
          }

          {
            this.state.show2 && <div className='Player2'>
                                  <input type='text' className='input' value={username2} onChange={this.input2} placeholder='GitHub Username' /><br/><br/>
                                  <a class="waves-effect waves-light btn-small green darken-1 button" onClick={this.handler2}>Submit</a>

                                </div>
          }
          <Player2 avtar2={avtar2} username2={username2} name2={name2} bio2={bio2} followers2={followers2} following2={following2} created2={created2} link2={link2} location2={location2} repo2={repo2} show2={show2} profile2={profile2}/>

        </div>

      </div>

      <div className='container score'>
        <div class='row'>
          <div class='col s4'>
            <p>{score1}</p>
          </div>
          <div class='col s4'>
            <p>{winner}</p>
          </div>
          <div class='col s4'>
            <p>{score2}</p>
          </div>
        </div>
      </div>


    </div>

   )}
}

export default Field;

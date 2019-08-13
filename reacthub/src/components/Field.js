import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Player1 from './Player1'
import Player2 from './Player2'
import './css/Field.css'

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
              repo1 : metrices.public_repos
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
              repo2 : metrices.public_repos
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

  render () {
    const {avtar1,avtar2,username1,username2,name1,name2,bio1,bio2,followers1,followers2,following1,following2,created1,created2,link1,link2,repo1,repo2,location1,location2} = this.state
   return(

      <div className="container">
        <div className="row"  id="main">

          <div className="col m6">

           { this.state.hide1 && <div className='button'><a class="btn-floating btn-large waves-effect waves-light red " onClick={this.toggle1}><i class="material-icons">+</i></a></div> }

           {
            this.state.show1 && <div className="Player1">
                                <input type='text' value={username1} onChange={this.input1} />
                                <button type='button' onClick={this.handler1}>Submit</button>
                                <Player1 avtar1={avtar1} username1={username1} name1={name1} bio1={bio1} followers1={followers1} following1={following1} created1={created1} link1={link1} location1={location1} repo1={repo1} />
                               </div>
           }

           </div>

        <div className="col m6">

          { this.state.hide2 && <div className='button'><a class="btn-floating btn-large waves-effect waves-light red" onClick={this.toggle2}><i class="material-icons">+</i></a></div> }

          {
            this.state.show2 && <div className='Player2'>
                                  <input type='text' value={username2} onChange={this.input2} />
                                  <button type='button' onClick={this.handler2}>Submit</button>
                                  <Player2 avtar2={avtar2} username2={username2} name2={name2} bio2={bio2} followers2={followers2} following2={following2} created2={created2} link2={link2} location2={location2} repos2={repo2} />
                                </div>
          }
        </div>

      </div>
    </div>

   )}
}

export default Field;

import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'



const client_id =  'Iv1.713715a78bd3e712'
const client_secret =  '15fdb5692f7730109c2eb41ceefcc9360be24de6'

class Field extends React.Component {
  constructor(){
    super()
    this.state = {
      username1 : '',
      username2 : ''
    }
  }

  input1 = event => {
      this.setState({
        username1 : event.target.values
      })
  }

  input2 = event => {
      this.setState({
        username2 : event.target.values
      })
  }

  handler1 = event => {
    event.preventDefault()
    axios
        .get(`https://api.github.com/users/${this.state.username1}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(response =>{
            console.log(response.data)
        })
        .catch(error => {
    				alert('Invalid Inputs')
    			})

  }


  handler2 = event => {
    event.preventDefault()
    axios
        .get(`https://api.github.com/users/${this.state.username2}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(response =>{
            console.log(response.data)
        })
        .catch(error => {
            alert('Invalid Inputs')
          })

  }

  render () {
    const { username1,username2} = this.state
   return(
      <div>
        <input type='text' value={username1} onChange={this.input1} />
        <button type='button' onClick={this.handler1}>Submit</button>

        <input type='text' value={username2} onChange={this.input2} />
        <button type='button' onClick={this.handler2}>Submit</button>

      </div>
   )
  }
}

export default Field;

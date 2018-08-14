import React from 'react'
import { Button } from '@material-ui/core'

export default class Locations extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>Locations</h1>

        Locations list

        <Button >Add Location</Button>
      </div>
    )
  }
}

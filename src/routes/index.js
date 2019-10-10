import React, { Component } from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from '../components/Home'

class ChildRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/tag/:type" component={Home}></Route>
        <Route render={() => (<Redirect to='/404'></Redirect>)}></Route>
      </Switch>
    )
  }
}

export default ChildRoute
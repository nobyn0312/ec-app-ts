import React from 'react'
import {Switch,Route} from 'react-router'
import Login from './templates/login'
import Home from './templates/Home'

const Router =()=>{
  return(
    <Switch>
      <Route exact path={"/login"} component={Login}/>
      <Route exact path={"(/)?"} component={Home}/>
    </Switch>
  )
}
export default Router
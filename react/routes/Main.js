import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ShowList from './ShowList';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/lists/:list_id' component={ShowList}/>

    </Switch>
  </main>
)

export default Main

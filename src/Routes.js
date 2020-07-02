import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './resourcer/Main'
import Login from './resourcer/Login'
import Repository from './resourcer/Repository'
import Scheduling from './resourcer/Scheduling'


const Routes = () => (
   
   <Router>
      <Scene key = "root">
         <Scene key = "main" hideNavBar component = {Main} title = "Principal" initial = {true} />
         <Scene key = "authentication" hideNavBar component = {Login} title = "Login" initial = {false} />
         <Scene key = "repository" hideNavBar component = {Repository} title = "Repositorio" initial = {false} />
         <Scene key = "scheduling" hideNavBar component = {Scheduling} title = "Agendamento" initial = {false} />
      </Scene>
   </Router>
)


export default Routes
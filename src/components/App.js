import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import { AuthProvider } from "../components/Chat/AuthContext"
import Chats from "./Chat/Chats"
import LoginScreen from "./Chat/LoginScreen"
import Home from './Home/Home'
import VideoChat from "./VideoChat/VideoChat"
import DevPage from './Devs/DevPage'
import Learn from "./Learn/Learn"
import GamesPage from "./Games/GamesPage"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <Switch>
          <AuthProvider>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" exact component={Home} /> 
            <Route path='/videochat' component={VideoChat} />
            <Route path="/devs" component={DevPage} />
            <Route path="/learn" component={Learn} />
            <Route path="/games" component={GamesPage} />
            <Route path="/chats" component={Chats} />
            <Route path="/login" component={LoginScreen} />
          </AuthProvider>
        </Switch>
      </Router>
    </div>
  )
}

export default App


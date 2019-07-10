import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/home"></Redirect>
                    <Route path="/home" component="Home"><Home></Home></Route>
                    <Route path="/login" component="Login"><Login></Login></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default App
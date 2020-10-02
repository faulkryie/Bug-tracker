import React from 'react';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom'
import LoginForm from './session/LoginForm'
import AdminDashboard from './components/AdminDashboard'
import { useSelector } from 'react-redux';
import SignupForm from './session/SignupForm';

//rest encapsulates path and exact being passed down
//redirect user if not logged in
const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={ (props) => token ? <Component {...props} /> : <Redirect to='/login'/> }
    />
  )
}
//if user is logged in, redirect user back to dashboard
const AuthRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={ (props) => token ? <Redirect to='/admin/dashboard'/> : <Component {...props} /> }
    />
  )
}

function App({token}) {
  return (
    <div>
      <h1>bug_tracker_app</h1>
      <nav>
        <NavLink to='/login' >Login</NavLink>
        <NavLink to='/signup' >SignUp</NavLink>
        <NavLink to='/admin/dashboard' >Dashboard</NavLink>
      </nav>
      <Switch>
        <ProtectedRoute token={token} exact path='/admin/dashboard' component={AdminDashboard} />
        <AuthRoute exact token={token} path='/login' component={LoginForm} />
        <AuthRoute token={token} path='/signup' component={SignupForm}/>
      </Switch>
    </div>
  );
}

const AppContainer = () => {
  const token = useSelector( state => state.session.authToken )
  return <App token={token}/>
  
}

export default AppContainer;
import React, {useState} from 'react'
import {useSelector} from 'react-redux'

import Login from './Login'
import Account from './Account'
import SignUp from './SignUp'

const AccountDetails = () => {
  const session = useSelector(state => state.session)
  const [isSigningUp, setIsSigningUp] = useState(false);
  if(session) return <Account />

  return isSigningUp ? 
  <SignUp onChangeIsLoggingIn={() => {
    setIsSigningUp(false);
  }}/> : 
  <Login onChangeIsSigningUp={() => {
    setIsSigningUp(true);
  }}/>
  
};

export default AccountDetails;
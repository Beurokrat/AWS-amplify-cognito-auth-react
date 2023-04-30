import { withAuthenticator } from '@aws-amplify/ui-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import '@aws-amplify/ui-react/styles.css';

function SignIn ({setUser}) {
  const navigate = useNavigate();
  useEffect(()=>{
    setUser()
    navigate('/')
  },[])
  return <> Hello !</>
}

export default withAuthenticator(SignIn)

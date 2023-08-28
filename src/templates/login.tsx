import React from 'react'
import { useDispatch } from 'react-redux'
import { Push, push } from 'connected-react-router';


const dispatch = useDispatch();


const Login = () => {
  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={()=>dispatch(push('/'))}>ログイン</button>
    </div>
  )
}

export default Login
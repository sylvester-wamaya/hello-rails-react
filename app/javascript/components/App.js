import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Greeting from './Greeting'
import { useDispatch } from 'react-redux'
import { fetchGreetings } from '../redux/greetingsSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGreetings())
  }, [dispatch])
  
  return (
 
  <Routes>
    <Route path="/" element={<Greeting />} />
  </Routes>

  )
}

export default App

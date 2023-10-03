import React from 'react'
import { useSelector } from 'react-redux'

const Greeting = () => {

  const {greetings, loading} = useSelector((store) => store.greetings)

if (loading) {
    return <div>Loading...</div>
  }

  return (

    
    <div>
      {greetings.map((greeting) => (
        <div key={greeting.id}>{greeting.greeting}</div>
      ))}
    </div>
  )
}

export default Greeting

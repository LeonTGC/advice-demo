import { useState, useEffect } from "react"
import Card from "./components/Card"

const App = () => {
  const [advice, setAdvice] = useState('')

  const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setAdvice(data)
  }
  useEffect(() => {
    getAdvice()
  }, [])


  if (!advice) return <h1>loading...</h1>
  return (
    <div>
      <div>
        <h1>advice app</h1>
      </div>
      <Card advice={advice} getAdvice={getAdvice} />
    </div>
  )
}

export default App
import { useState } from "react"
import Card from "./components/Card"

const App = () => {
  const [advice, setAdvice] = usestate('')

  const getAdvice = () => {
    const response = fetch('https://api.adviceslip.com/advice')
    const data = response.json
    setAdvice(data)
  }
  useEffect(() => {
    getAdvice()
  })


  if(advice) return <h1>loading...</h1>
  return (
      <div>
      <h1>advice app</h1>
      </div>
      <Card advice={setAdvice} />
  )
}


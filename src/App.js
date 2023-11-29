import { useState, useEffect } from "react"
import Card from "./components/Card"

const App = () => {
  const [dnd, setDnd] = useState('')


  const getDnd = async () => {
    const response = await fetch('https://www.dnd5eapi.co/api/classes/paladin/spells')
    const data = await response.json()
    setDnd(data)
  }
  useEffect(() => {
    getDnd()
  }, [])


  // come back to this
  if(!dnd) return <h1>loading...</h1>
  return (
    <div>
      <div>
      <h1>Paladin app</h1>
      </div>
      {dnd.results.map((spell, index) => {
        return <Card spell={spell}/>
      })}
    </div>
  )
}

export default App
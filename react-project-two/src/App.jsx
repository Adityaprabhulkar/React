
import UserCard from './components/UserCard'
import goku from "./assets/superSeyan-first.jpg"
import goku2 from "./assets/superSeyan2.jpg"
import goku3 from "./assets/superSeyan-God.jpg"

function App() {


  return (
    <div className="container" > 
      <UserCard name="Super Sayian" desc= "desc1" image={goku} style={{"border-radius":"10px"}} />
      <UserCard name="Super Sayian II" desc= "desc2" image={goku2} style={{"border-radius":"10px"}}/>
      <UserCard name="Super Sayian GOD" desc= "desc3" image={goku3} style={{"border-radius":"10px"}}/>
    </div>
    
  )
}

export default App


import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
function App() {
 function handleclick(){
  alert('kamoka andu')
 }
// function handleclick3(){
//   alert('eivabe hobe na')
// }

const addToFive = (num)=>{
  alert(num+3);
}
  return (
    <>
    
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users>
      </Users>
      <Team>
      </Team>
      <Counter></Counter>
      {/* <button onClick={handleAdd}>Add</button> */}
      {/* javascript eita cilo */}
      {/* <button onclick="handleclick()">Click Me</button> */}
      {/* React e nicer ta follow kora hoy */}
      <button onClick={handleclick}>Click Me1</button>
      <button onClick={handleclick}>Click Me2</button>
      {/* <button onClick={handleclick3()}>Click wrong</button> */}
      <button onClick={()=>addToFive(5)}>Click Sum</button>

     
    </>
  )
}

export default App

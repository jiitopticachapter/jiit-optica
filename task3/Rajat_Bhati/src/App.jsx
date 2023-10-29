import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => {setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "blue"}}>Blue</button>
      </div>
    </div>
    </div>
  )
}


// function App() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });
  
//   const updateColor = () => {
//     // setCar(previousState => {
//     //   return { ...previousState, color: "blue" }
//     // });
//     // let aman = {...car, ...{color: "blue"}};
//     let aman2 = {color:"green"}
//     setCar(aman2)
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model || "tesla"} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }

export default App

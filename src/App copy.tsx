import React from "react";
import './App.css'

const worker = new Worker("worker.js");


worker.onmessage = message => {
  if(message.data.action === 'LOG') console.log('FROM WORKER' , message.data.value )
}

// worker.postMessage({action:'BUILD'})

const Text = () => 'ACTION'

const Button = () => <button onClick={process} > <Text/> </button>
// const Button = React.memo( ConcreteButton )

const process =  () => {
  const collection = new Array(100000).fill(5);
  const mapped = collection.map( i => i * Math.random())
  console.log(mapped)
}

class MyComponent extends React.Component{

  time = Date.now()

  constructor( props:any ){
    super( props )
    setInterval(this.tick, 1000)
  }

  tick = () => {
    this.time = Date.now()
    this.setState({})
    console.log(this.time)
  }

  render(){
    return (
      <div className="main">
        MyComponent -  {this.time}
      </div>
    )
  }

}

function App() {

  return (
    <>
      APP
      <MyComponent/>
      <Button/>
    </>
  )
}

export default App

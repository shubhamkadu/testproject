/*

function App(props) {
   
    return <p>{props.age}</p>
}

export default App

*/




//event handling


/*

import React from "react"
//import "./style.css";


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0,
            name:"guvi"
        }
        //this.decrement = this.decrement.bind(this)
    }

    increment=(num)=>{
        this.setState({counter:this.state.counter+num})
        console.log("increment")

    }

    decrement(){
        this.setState({counter:this.state.counter-1})
        console.log("decrement")

    }

    reset(){
        this.setState({counter:0})
        console.log("reset")
        
    }
    changeName= val =>{
        this.setState({name:val})

    }



 render() {
    return(
        <div>
            <input onChange={evt => this.changeName(evt.target.value)} value={this.state.name}/>
            <h1>hello{this.state.name}</h1>
            <p> counter - {this.state.counter}</p>
            <button onClick={this.increment}>increment</button>
            <button onClick={()=>this.decrement()}>decrement</button>
            <button onClick={this.reset}>reset</button>
        </div>
    )
}
}

export default App

*/



//lifecycle



import React from "react"
//import "./style.css";


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0,
            name:"guvi"
        }
        //this.decrement = this.decrement.bind(this)
    }

    increment=(num)=>{
        this.setState({counter:this.state.counter+num})
        console.log("increment")

    }

    decrement(){
        this.setState({counter:this.state.counter-1})
        console.log("decrement")

    }

    reset(){
        this.setState({counter:0})
        console.log("reset")
        
    }
    changeName= val =>{
        this.setState({name:val})

    }



 render() {
    return(
        <div>
            <input onChange={evt => this.changeName(evt.target.value)} value={this.state.name}/>
            <h1>hello{this.state.name}</h1>
            <p> counter - {this.state.counter}</p>
            <button onClick={this.increment}>increment</button>
            <button onClick={()=>this.decrement()}>decrement</button>
            <button onClick={this.reset}>reset</button>
        </div>
    )
}
}

export default App




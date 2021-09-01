import React from "react"

/*
//class Component

class AppClass extends React.Component{
    render(){
        return <p>{this.props.name}</p>
    }
}

export default AppClass

*/




//state    state only use in class component
// state is just js object 

class AppClass extends React.Component{
    constructor(props){ //constructor is use for initializing the state and consructor props is belong to component props
        super(props)    // super(props) is use to inherit the property from react component to AppClass component
        this.state = {  //we can change state using props but we cannot change props
            userName:"guvi",
            firstName:" test first",
            age:props.age,
            address:{
                street:"test",
            },
        }
    }
    render(){
        return <p>{this.state.userName}</p>
    }
}

export default AppClass




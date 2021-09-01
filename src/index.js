import React from "react"
import ReactDom from "react-dom"

/*
Reactdom.render(<p>hiiiiii</p>, document.getElementById("app"))
*/



/*
const user = {name:"shubham"}
const element = <p>helloo {user.name}</p>
ReactDom.render(element, document.getElementById("app"))
*/






/*


function displayName(user){
  return (
    <p>
      {user.firstName} {user.lastName}
    </p>
  )
  // return user.firstName + " " + user.lastName
}


const user = {firstName:"himanshu", lastName:"tusshar"}
const element = <p>helllo {displayName(user)}</p>
  
ReactDom.render(element, document.getElementById("app"))

*/





/*

function displayName(user){
   return user.firstName + " " + user.lastName
}


const user = [
  {firstName:"rugwed", lastName:"kadu"},
  {firstName:"himanshu", lastName:"kadu"},
  {firstName:"shubham", lastName:"kadu"},
]
const element = user.map((usr) => <p>helloo{displayName(usr)}</p>)
  
ReactDom.render(element, document.getElementById("app"))

*/






/*

//HTML
<input type="text" classname="test" onchange="changeinput()"/>

//JSX
<input type="text" className="test" onChange={"changeInput"}/>

*/




//components


import App from "./App"
import AppClass from "./AppClass"
ReactDom.render(
<div>
  <App name="Test" age="26" test="guvi"/>
  <AppClass name="Test" age="26" test="guvi"/>
</div>,
document.getElementById("app"))
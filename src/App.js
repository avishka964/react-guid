import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    person: [
      { name: "Brad", age: 30 },
      { name: "Max", age: 25 },
      { name: "Sam", age: 18 },
    ],
    otherState: "some other value",
  }

  switchNameHandler = () => {
    // console.log("Clicked")
    this.setState({
      person: [
        { name: "David", age: 28 },
        { name: "Justin", age: 21 },
        { name: "Sam", age: 12 },
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    )
  }
}

export default App

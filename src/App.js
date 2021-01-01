import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { id: "dfd1", name: "Brad", age: 30 },
      { id: "s5ds5", name: "Max", age: 25 },
      { id: "ada5f", name: "Sam", age: 18 },
    ],
    otherState: "some other value",
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personsIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })

    const person = { ...this.state.persons[personsIndex] }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personsIndex] = person

    this.setState({
      persons: persons,
    })
  }

  deletePersonsHandler = (personsIndex) => {
    // const Persons = this.state.Persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personsIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((persons, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={persons.name}
                age={persons.age}
                key={persons.id}
                change={(event) => this.nameChangeHandler(event, persons.id)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App

import React, { Component } from "react"
// import styled from "styled-components"
import classes from "./App.css"
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
    let persons = null
    let btnClass = ""

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
      btnClass = classes.Red
    }

    let assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red) //classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold) //classes = ["red", "bold"]
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          className={btnClass}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App

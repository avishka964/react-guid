import React, { Component } from "react"
import classes from "./App.css"
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"

class App extends Component {
  constructor(props) {
    super(props)
    console.log("App.js constructor")
  }

  state = {
    persons: [
      { id: "dfd1", name: "Brad", age: 30 },
      { id: "s5ds5", name: "Max", age: 25 },
      { id: "ada5f", name: "Sam", age: 18 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps", props)
    return state
  }

  componentDidMount() {
    console.log("App.js componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js shouldComponentUpdate")
    return true
  }

  componentDidUpdate() {
    console.log("App.js componentDidUpdate")
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
    console.log("App.js render...")
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangeHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false })
          }}>
          Remove Cockpit
        </button>

        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    )
  }
}

export default App
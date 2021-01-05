import React, { Component } from "react"
import Person from "./Person/Person"

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("Person.js getDerivedStateFromProps")
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons.js shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js getSnapshotBeforeUpdate")
    return { message: "Snapshot!" }
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("Persons.js componentDidUpdate")
    console.log(snapshot)
  }

  render() {
    console.log("Persons.js rendering...")
    return this.props.persons.map((persons, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={persons.name}
          age={persons.age}
          key={persons.id}
          change={(event) => this.props.changed(event, persons.id)}
        />
      )
    })
  }
}

export default Persons

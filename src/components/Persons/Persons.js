import React from "react"
import Person from "./Person/Person"

const Persons = (props) =>
  props.persons.map((persons, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={persons.name}
        age={persons.age}
        key={persons.id}
        change={(event) => props.changed(event, persons.id)}
      />
    )
  })

export default Persons

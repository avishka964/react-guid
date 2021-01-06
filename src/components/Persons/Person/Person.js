import React, { Component, Fragment } from "react"
import classes from "../Person/Person.css"
import withClass from "../../../hoc/withClass"
import Aux from "../../../hoc/Aux"
import PropTypes from "prop-types"

class Person extends Component {
  componentDidMount() {
    document.querySelector("input").focus()
  }

  render() {
    console.log("person.js rendering...")
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
}

export default withClass(Person, classes.Person)

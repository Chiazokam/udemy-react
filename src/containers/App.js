import React, { Component } from 'react';
import classes from './App.css';
import styles from '../components/Persons/Person/Person.css';
import { Persons, Cockpit, Button } from '../components';
import { Parentdiv } from '../hoc'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[App.js] Inside Component Will Mount')
  }

  componentDidMount() {
    console.log('[App.js] Inside Component Did Mount')
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('[Update App.js] Inside should component Update', nextProps, nextState);
    return true;
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate = () => {
    console.log('[Update App.js] Inside componentDidUpdate')
  }

  state = {
    persons: [
      { id:'hnz6', name: 'Chris', age: 23, hobby: 'Swimming'},
      { id:'hab1', name: 'Madea', age: 22, hobby: 'Sleeping'},
      { id:'nxb8', name: 'Lisa', age: 25, hobby: 'Skiing'}
    ]
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]   // Define the targeted object
    }   
    person.name = event.target.value;   // Assign the new name to the name property
    const persons = [...this.state.persons];  // Fetch the entire persons array
    persons[personIndex] = person;  // Person as defined above
    this.setState((prevState, props) => {  // prevState is used cos setState runs asynchronously
      return {
        persons: persons,
      } 
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      { showPersons: !doesShow,
      })
  }

  deletePersonHandler = () => {
    const persons = [...this.state.persons];
    persons.splice(0, 1);
    this.setState({
      persons: persons,
    })
  }

  render() {
    console.log('[App.js] Inside Render')
    let persons = null;
    if (this.state.showPersons) {
        persons = (
            <Persons
              persons={this.state.persons}
              change={this.nameChangeHandler}/>
        )
    }

    return (
        <Parentdiv classes={classes.App}>
          <Cockpit title={this.props.title}/>

          <Button
            className={styles.Toggle}
            click={this.togglePersonsHandler}>
            Toggle Persons
          </Button>

          <Button
            className={styles.Delete}
            click={this.deletePersonHandler}>
            <span>Delete Person</span>
          </Button>

          {/* Display Persons */}
          { persons }  
        </Parentdiv>
    );
  }
}

export default App;

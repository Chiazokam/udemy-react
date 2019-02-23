import React, { Component } from 'react';
import './App.css';
import { Person, Button } from './Person';

class App extends Component {
  state = {
    persons: [
      { id:'hnz6', name: 'Chris', age: 23, hobby: 'Swimming'},
      { id:'hab1', name: 'Madea', age: 22, hobby: 'Sleeping'},
      { id:'nxb8', name: 'Lisa', age: 25, hobby: 'Skiing'}
    ]
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 23, hobby: 'Swimming'},
  //       { name: 'Madea', age: 22, hobby: 'Sleeping'},
  //       { name: 'Lisa', age: 21, hobby: 'Skiing'}
  //     ],
  //     showPersons: false,
  //   })
  // }

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
    this.setState({
      persons: persons,
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
    const style = {
      backgroundColor: 'blue',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginRight: '10px',
      outline: 'none',
    };

    let persons = null;
    if (this.state.showPersons) {
        persons = (
          <div>
            { this.state.persons.map (person => {
              return <Person 
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        change={(event) => this.nameChangeHandler(event, person.id)}/>
            })}
        </div>
        )
        style.backgroundColor = 'green';
        style.border = '1px solid green';
    }

    return (
        <div className="App">
        <h1>Hi! I'm a react App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        <Button
          className='Delete'
          click={this.deletePersonHandler}>
          <span>Delete Person</span>
        </Button>
        {/* Display Persons */}
        { persons }  


        {/* {
          this.state.showPersons ?  // Check if showPersons === true, else run 'null'
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}> 
                <Hobbies hobby='Swimming' /> 
              </Person>

              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                // Alternative to passing an arg to method calls
                click={this.switchNameHandler.bind(this, 'Zokky')}
                change={this.nameChangeHandler}>
                <Hobbies hobby="Sleeping" /> 
              </Person>

              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}> 
                <Hobbies hobby="Skiing" /> 
              </Person>
          </div> : null
        } */}
        </div>
    );
  }
}

export default App;

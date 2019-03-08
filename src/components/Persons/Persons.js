import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props)
        console.log('[Persons.js] Inside Constructor', props)
      }
    
      componentWillMount() {
        console.log('[Persons.js] Inside Component Will Mount')
      }
    
      componentDidMount() {
        console.log('[Persons.js] Inside Component Did Mount')
      }

      componentWillReceiveProps = nextProps => {
        console.log('[ Update Persons.js] Inside Component Will Receive Props', nextProps)
      }

      shouldComponentUpdate = (nextProps, nextState) => {
        console.log('[Update Persons.js] Inside should component Update', nextProps, nextState);
        return true;
      }

      componentWillUpdate = (nextProps, nextState) => {
        console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState)
      }

      componentDidUpdate = () => {
        console.log('[Update Persons.js] Inside componentDidUpdate')
      }

    render () {
        console.log('[Persons.js] Inside Render')
        return (
            this.props.persons.map ((person, index) => {
                return <Person 
                          name={person.name} 
                          age={person.age}
                          key={person.id}
                          position={index}
                          change={(event) => this.props.change(event, person.id)}/>
              })
        )
    }
}

export default Persons; 
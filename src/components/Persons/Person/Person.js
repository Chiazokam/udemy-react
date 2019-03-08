import React, { Component } from 'react';
import styles from './Person.css';
import { Parentdiv } from '../../../hoc';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props)
        console.log('[Person.js] Inside Constructor', props)
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside Component Will Mount')
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside Component Did Mount');
        if (this.props.position === 0){
            this.inputElement.focus();
        }
      }
      
    render() {
        console.log('[Person.js] Inside Render')
        return (
            <Parentdiv classes={styles.Person}>
                <p>I am a person. My name is {this.props.name} and I just turned {this.props.age}</p>
                <input type="text"
                    ref={(input) => { this.inputElement = input }}  // create the inputElement attribute that will be passed down
                    onChange={this.props.change} 
                    value={this.props.name}/>
                <p>{this.props.children}</p>
            </Parentdiv>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func,
}

export default Person;

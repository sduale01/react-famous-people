import React, {Component} from 'react';
import {connect} from 'react-redux'

class FamousForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            famousPerson : {
                name: '',
                role: ''
            }
        }
    }

    addFamousPerson = (event) => {
        event.preventDefault();
        // console.log(`${this.state.famousPerson} is famous for ${this.state.role}`);


        const action = {
            type: 'ADD_FAMOUS_PERSON',
            payload: this.state.famousPerson
        }
        this.props.dispatch(action)
    }


    handlePersonChange = (event) => {
        this.setState({
            famousPerson: {
                ...this.state.famousPerson,
                name: event.target.value
            }
        })
    }

    handleRoleChange = (event) => {
        this.setState({
            famousPerson: {
                ...this.state.famousPerson,
                role: event.target.value
            }
        })
    }
        
    
    render() {
        return (
            <form onSubmit={this.addFamousPerson}>
                <input onChange={this.handlePersonChange} type="text" placeholder="Famous Person" />
                <input onChange={this.handleRoleChange} type="text" placeholder="Role" />
                <button>Submit</button>
            </form>
        )
    }
}

export default connect()(FamousForm);
import React, {Component} from 'react';

class FamousForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            famousPerson: '',
            role: ''
        }
    }

    addFamousPerson = (event) => {
        event.preventDefault();
        console.log(`${this.state.famousPerson} is famous for ${this.state.role}`);

        const famousPerson = {
            famousPerson: this.state.famousPerson,
            role: this.state.role,
        }

        this.props.addFamousPersonToList(famousPerson);
    }


    handlePersonChange = (event) => {
        this.setState({
            famousPerson: event.target.value,
        })
    }

    handleRoleChange = (event) => {
        this.setState({
            role: event.target.value,
        })
    }
        
    
    render() {
        return (
            <form onSubmit={this.addFamousPerson}>
                <input onChange={this.handlePersonChange} type="text" placeholder="Famous Person" />
                <input onChange={this.handleRoleChange} type="text" placeholder="Role" />
                <button>Submit</button>
                {/* <p>{this.state.famousPerson} Day is famous for {this.state.role}</p> */}
            </form>
        )
    }
}

export default FamousForm;
import React, {Component} from 'react';
// import FamousItem from './FamousItem.js'
import {connect} from 'react-redux';

class FamousList extends Component {

    // populateList() {
    //     let famousArr = [];
    //     for (const person of this.props.addToList) {
    //         const personToAdd = (<FamousItem person={person} />)
    //         famousArr.push(personToAdd)  
    //     }
    //     return famousArr;
        
    // }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>NAME</td>
                        <td>ROLE</td>
                    </tr>
                </thead>
                <tbody>
                        {/* {JSON.stringify(this.props.reduxStore.personReducer)} */}
                        {this.props.reduxStore.personReducer.map(person =>
                            <tr><td>{person.name}</td><td>{person.role}</td></tr>)}
                    
                </tbody>
            </table>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => {
    return {
        reduxStore: reduxStore
    };
}

export default connect(mapReduxStoreToProps)(FamousList);
import React, {Component} from 'react';
import FamousItem from './FamousItem.js'

class FamousList extends Component {

    populateList() {
        let famousArr = [];
        for (const person of this.props.addToList) {
            const personToAdd = (<FamousItem person={person} />)
            famousArr.push(personToAdd)  
        }
        return famousArr;
        
    }

    render() {
        return (
            <table>
                <tbody>
                    {JSON.stringify(this.props.addToList)}
                    {this.populateList()}
                </tbody>
            </table>
        )
    }
}

export default FamousList;
import React, {Component} from 'react';

class FamousItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.person.famousPerson}</td>
                <td>{this.props.person.role}</td>
          </tr>
        )
    }
}

export default FamousItem;
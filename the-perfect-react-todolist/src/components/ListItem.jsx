import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
  render() {
    return (
      <li className="list-item">
          <input type="checkbox" id="isChecked" checked={this.props.isChecked} onChange={() => this.props.handleCheck(this.props.id) } ></input>
          <label htmlFor="isChecked">  {this.props.label} </label>
      </li>
   )
  }
}

export default ListItem;
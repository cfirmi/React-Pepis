import React, { Component } from 'react'

export default class DropDownCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Select A Category.'};
        this.handleChange = this.handleChange.bind(this);
      };
      handleChange(event) {
        this.setState({value: event.target.value});
      }
  render() {
    return (
      <div>
        <select name="categoryDropDown" id="categoryDropDown" placeholder='Select a category' value={this.state.value} onChange={this.handleChange}>
        <option value=''> -- Select A Category -- </option>
            <option>Option1</option>
        </select>
      </div>
    )
  }
}

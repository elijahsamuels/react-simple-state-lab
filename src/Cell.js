import React, { Component } from 'react';

export default class Cell extends Component {

	constructor(props) {
		super()
		this.state = {
			color: props.value
		}
	}

	handleClick = () => {
		this.setState({
			color: '#333'
		})

	}
	render() {
		return (
		  <div className="cell"
		  style={{backgroundColor: this.state.color}}
		  onClick={this.handleClick}
		  >
		  
		  </div>
		)
	}
	
	
	
}

//   onClick={console.log("hello from the onClick")}
// 1) has an event listener for clicks on the <div> (don't forget: 'onClick' in React!)

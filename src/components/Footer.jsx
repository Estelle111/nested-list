import React, { Component } from "react";

class Footer extends Component {
	constructor() {
		super()
		this.handleMouse = this.handleMouse.bind(this);
		this.state = {
			isHovered: false,
		}
	}
	handleMouse(){
		this.setState({
			isHovered: !this.state.isHovered
		});
		console.log(this.state.isHovered)
		/* let className = 'footer-title';
		if (this.props.isActive) {
			className += ' checked';
		} */
	}

	render() {
		return (
			<div>
				<button 
					className="footer-title checked"
					onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse}
				>
					add companion</button>
				<button className="footer-title">edit weight</button>
			</div>
		)
	}
}


export default Footer
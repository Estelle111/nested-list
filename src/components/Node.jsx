import React, { Component } from "react";

class Node extends Component {
	constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            childnodes: null,
        } 
    }
	handleClick(e) {
			/* console.log(e.target) */
			e.preventDefault();
			if(this.props.children) {
				this.setState.childnodes = this.props.children.map(function(childnode) {
					return (
						<Node node={childnode} children={childnode.banners} />
					)
				})
			}
			console.log(this.setState.childnodes)
		}
	render() {
		
		

		return (
			<div>
				<li onClick={this.handleClick} key={this.props.node.id}>
					<div className="list-parent-layout">
						<img src={this.props.node.img} alt="dunkin donuts"/>
						<span>{this.props.node.title}</span>
						<span>{this.props.node.link}</span>
						<span>{this.props.node.size}</span>
					</div>
				</li>
				
					<ul class="list-children-layout">{this.setState.childnodes}</ul>
						
			</div>
		)
	}
}

export default Node
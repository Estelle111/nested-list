import React, { Component } from "react";
import Switch from "./Switch";
import { list } from "../data/data"

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpened: null,
			list
		}
	}

	handleChange(checked) {
		let banners = this.state.list
		banners.forEach(item => {
			item.opened = checked
		});
		this.setState({
			banners: this.state.list
		})
  }

	toggleList(id) {
		let name = id 
		let banners = this.state.list
		for(let i=0; i<banners.length; i++){
			let item = banners[i]
			if(name === item.id){
				item.opened = !item.opened
				break
			}
		}
		this.setState({
			banners: this.state.list
		})
	}

	toggleMenu(id) {
		this.setState({
			menuOpened: id
		})
	}

	closeMenu(){
		this.setState({
			menuOpened: null
		})
	}

	deleteItem(id){
		let table = this.state.list
		let index = table.findIndex((el) => el.id === id);
		table.splice(index,1)
		this.setState({
			table
		})
	}

	deleteSubItem(itemId, subItemId){
		let table = this.state.list
		let index = table.findIndex((el) => el.id === itemId);
		let item = table[index]
		let subIndex = item.list.findIndex((el) => el.id === subItemId);
		item.list.splice(subIndex,1) 
		this.setState({
			table
		})
	}

	checkAllOpen(){
		let allOpened = true;
		const { list } = this.state;
		list.forEach(item => {
			if(!item.opened){
				allOpened = false
			}
		});
		return allOpened
	}

	render() {
		const { menuOpened, list } = this.state
		return (
			<div>
				<header>
					<p className="header-title">companion</p>
					<Switch checked={this.checkAllOpen()} handleChange={this.handleChange.bind(this)}/>
				</header>
				<div className="list-block-layout">
					{list.map((item, index) => (
							<div key={`item/${index}`}>
								<div className="list-block-parent-layout">
									<div className="list-parent-layout" >
										{item.opened === true ?
											<i className="list-item fas fa-angle-up" onClick={() => this.toggleList(item.id)}></i>
										: <i className="list-item fas fa-angle-down" onClick={() => this.toggleList(item.id)}></i>}
										<img className="list-item" src={item.img} alt="dunkin donuts"/>
										<h3 className="list-item">{item.title}</h3>
										<span className="list-item">{item.link}</span>
										<span className="list-item">{item.size}</span>
									</div>
									<div>
										{item.id === menuOpened ? (
											<div className="menu-layout">
												<i onClick={() => this.closeMenu()} className="cross fas fa-times"></i>
												<button onClick={() => this.deleteItem(item.id)} className="menu-items">delete</button>
												<button className="menu-items">edit</button>
											</div>
										) : (
											<button onClick={() => this.toggleMenu(item.id)}>...</button>
										)}
									</div>
								</div>
								{item.list.map((subitem, index) => (
									<div key={`subitem/${index}`}>
										{item.opened === true && (
											<ul className="list-layout list-children-layout">
												<img src={subitem.img} alt="dunkin donuts"/>
												<h3>{subitem.title}</h3>
												<span>{subitem.link}</span>
												<span>{subitem.size}</span>
												<div>
													{subitem.id === menuOpened ? (
														<div className="menu-layout">
															<i onClick={() => this.closeMenu()} className="cross fas fa-times"></i>
															<button onClick={() => this.deleteSubItem(item.id, subitem.id)} className="menu-items">delete</button>
															<button className="menu-items">edit</button>
														</div>
													) : (
														<button className="dotsButton" onClick={() => this.toggleMenu(subitem.id)}>...</button>
													)}
												</div>
											</ul>
										)}
									</div>
								))}
							</div> 
						)
					)}
				</div>
			</div>
		)
	}
}


export default List;
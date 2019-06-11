import React from "react";
import Switch from "./Switch.jsx";

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpened: null,
			checked: true,
			list: [
				{
					id			: 3,
					img			: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
					title		: 'Dunkin Donuts - FR 1',
					link		: 'dunkindonuts.com/summer2017%camera',
					size		: 'Percentage: 10%',
					opened  	: false,
					list		: [
						{
							id		: 1,
							img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
							title	: 'FR - IMU Dunkin Donuts',
							link	: 'dunkindonuts.com/summer2017%camera',
							size	: '300 x 250',
						}, {
							id		: 2,
							img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
							title	: 'FR - Boutton Dunkin Donuts',
							link	: 'dunkindonuts.com/summer2017%camera',
							size	: '120 x 90',
						}
					]
				},
				{
					id			: 4,
					img			: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
					title		: 'Dunkin Donuts - FR 2',
					link		: 'dunkindonuts.com/summer2017%camera',
					size		: 'Percentage: 10%',
					opened  	: false,
					list		: [
						{
							id		: 4,
							img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
							title	: 'FR - IMU Dunkin Donuts',
							link	: 'dunkindonuts.com/summer2017%camera',
							size	: '300 x 250',
						}, {
							id		: 5,
							img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
							title	: 'FR - Boutton Dunkin Donuts',
							link	: 'dunkindonuts.com/summer2017%camera',
							size	: '120 x 90',
						}
					]
				}
			]
		}
	}

	handleChange(checked) {
    this.setState({ checked });
  }

	toggleList(id) {
		/* console.log(id) */
		let name = id 
		let banners = this.state.list
		for(let i=0; i<banners.length; i++){
			let item = banners[i]
			if(name === item.id){
				item.opened = !item.opened
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
			table: this.state.list
		})
	}

	deleteSubItem(itemId, subItemId){
		let table = this.state.list
		let index = table.findIndex((el) => el.id === itemId);
		let item = table[index]
		let subIndex = item.list.findIndex((el) => el.id === subItemId);
		item.list.splice(subIndex,1) 

		this.setState({
			table: this.state.list
		})
	}

	render() {
		return (
			<div>
				<header>
					<p className="header-title">companion</p>
					<Switch checked={this.state.checked} handleChange={this.handleChange.bind(this)}/>
				</header>
				<div className="list-block-layout">
					{this.state.list.map((item, index) => {
						return ( 
							<div key={index}>
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
										{item.id === this.state.menuOpened ?
											<div className="menu-layout">
												<i onClick={() => this.closeMenu()} className="cross fas fa-times"></i>
												<button onClick={() => this.deleteItem(item.id)} className="menu-items">delete</button>
												<button className="menu-items">edit</button>
											</div>
										: <button onClick={() => this.toggleMenu(item.id)}>...</button>}
									</div>
								</div>
								{item.list.map((subitem) => {
									return (
										<div>
											{item.opened === true || this.state.checked === true ? 
												<ul className="list-layout list-children-layout">
													<img src={subitem.img} alt="dunkin donuts"/>
													<h3>{subitem.title}</h3>
													<span>{subitem.link}</span>
													<span>{subitem.size}</span>
													<div>
														{subitem.id === this.state.menuOpened ?
															<div className="menu-layout">
																<i onClick={() => this.closeMenu()} className="cross fas fa-times"></i>
																<button onClick={() => this.deleteSubItem(item.id, subitem.id)} className="menu-items">delete</button>
																<button className="menu-items">edit</button>
															</div>
														: <button className="dotsButton" onClick={() => this.toggleMenu(subitem.id)}>...</button>}
													</div>
												</ul>
											: " "}
										</div>
									)
								})}
							</div> 
						)
					})}
				</div>
			</div>
		)
	}
}


export default List;
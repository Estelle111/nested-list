import React from "react";

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpened: 3,
			list: [
				{
					id			: 0,
					img			: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
					title		: 'Dunkin Donuts - FR',
					link		: 'dunkindonuts.com/summer2017%camera',
					size		: 'Percentage: 10%',
					button		: '...',
					opened  	: false,
					list		: [
						{
							id		: 1,
							img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
							title	: 'FR - IMU Dunkin Donuts',
							link	: 'dunkindonuts.com/summer2017%camera',
							size	: '300 x 250',
							button	: '...',
							opened  : false,
						}, {
							id		: 2,
							img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
							title	: 'FR - Boutton Dunkin Donuts',
							link	: 'dunkindonuts.com/summer2017%camera',
							size	: '120 x 90',
							button	: '...',
							opened  	: false,
						}
					]
				},
				{
					id			: 1,
					img			: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
					title		: 'Dunkin Donuts - FR',
					link		: 'dunkindonuts.com/summer2017%camera',
					size		: 'Percentage: 10%',
					button		: '...',
					opened  	: false,
					list		: [
						{
							id		: 3,
							img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
							title	: 'FR - IMU Dunkin Donuts',
							link	: 'dunkindonuts.com/summer2017%camera',
							size	: '300 x 250',
							button	: '...',
							opened  	: false,
						}, {
							id		: 4,
							img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
							title	: 'FR - Boutton Dunkin Donuts',
							link	: 'dunkindonuts.com/summer2017%camera',
							size	: '120 x 90',
							button	: '...',
							opened  : false,
						}
					]
				}
			]
		}
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

		/* let name = id
		let banners = this.state.list
		for(let i=0; i<banners.length; i++){
			let item = banners[i]
			for(let j=0; j<item; j++){
				let subitem = item[j]
				console.log(id)
			}
			
		} */
		
		
	}

	render() {

	 /* const {showList, showButtons} = this.state */
	/* 	const style = this.state.hideButton ? {display: 'none'} : {}; */

		return (
			<div>
				{this.state.list.map((item, index) => {
					return (
						<div className="list-block-layout" key={index}>
							<div className="list-layout" onClick={() => this.toggleList(item.id)}>
								<img src={item.img} alt="dunkin donuts"/>
								<h3>{item.title}</h3>
								<span>{item.link}</span>
								<span>{item.size}</span>
								<button>{item.button}</button>
							</div>
							{item.list.map((subitem) => {
								return (
									<div>
										{item.opened === true ?
											<ul class="list-layout list-children-layout">
												<img src={subitem.img} alt="dunkin donuts"/>
												<h3>{subitem.title}</h3>
												<span>{subitem.link}</span>
												<span>{subitem.size}</span>
												<button onClick={() => this.toggleMenu(subitem.id)}>
													{subitem.id === this.state.menuOpened ? 
														<div className="buttons-layout">
															<button className="buttons">delete</button>
															<button className="buttons">edit</button>
														</div>
													: <button>...</button> }
												</button>
											</ul>
										: " "}
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
		)
	}
}


export default List;
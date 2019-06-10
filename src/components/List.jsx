import React from "react";

class List extends React.Component {
	constructor(props) {
		super(props);
		this.toggleList = this.toggleList.bind(this)
		this.toggleButtons = this.toggleButtons.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
				showList: false,
				showButtons: false,
				hideButton: false,
		}
		this.buttonInstance = (
			<button onClick={this.toggleButtons}>
				...
				{this.state.showButtons === true ? 
					<div className="buttons-layout">
						<button className="buttons">delete</button>
						<button className="buttons">edit</button>
					</div>
				: " "}
			</button>
		)
	}

	toggleList(e) {
		e.preventDefault()
		this.setState({
			showList: !this.state.showList
		})
	}

	toggleButtons(e) {
		e.preventDefault()
		this.setState({
			showButtons: !this.state.showButtons
		})
		console.log(e.target)
	}

	handleChange(e) {
		this.setState({
			hideButton: true,
		})
	}

	render() {
		const list = [
			{
				id			: 0,
				img			: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
				title		: 'Dunkin Donuts - FR',
				link		: 'dunkindonuts.com/summer2017%camera',
				size		: 'Percentage: 10%',
				button	: '...',
				list		: [
					{
						id		: 1,
						img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
						title	: 'FR - IMU Dunkin Donuts',
						link	: 'dunkindonuts.com/summer2017%camera',
						size	: '300 x 250',
						button	: '...'
					}, {
						id		: 2,
						img		: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
						title	: 'FR - Boutton Dunkin Donuts',
						link	: 'dunkindonuts.com/summer2017%camera',
						size	: '120 x 90',
						button	: '...'
					}
				]
			}
		];

		const {showList} = this.state
		const {showButtons} = this.state
		const style = this.state.hideButton ? {display: 'none'} : {};

		return (
			<div>
				{list.map((item, index) => {
					return (
						<div className="list-block-layout" key={index}>
							<div className="list-layout" onClick={this.toggleList}>
								<img src={item.img} alt="dunkin donuts"/>
								<h3>{item.title}</h3>
								<span>{item.link}</span>
								<span>{item.size}</span>
								<button>...</button>
							</div>
							{item.list.map((subitem) => {
								return (
									<div>
										{showList === true ?
											<ul class="list-layout list-children-layout">
												<img src={subitem.img} alt="dunkin donuts"/>
												<h3>{subitem.title}</h3>
												<span>{subitem.link}</span>
												<span>{subitem.size}</span>
												<div style={style}>
													{this.buttonInstance}
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
		)
	}
}


export default List;
import React from "react";

class NestedList extends React.Component {
	constructor(props) {
		super(props);
		this.toogleContent = this.toogleContent.bind(this)
		this.state = {
		showContent: true,
		};
	}
	  
	toogleContent(e) {
		e.preventDefault()
		this.setState({
			showContent: !this.state.showContent
	  	})
  	}

	render() {
	
		const list = [
			{
				id: 1,
				title:"test",
				list: [
					{
						firstname: "elisa",
						lastname: "renda"
					},
					{
						firstname: "estelle",
						lastname: "mol"
					},
					{
						firstname: "emilie",
						lastname: "bialais"
					}
				]
			},
		];
		
		const {showContent} = this.state;

		return (
			<div className="widget">
				{list.map((item, index) => {
					return (
						<div key={index}>
							<button onClick={this.toogleContent}>
									<h3 className="panel">List {item.title}</h3>
							</button>
							{item.list.map((subitem) => {
								return (
									<div>
										{showContent === true ? 
											<ul>
												<li>{subitem.firstname}</li>
												<li>{subitem.lastname}</li>
											</ul>
										: " " }
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		);
  	}
}
export default NestedList;

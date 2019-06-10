import React, { Component } from "react";
import Node from "./Node.jsx";
import { banners } from './Banners'

class Organisation extends Component {  
  render() {
		let nodes = banners.map(function(banner) {
			return(
				<Node node={banner} children={banner.banners} />
			)
		});
		return(
			<div className="list-layout">
				<ul>
				  {nodes}
				</ul>
			</div>
		)
  }
}

export default Organisation
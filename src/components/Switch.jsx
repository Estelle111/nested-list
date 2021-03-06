import React, { Component } from "react";
import Switch from "react-switch";
 
export default class BasicExample extends Component {
  render() {
		const { checked, handleChange } = this.props
    return (
      <div className="example">
        	<label htmlFor="icon-switch">
						<Switch
							checked={checked}
							onChange={handleChange}
							checkedIcon={
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: "100%",
										fontSize: 12,
										color: "white",
										paddingLeft: 2,
									}}
								>
									ON
								</div>
							}
							uncheckedIcon={
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: "100%",
										fontSize: 12,
										color: "white",
										paddingRight: 2,
									}}
								>
									OFF
								</div>
							}
							className="react-switch"
							id="icon-switch"
						/>
					</label>
      </div>
    );
  }
}


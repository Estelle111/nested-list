(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(8),l=n.n(i),o=(n(16),n(1)),c=n(2),r=n(5),u=n(3),m=n(6),d=n(4),h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).handleMouse=e.handleMouse.bind(Object(m.a)(e)),e.state={isHovered:!1},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleMouse",value:function(){this.setState({isHovered:!this.state.isHovered}),console.log(this.state.isHovered)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",{className:"footer-title checked",onMouseEnter:this.handleMouse,onMouseLeave:this.handleMouse},"add companion"),s.a.createElement("button",{className:"footer-title"},"edit weight"))}}]),t}(a.Component),p=n(9),f=n.n(p),g=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.checked,n=e.handleChange;return s.a.createElement("div",{className:"example"},s.a.createElement("label",{htmlFor:"icon-switch"},s.a.createElement(f.a,{checked:t,onChange:n,checkedIcon:s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:12,color:"white",paddingLeft:2}},"ON"),uncheckedIcon:s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:12,color:"white",paddingRight:2}},"OFF"),className:"react-switch",id:"icon-switch"})))}}]),t}(a.Component),k=[{id:1,img:"https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"Dunkin Donuts - FR 1",link:"dunkindonuts.com/summer2017%camera",size:"Percentage: 10%",opened:!1,list:[{id:"a",img:"https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"FR - IMU Dunkin Donuts",link:"dunkindonuts.com/summer2017%camera",size:"300 x 250"},{id:"b",img:"https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"FR - Boutton Dunkin Donuts",link:"dunkindonuts.com/summer2017%camera",size:"120 x 90"}]},{id:2,img:"https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"Dunkin Donuts - FR 2",link:"dunkindonuts.com/summer2017%camera",size:"Percentage: 10%",opened:!1,list:[{id:"c",img:"https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"FR - IMU Dunkin Donuts",link:"dunkindonuts.com/summer2017%camera",size:"300 x 250"},{id:"d",img:"https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",title:"FR - Boutton Dunkin Donuts",link:"dunkindonuts.com/summer2017%camera",size:"120 x 90"}]}],E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={menuOpened:null,list:k},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.state.list.forEach(function(t){t.opened=e}),this.setState({banners:this.state.list})}},{key:"toggleList",value:function(e){for(var t=e,n=this.state.list,a=0;a<n.length;a++){var s=n[a];if(t===s.id){s.opened=!s.opened;break}}this.setState({banners:this.state.list})}},{key:"toggleMenu",value:function(e){this.setState({menuOpened:e})}},{key:"closeMenu",value:function(){this.setState({menuOpened:null})}},{key:"deleteItem",value:function(e){var t=this.state.list,n=t.findIndex(function(t){return t.id===e});t.splice(n,1),this.setState({table:t})}},{key:"deleteSubItem",value:function(e,t){var n=this.state.list,a=n.findIndex(function(t){return t.id===e}),s=n[a],i=s.list.findIndex(function(e){return e.id===t});s.list.splice(i,1),this.setState({table:n})}},{key:"checkAllOpen",value:function(){var e=!0;return this.state.list.forEach(function(t){t.opened||(e=!1)}),e}},{key:"render",value:function(){var e=this,t=this.state,n=t.menuOpened,a=t.list;return s.a.createElement("div",null,s.a.createElement("header",null,s.a.createElement("p",{className:"header-title"},"companion"),s.a.createElement(g,{checked:this.checkAllOpen(),handleChange:this.handleChange.bind(this)})),s.a.createElement("div",{className:"list-block-layout"},a.map(function(t,a){return s.a.createElement("div",{key:"item/".concat(a)},s.a.createElement("div",{className:"list-block-parent-layout"},s.a.createElement("div",{className:"list-parent-layout"},!0===t.opened?s.a.createElement("i",{className:"list-item fas fa-angle-up",onClick:function(){return e.toggleList(t.id)}}):s.a.createElement("i",{className:"list-item fas fa-angle-down",onClick:function(){return e.toggleList(t.id)}}),s.a.createElement("img",{className:"list-item",src:t.img,alt:"dunkin donuts"}),s.a.createElement("h3",{className:"list-item"},t.title),s.a.createElement("span",{className:"list-item"},t.link),s.a.createElement("span",{className:"list-item"},t.size)),s.a.createElement("div",null,t.id===n?s.a.createElement("div",{className:"menu-layout"},s.a.createElement("i",{onClick:function(){return e.closeMenu()},className:"cross fas fa-times"}),s.a.createElement("button",{onClick:function(){return e.deleteItem(t.id)},className:"menu-items"},"delete"),s.a.createElement("button",{className:"menu-items"},"edit")):s.a.createElement("button",{onClick:function(){return e.toggleMenu(t.id)}},"..."))),t.list.map(function(a,i){return s.a.createElement("div",{key:"subitem/".concat(i)},!0===t.opened&&s.a.createElement("ul",{className:"list-layout list-children-layout"},s.a.createElement("img",{src:a.img,alt:"dunkin donuts"}),s.a.createElement("h3",null,a.title),s.a.createElement("span",null,a.link),s.a.createElement("span",null,a.size),s.a.createElement("div",null,a.id===n?s.a.createElement("div",{className:"menu-layout"},s.a.createElement("i",{onClick:function(){return e.closeMenu()},className:"cross fas fa-times"}),s.a.createElement("button",{onClick:function(){return e.deleteSubItem(t.id,a.id)},className:"menu-items"},"delete"),s.a.createElement("button",{className:"menu-items"},"edit")):s.a.createElement("button",{className:"dotsButton",onClick:function(){return e.toggleMenu(a.id)}},"..."))))}))})))}}]),t}(a.Component);n(18);var v=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement(E,null),s.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.426261f3.chunk.js.map
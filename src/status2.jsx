var React = require("react");
var Reflux = require("reflux");
var Store = require("./store");

var Status2 = React.createClass({
	mixins:[Reflux.listenTo(Store,"onStore")]
	,getInitialState:function(){
		return {remaining:0};
	}
	,onStore:function(data){
		var remaining = data.filter(function(d){return !d.done;}).length;
		this.setState({remaining:remaining});
	}
	,render:function(){
		return <div>status2:{this.state.remaining}</div>;
	}
})
module.exports = Status2
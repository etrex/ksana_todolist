var React=require("react");
var Reflux=require("reflux");
var Store=require("./store");
var Status = React.createClass({
	mixins:[Reflux.listenTo(Store,"onStore")]
	,getInitialState:function(){
		return {remaining:0};
	}
	,onStore:function(data){
		console.log("onStore");
		var remaining = data.filter(function(d){return !d.done;}).length;
		this.setState({remaining:remaining});
	}
	,render:function(){
		return <div>remaining:{this.state.remaining}</div>
	}
});
module.exports = Status;
/*
var React=require("react");
var Status = React.createClass({
  render: function() {
	return <div>aaaa</div>;
  }
});
module.exports = Status;
*/
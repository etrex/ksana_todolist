var React=require("react");
var Reflux=require("reflux");
var store=require("./store");
var actions=require("./actions");

var Listview = React.createClass({
	mixins:[Reflux.listenTo(store,"onStore")]
	,getInitialState:function(){
		return {data:[]};
	}
	,onStore:function(data) {
		this.setState({data:data});
	}
	,onCheck:function(e){
		actions.check(e.target.dataset.idx, e.target.checked);
	}
	,renderItem:function(item,idx) {
		return <div>
		 	<input type="checkbox" onClick={this.onCheck} data-idx={idx} checked={item.done}/>
		 	{item.value}
		 </div>
	}
	,render: function() {
		return <div>
			{this.state.data.map(this.renderItem)}
		</div>;
	}
});
module.exports=Listview
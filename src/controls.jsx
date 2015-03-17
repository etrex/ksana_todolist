var React=require("react");
var actions=require("./actions");
var Controls=React.createClass({
  	add:function() {
  		var todo = this.refs.text.getDOMNode().value;
  		this.refs.text.getDOMNode().value = "";
		todo && actions.add(todo);

	}
	,clear:function() {
		actions.clear();
	}
	,keypress:function(e){
		if(e.key=="Enter")
			this.add();
	}

	,render:function() {
		return <div>
			<input type="text" ref="text" onKeyPress={this.keypress}/>
      		<button onClick={this.add}>Add</button>
      		<button onClick={this.clear}>Clear</button>
      	</div>
	}
});

module.exports=Controls;
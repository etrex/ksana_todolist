var Reflux=require("reflux");
var actions=require("./actions");
var store=Reflux.createStore({
	listenables:actions
	,data:[]
	,onAdd:function(item) {
		this.data.push({value:item,done:false});
		this.trigger(this.data);
	}
	,onClear:function() {
		/*
		var newData = [];
		for(var i = 0 ; i < this.data.length ; i++){
			var d = this.data[i];
			console.log(d);
			if(d.done == false){
				newData.push(d);
			}
		}
		this.data=newData;
		*/
		this.data= this.data.filter(function(d){return !d.done;});
		this.trigger(this.data);
	}
	,onCheck:function(id, check) {
		console.log(id+":"+check);
		this.data[id].done = check;
		this.trigger(this.data);
	}
});

module.exports=store;
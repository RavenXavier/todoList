Template.taskList.helpers({
	allTask(){
		return myTasksdb.find();
	},
	usersChoice(){
		if (this.status == "newPri"){
			return true;
		} else {
			return false;
		}
	},
	checked: function(){
		var myCompleted = this.completed;
		if(myCompleted){
			return "checked";
		} else {
			return "";
		}
	}
});

Template.taskList.events({
	'click .js-delete'(event, instance){
		console.log("Deleteing...");
		var myId = this._id;
		myTasksdb.remove({_id:myId});
	},

	'change [type=checkbox]': function(){
		var myId = this._id;
		var myCompleted = this.completed;
		if(myCompleted){
			myTasksdb.update({_id:myId}, 
			{$set:{
				"completed": false
				// "completed": completed
			}});
			console.log("Task marked as incomplete: "+ myId);
		} else{
			myTasksdb.update({_id:myId}, 
			{$set:{
				"completed": true
				// "completed": myCompleted
			}});
			console.log("Task marked as complete: "+ myId);
		}
	}

});
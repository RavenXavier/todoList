Template.taskList.helpers({
	allTask(){
		return myTasksdb.find();
	},
	usersChoice(){
		if (this.status == 1){
			return true;
		} else {
			return false;
		}
	},
	userShow(){
		if (this.status == 0){
			return true;
		} 

		if (this.createdById == Meteor.userId()){
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
		var myId = this._id;
if ((this.createdById == undefined) || (this.createdById == Meteor.userId())){
      $("#deleteId").val(myId);
      $("#confirmModal").modal("show");
    }
    else {
      alert("You don't have permission to delete that.");
    }

	},

	'change [type=checkbox]': function(){
		var myId = this._id;
		var myCompleted = this.completed;
		if(myCompleted){
			myTasksdb.update({_id:myId}, 
			{$set:{
				"completed": false
					}});
		} else{
			myTasksdb.update({_id:myId}, 
			{$set:{
				"completed": true
				}});
		}
	},
	'click .js-confirm'(event, instance){
		var myId = $("#deleteId").val();
		
		$("#"+myId).fadeOut('slow',function(){
			myTasksdb.remove({_id:myId});
		});
	}
});
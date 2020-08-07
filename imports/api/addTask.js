Template.addTask.events({
	'click .js-saveMe'(event, instance){
		var userChoice = $(".stat:checked").val(); //checks if pub or pri
		var myId = this._id;
		var myTask = $("#tasks").val();
			myTasksdb.insert({
				"task": myTask,
				"status": userChoice, 
				"completed": false,
				"createdOn": new Date().getTime(),
				"createdBy": Meteor.users.findOne({_id:Meteor.userId()}).username,
				"createdById": Meteor.userId()
			});

		$("#tasks").val("");
	},
});
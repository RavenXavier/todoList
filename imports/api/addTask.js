// Template.addTask.helpers({
// 	currentUser(){
// 		if 
// 	}
// });
Template.addTask.events({
	'click .js-saveMe'(event, instance){
		var userChoice = $(".stat:checked").val(); //checks if pub or pri
		var myId = this._id;
		var myTask = $("#tasks").val();
		console.log("Saving..." + myTask +":" + userChoice);
		// if (userChoice == '1'){	 //adds only choice is private
			myTasksdb.insert({
				"task": myTask,
				"status": userChoice, 
				"completed": false,
				"createdOn": new Date().getTime(),
				"createdBy": Meteor.users.findOne({_id:Meteor.userId()}).username
			});
		// } else {
		// 		myTasksdb.insert({
		// 			"task": myTask,
		// 			"status": userChoice, 
		// 			"completed": false,
		// 			"createdOn": new Date().getTime()
		// 		});
		// 	}	
	},
});
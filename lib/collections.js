myTasksdb = new Mongo.Collection('Todos');

myTasksdb.allow({
	insert: function(userId, doc){
		return true;
	},
	remove: function(userId, doc){
		if (userId){ //user has logged in
			return true;
		}
		else{
			return false;
		}
	},
	update: function(userId, doc){
		if (userId){ //user has logged in
			return true;
		}
		else{
			return false;
		}
	},
});
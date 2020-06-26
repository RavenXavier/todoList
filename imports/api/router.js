import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
 BlazeLayout.setRoot('.container');

FlowRouter.route('/',{
	name: 'index',
	action(params, queryParams) {
		BlazeLayout.render("pageLayout", {header: "banner", mainBody: "homePage"});
		console.log("home page");
	}
});

FlowRouter.route('/new',{
	name: 'task',
	action(params, queryParams) {
		BlazeLayout.render("pageLayout", {header: "banner", mainBody: "addTask"});
	}
});
FlowRouter.route('/tasks',{
	name: 'AllTask',
	action(params, queryParams) {
		BlazeLayout.render("pageLayout", {header: "banner", mainBody: "taskList"});
	}
});
FlowRouter.route('/private',{
	name: 'PrivateTask',
	action(params, queryParams) {
		BlazeLayout.render("pageLayout", {header: "banner", mainBody: "taskList"});
	}
});
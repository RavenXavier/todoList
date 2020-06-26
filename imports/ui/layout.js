import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // this   is the default BS theme as example
import popper from 'popper.js'
global.Popper = popper // fixes some issues with Popper and Meteor

//imports from ui
import './layout.html';
import './navBar.html';
import './addTask.html';
import './banner.html';
import './homePage.html';
import './taskList.html';

//imports from api
import '../../lib/collections.js';
import '../../lib/accounts-ui.js';
import '../api/router.js';
import '../api/addTask.js';
import '../api/taskList.js';
Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('userList');
Router.route('contact');
Router.route('about');
Router.route('buy');
Router.route('sell');
Router.route('profile');
Router.route('comments');
Router.route('apidemo');

Router.route('firefly');

Router.route('sponsors')

Router.route('draw')

Router.route('graphics')

Router.route('register')
Router.route('login')
Router.route('settings')

Router.route('/itemInfo/:_id',
	{name:'itemInfo',
	data:function() {
		return Items.findOne({_id:this.params._id})
	}})

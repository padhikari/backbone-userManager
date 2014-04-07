var app = app || {};

app User = Backbone.Model.extend({
	defaults: {
		firstName:'unknown',
		lastName:'Unknown',
		age:18	
	},

	idAttibute: '_id'
});
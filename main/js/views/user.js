var app = app || {};

app.UserView=Backbone.View.extend({

	tagName: 'div',
	className: 'page',
	template: _.template($('#user-list-template').html()),

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}




});
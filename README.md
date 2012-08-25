meteor jasmine
==============

this is a meteor based app, with no other sense of trying to integrate jasmine as test framework

### That's what I did so far

first create a folder for you new application and then install meteor & jasmine  
	>mkdir meteor-jasmine

	>cd meteor-jasmine

	>meteor create app

	>gem install jasmine

	>jasmine init

	> rake jasmine => this should be start up a small web server on port 8888 

if all is fine we can start with testing:
delete public folder, because we want need it.
change the spec/javascripts/support/jasmine.yml file
src_files:
app/client/*.js
create a sir client in app

	>mkdir app/client

move the files to client
change app.js and remove:

	if (Meteor.is_client) {
var Link = require('./link');

module.exports = Link.extend({
  template: Em.Handlebars.compile('Pinterest'),
  href: function(){
  }.property('parentView.url'),
});
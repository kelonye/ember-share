var Link = require('./link');

module.exports = Link.extend({
  template: Em.Handlebars.compile('G+'),
  href: function(){
    var url = this.get('parentView.url');
    return 'https://plus.google.com/share?url='+url;
  }.property('parentView.url'),
});
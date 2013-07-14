var Link = require('./link');

module.exports = Link.extend({
  template: Em.Handlebars.compile('G+'),
  href: function(){
    var text = this.get('parentView.text');
    var url = this.get('parentView.url');
    return 'https://plus.google.com/share?url='+url;
  }.property('text', 'url'),
});
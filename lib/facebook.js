var Link = require('./link');

module.exports = Link.extend({
  template: Em.Handlebars.compile('Facebook'),
  href: function(){
    var url = this.get('parentView.url');
    return 'https://www.facebook.com/sharer/sharer.php?u='+url;
  }.property('url')
});
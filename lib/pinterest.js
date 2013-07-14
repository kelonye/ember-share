var Link = require('./link');

module.exports = Link.extend({
  template: Em.Handlebars.compile('Pinterest'),
  href: function(){
    var text = this.get('parentView.text');
    var url = this.get('parentView.url');
    return 'http://twitter.com/intent/tweet?text='+text+'&url='+url;
  }.property('text', 'url'),
});
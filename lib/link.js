module.exports = Em.View.extend(require('ember-link'), {
  target: 'external',
  init: function(){
    this._super();

    var text = this.get('parentView.text');
    var url = this.get('parentView.url');
    var image = this.get('parentView.image');

    Em.$('meta[property="og:title"]').remove();
    Em.$('meta[property="og:description"]').remove();
    Em.$('meta[property="og:image"]').remove();

    var head = '';
    head += '<meta property="og:title" content="Share" />';
    head += '<meta property="og:description" content="'+text+'" />';
    head += '<meta property="og:image" content="'+image+'" />';

    Em.$(document.head).append(Em.$(head));

  },
});
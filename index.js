require('ember');

module.exports = Em.ContainerView.extend({
  text: Em.$('meta[name=description]').attr('content') || '',
  url: window.location.href,
  image: '',
  services: [],
  childViewsBinding: 'services',
  classNames: 'component share'.w(),
  init: function(){
    // encode
    this.set('text', encodeURIComponent(this.get('text')));
    this.set('url', encodeURIComponent(this.get('url')));
    this._super();
  },
  twitter: require('./lib/twitter'),
  facebook: require('./lib/facebook'),
  'g+': require('./lib/g+'),
});

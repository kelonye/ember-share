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

    var that = this;
    var api = 'https://www.googleapis.com/urlshortener/v1/url';
    //var key = location.search.slice 1
    //api += '?key='+key;
    var url = this.get('url');

    Em.$.ajax({
        url: api
      , type: 'POST'
      , data: JSON.stringify({longUrl: url})
      , contentType: 'application/json'
      , success: function(res){
        that.set('url', res.id);
      }
    });
    this._super();
  
  },
  twitter: require('./lib/twitter'),
  facebook: require('./lib/facebook'),
  'g+': require('./lib/g+'),
});

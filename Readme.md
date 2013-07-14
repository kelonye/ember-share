![](https://dl.dropbox.com/u/30162278/ember-share.png)


Install
---

    $ component install kelonye/ember-share


Use
---

```javascript
  Em.View.extend(require('ember-share'), {
    text: '',
    url: '',
    image: '',
    services: 'facebook twitter g+'.w()
  });
```

Services
---

    * Twitter
    * Facebook
    * G+
    * Pinterest

License
---

MIT
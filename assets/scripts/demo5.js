(function(NAP) {
  'use strict';

  function getProductDetails(country, language, pid, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api.net-a-porter.com/NAP/' + country + '/' + language + '/detail/' + pid);

    xhr.onload = function() {
      if (this.status === 200) {
        try {
          var body = JSON.parse(xhr.responseText);
          callback(null, body);
        } catch(e) {
          callback('Invalid JSON');
        }
      } else {
        callback('An error occured');
      }
    };

    xhr.send();
  }

  NAP.productDetails = {
    getProduct: function(pid, callback) {
      getProductDetails('GB', 'en', pid, callback);
    }
  };

})(NAP);

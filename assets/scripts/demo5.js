(function(NAP) {
  'use strict';

  function getProductDetails(country, language, pid, successCb, errorCb) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api.net-a-porter.com/NAP/' + country + '/' + language + '/detail/' + pid);

    xhr.onload = function() {
      var body;
      try {
        body = JSON.parse(xhr.responseText);
      } catch(e) {
        errorCb('Invalid JSON');
      }

      if (this.status === 200) {
        return successCb(body);
      }
    };
    xhr.onerror = function(){
      errorCb('An error occured');
    };

    xhr.send();
  }

  NAP.productDetails = {
    getProduct: function(pid, successCb, errorCb) {
      getProductDetails('GB', 'en', pid, successCb, errorCb);
    }
  };

})(NAP);

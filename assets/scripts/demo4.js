(function(NAP) {
  'use strict';

  NAP.analytics = {
    trackSomething: function(data) {
      console.log(data);
    }
  };

  NAP.domCode = {
    init: function() {
      var button = document.getElementById('super-button');

      if(button) {
        button.addEventListener('click', function() {
          NAP.analytics.trackSomething('the button has been clicked!!!');
        });
      }
    }
  };

})(NAP);

(function(NAP) {
    NAP.domCode.init();
})(NAP);

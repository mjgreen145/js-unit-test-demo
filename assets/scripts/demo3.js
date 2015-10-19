(function(NAP) {
  'use strict';
	
  NAP = window.NAP ||{};

	NAP.localisation = {
    localiseUrl: function(url, country, language) {
  		// is it already localised?
  		if(/\/[a-z]{2}\/[a-z]{2}\/.*/i.test(url)) {
  			return url;
  		}

  		// if not, add localised bits
  		return '/' + country.toLowerCase() + '/' + language + url;
  	},

    generateCanonicalPath: function(path) {
  		var pathWithoutCountyLangAndDevice = path.replace(/\/((intl|am|apac)\/)?[a-zA-Z]{2}\/[a-zA-Z]{2}\/((d|m)\/)?/i, '/');
  		var pathWithoutChannel = pathWithoutCountyLangAndDevice.replace(/^\/(intl|am|apac)\//i, '/');
  		return pathWithoutChannel;
    }

  };

})(NAP);
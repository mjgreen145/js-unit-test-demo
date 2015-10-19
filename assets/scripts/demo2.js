(function () {
    function handleSearchType() {
        var searchType = CookieUtil.getCookie("searchType");
        if (searchType === '') {
            searchType = 'passive';
        }

        return searchType;
    }

    function setSearchTypeCookieFromAnalyticsPageData() {
        if (analyticsPageData.search && analyticsPageData.search.search_type) {
            CookieUtil.setCookieForMinutes('searchType', analyticsPageData.search.search_type);
        }
    }

    function appendKeywords() {
        var currentURL = $(this).attr('href');

        if(currentURL.indexOf('/product/') !== -1) {
            return;
        }

        var newLink = currentURL;

        if(currentURL.split('?').length === 1) { // no query string
            newLink += '?keywords=' + analyticsPageData.search.entered + '&termUsed=' + analyticsPageData.search.used;
        } else {
            // check for duplicates and remove them
            if(currentURL.indexOf('keywords') === -1) {
                newLink += '&keywords=' + analyticsPageData.search.entered;
            }
            if(currentURL.indexOf('termUsed') === -1) {
                newLink += '&termUsed=' + analyticsPageData.search.used;
            }
        }

        setSearchTypeCookieFromAnalyticsPageData();

        window.location.href = newLink;

        // don't follow the original link
        return false;
    }

    function handleResultsType() {

        var resultsType = 'product';

        switch (analyticsPageData.category.toLowerCase()) {
            case 'search':
                resultsType = 'exact';
                break;
            case 'designer hierarchy':
                resultsType = 'dlp';
                break;
            case 'product hierarchy':
                resultsType = 'category';
                break;
            case 'content':
                if ($('#no_search_results').length > 0) {
                    resultsType = 'no results';
                } else {
                    resultsType = 'content';
                    $(document).on('click', '#content a', appendKeywords);
                }
                break;
        }
        analyticsPageData.search.results_type = resultsType;

        $(document).on('click', '.main-nav a, #size-filter span a, .filter_name', setSearchTypeCookieFromAnalyticsPageData);
        $(document).on('submit', '#filter-form', setSearchTypeCookieFromAnalyticsPageData);

        return resultsType !== 'no results';
    }

    function handleSearchTermUsed() {
        var termUsed = /[\?&]termUsed=([^&#]*)/i.exec(location.search);

        if (termUsed === null) {
            analyticsPageData.search.used = analyticsPageData.search.entered;
        } else {
            analyticsPageData.search.used = termUsed[1];
        }
    }

    function sendResultEvent(hasResults) {
        NAP.analytics.setConversionVar('internalSearch', analyticsPageData.search.used);

        if (!hasResults) {
            NAP.analytics.addEvent('nullSearch');
            NAP.analytics.setConversionVar('numSearchResults', 0);
            NAP.analytics.trackInteraction('search','no results', 'keyword', analyticsPageData.search.entered);
        }
    }

    function getTotalNumberOfProducts() {
        if (NAP.Mobile) {
            var numDisplay = $('#product-list-area h1');
            if (numDisplay.length > 0) {
                return numDisplay.html().match(/nbsp;([0-9]+)&nbsp/)[1];
            }
            else {
                return '';
            }
        }

        return $('.total-number-of-products').text();
    }

    function setResultsNumberData() {
        if (analyticsPageData.search.results_type === 'product') {
            analyticsPageData.search.results_num = '1';
        }
        else {
            analyticsPageData.search.results_num = getTotalNumberOfProducts();
        }
    }

    var searchKeywords = /[\?&]keywords=([^&#]*)/i.exec(location.search);

    if (searchKeywords !== null) {
        // autopageview will fire too early on no results page if we don't do this:
        if (analyticsPageData.category.toLowerCase() === "content" && window.location.href.indexOf('/Search')) {
            analyticsPageData.autoPageview = false;
        }

        $(function () {
            analyticsPageData.search = {
                entered: searchKeywords[1]
            };
           
            var searchType = handleSearchType(); 

            // do not track passive search on custom lists
            if(analyticsPageData.department === "CUSTOM LIST" && searchType === "passive") {
                delete analyticsPageData.search;
                return;
            }
            
            analyticsPageData.search.search_type = searchType;
            handleSearchTermUsed();                       
            
            var hasResults = handleResultsType();
            sendResultEvent(hasResults);

            setResultsNumberData();

            if (!hasResults) {
                NAP.analytics.trackPageview();
            }

        });
    }

})();
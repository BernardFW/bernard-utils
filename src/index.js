const axios = require('axios');

function Analytics(baseUrl, prefix = '/webview') {
    const self = this;

    function init() {
        self.query = window.location.search;
    }

    function makeUrl(path) {
        return baseUrl + path + '?' + self.query;
    }

    function pageView(path) {
        const url = makeUrl('/analytics/collect');
        const data = {
            event: 'page_view',
            path: path,
        };

        return axios.post(url, data);
    }

    init();

    return {
        pageView: pageView,
    };
}

module.exports = {
    Analytics: Analytics,
};

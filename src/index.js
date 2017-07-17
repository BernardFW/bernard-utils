var axios = require('axios');

function Analytics(baseUrl, prefix) {
    var self = this;

    function init() {
        if (!baseUrl) {
            baseUrl = '';
        }

        if (!prefix) {
            prefix = '';
        }

        self.query = window.location.search;
    }

    function makeUrl(path) {
        return baseUrl + path + self.query;
    }

    function pageView(path) {
        const url = makeUrl('/analytics/collect');
        const data = {
            event: 'page_view',
            path: prefix + path,
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

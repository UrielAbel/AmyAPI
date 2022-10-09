const fetch = require("node-fetch")

exports.events = (orgSlug, proSlug, authToken) => {
    fetch('https://sentry.io/api/0/projects/' + orgSlug + '/' + proSlug + '/events/', {
    headers: {
        'Authorization': 'bearer ' + authToken
    }
    }).then(res => res.json())
    .then(json => console.log(json));
}
exports.issues = (orgSlug, proSlug, authToken) => {
    fetch('https://sentry.io/api/0/projects/' + orgSlug + '/' + proSlug + '/issues/', {
    headers: {
        'Authorization': 'bearer ' + authToken
    }
    }).then(res => res.json())
    .then(json => console.log(json));
}
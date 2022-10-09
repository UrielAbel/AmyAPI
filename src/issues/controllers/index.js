const fetch = require("node-fetch")

exports.events = (issueId, authToken) => {
    fetch('https://sentry.io/api/0/issues/'+ issueId +'/events/', {
    headers: {
        'Authorization': 'bearer ' + authToken
    }
    }).then(res => res.json())
    .then(json => console.log(json));
}
exports.hashes = (issueId, authToken) => {
    fetch('https://sentry.io/api/0/issues/'+ issueId +'/hashes/', {
    headers: {
        'Authorization': 'bearer ' + authToken
    }
    }).then(res => res.json())
    .then(json => console.log(json));
}

exports.tags = (issueId, key, authToken) => {
    fetch('https://sentry.io/api/0/issues/'+ issueId +'/tags/'+ key +'/values/', {
    headers: {
        'Authorization': 'bearer ' + authToken
    }
    }).then(res => res.json())
    .then(json => console.log(json));
}
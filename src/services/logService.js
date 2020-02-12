//import * as Sentry from '@sentry/browser';
//import Raven from 'raven-js';

function init() {
    // Sentry.init({ dsn: "https://2c6a5e6a4be94b63bcf4d99443054da1@sentry.io/2420944" });
    // Raven.config("https://2c6a5e6a4be94b63bcf4d99443054da1@sentry.io/2420944", {
    //     release: "1-0-0",
    //     environment: "development-test"
    // })
}

function log(error) {
    console.log('logger function log', error);
    // Raven.captureException(error);
}

export default {
    init,
    log
}
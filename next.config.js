const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development"
    },
    env: {
        LDW_KEY: process.env.LATTER_DAY_API_TOKEN,
    },
})
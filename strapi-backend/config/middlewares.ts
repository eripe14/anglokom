export default [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    {
        name: 'strapi::cors',
        config: {
            origin: ['https://anglokom.pl', 'http://localhost:3000'], // albo *
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            headers: '*',
        },
    }
];

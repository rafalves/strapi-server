module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: 'https://melhores-compras.online/dev',
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});

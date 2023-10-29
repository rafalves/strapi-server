module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env('PUBLIC_URL', ''),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    defaultHeaders: {
      Authorization: "Bearer PMKAJcffWRZvFmOjJEvJrmWMZssJzA4766xAmvML1D2mLODlKrCOAuTwZOtUMoTc",
    },
  },
});

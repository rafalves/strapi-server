module.exports = {
  routes: [
    {
      method: "GET",
      path: "/offers/increase-likes/:id",
      handler: "api::offer.offer.increaseLikes",
    },
  ],
};

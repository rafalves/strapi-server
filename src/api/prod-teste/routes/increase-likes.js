module.exports = {
  routes: [
    {
      method: "GET",
      path: "/prod-testes/increase-likes/:id",
      handler: "api::prod-teste.prod-teste.increaseLikes",
    },
  ],
};

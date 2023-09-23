'use strict';

/**
 * category router
 */
const { sanitize } = require("@strapi/utils");
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::category.category', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const category = await strapi.entityService.findMany(
      "api::category.category",
      query
    );
    const schema = strapi.getModel("api::category.category");
    const sanitizedEntity = await sanitize.contentAPI.output(category, schema);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));

'use strict';

/**
 * prod-teste controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::prod-teste.prod-teste', ({ strapi }) => ({
  
  async increaseLikes(ctx) {

    const id = ctx.params.id

    const offer = await strapi.entityService.findOne("api::prod-teste.prod-teste", id, {
      fields: ['likes']
    }) 

    if (offer === null) {
      ctx.status = 404;
      ctx.body = { error: 'could not find product by Id' }
      return
    }    

    offer.likes++

    const updated = await strapi.entityService.update("api::prod-teste.prod-teste", id, {
      fields: ["likes"],
        data: {
          likes: offer.likes
        }
      })
 
    return {
      data: {
        id: updated.id,
        likes: updated.likes
      }
    }
  }
}));

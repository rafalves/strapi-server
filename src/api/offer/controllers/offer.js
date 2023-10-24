'use strict';

/**
 * offer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::offer.offer', ({ strapi }) => ({
  
  async increaseLikes(ctx) {

    const id = ctx.params.id

    const offer = await strapi.entityService.findOne("api::offer.offer", id, {
      fields: ['likes']
    }) 

    if (offer === null) {
      ctx.status = 404;
      ctx.body = { error: 'could not find offer by Id' }
      return
    }    

    offer.likes++

    const updated = await strapi.entityService.update("api::offer.offer", id, {
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

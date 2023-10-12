'use strict';

/**
 * prod-teste service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prod-teste.prod-teste');

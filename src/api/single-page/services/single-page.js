'use strict';

/**
 * single-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-page.single-page');

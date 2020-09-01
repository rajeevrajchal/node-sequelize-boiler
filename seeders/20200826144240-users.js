'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        first_name: "Maybelle",
        last_name: "Barks",
        email: "mbarks0@goodreads.com",
        email_verified: false,
        delete_flag: false,
        password: "$2a$12$o7o9.985R./pxhg5tVXC/uq86UE2XjXrB1/AoIcGbCdraASIBvpWi", //random
        role:"customer",
        createdAt:"1/22/2020",
        updatedAt:"4/11/2020"
      },
      {
        first_name: "Orv",
        last_name: "Oleshunin",
        email: "ooleshunin1@g.co",
        email_verified: false,
        delete_flag: false,
        password: "$2a$12$o7o9.985R./pxhg5tVXC/uq86UE2XjXrB1/AoIcGbCdraASIBvpWi",//random
        role:"customer",
        createdAt:"1/22/2020",
        updatedAt:"4/11/2020"
      },
      {
        first_name: "Norton",
        last_name: "Heaford",
        email: "nheaford2@walmart.com",
        email_verified: false,
        delete_flag: false,
        password: "$2a$12$o7o9.985R./pxhg5tVXC/uq86UE2XjXrB1/AoIcGbCdraASIBvpWi",//random
        role:"customer",
        createdAt:"1/22/2020",
        updatedAt:"4/11/2020"
      },
      {
        first_name: "Franciskus",
        last_name: "Blasdale",
        email: "fblasdale3@reuters.com",
        email_verified: false,
        delete_flag: false,
        password: "$2a$12$o7o9.985R./pxhg5tVXC/uq86UE2XjXrB1/AoIcGbCdraASIBvpWi",//random
        role:"trainer",
        createdAt:"1/22/2020",
        updatedAt:"4/11/2020"
      },
      {
        first_name: "Dennis",
        last_name: "Peyto",
        email: "dpeyto4@europa.eu",
        email_verified: false,
        delete_flag: false,
        password: "$2a$12$o7o9.985R./pxhg5tVXC/uq86UE2XjXrB1/AoIcGbCdraASIBvpWi",//random
        role:"trainer",
        createdAt:"1/22/2020",
        updatedAt:"4/11/2020"
      }])
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
  }
};

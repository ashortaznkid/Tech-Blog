const { User } = require('../models');

const userData = [{
    username: 'McCue',
    password: 'password'
    },
    {
        username: 'Kevin',
        password: 'thebest'
    },
    {
        username: 'Chris',
        password: 'theGoat'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
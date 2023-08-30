const { Post } = require('../models');

const postData = [{
        title: 'Lorem Ipsum I',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt vitae semper quis lectus.',
        user_id: 1
    },
    {
        title: 'Lorem Ipsum II',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. ',
        user_id: 2
    },
    {
        title: 'Lorem Ipsum III',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo. Id cursus metus aliquam eleifend mi in.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
const { Comment } = require('../models');

const commentData = [{
        comment_text: 'metus aliquam eleifend mi in',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'tortor at auctor urna nunc',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'nulla facilisi nullam vehicula ipsum',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
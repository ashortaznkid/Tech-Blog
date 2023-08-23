const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
    {
        id: {
            type: DatatTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        username:{
            type: DatatTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DatatTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    },
    {
       hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },

        async beforeUpdate(updateUserData) {
            updateUserData.password =await bcrypt.hash(updateUserData.password, 10);
            return updateUserData;
        }
       },
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'user' 
    }
);

module.exports = User;
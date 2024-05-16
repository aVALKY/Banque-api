const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Compte = require('./Compte');

class Transaction extends Model {

}

Transaction.init ({
    TR_ID : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    TR_type : {
        type : DataTypes.STRING,
        allowNull : false
    },

    TR_Date : {
        type : DataTypes.DATE,
        allowNull :false,
        
    }, 

    TR_CompteBeneficiaire : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Compte",
            key : "CO_ID"
        }
    },


    TR_CompteDebiteur : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Compte",
            key : "CO_ID"
        }
    },

}, {
    sequelize,
    modelName : 'Transaction',
    tableName : 'Transaction',
    timestamps : false

})

Transaction.belongsTo(Compte, {as : "compteDebiteur", foreignKey : "TR_CompteDebiteur"})
Transaction.belongsTo(Compte, {as : "compteBeneficiaire", foreignKey : "TR_CompteBeneficiaire"})


module.exports = Transaction;
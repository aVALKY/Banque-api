const Transaction = require("../Models/Transaction");

class TransactionService {

    async getAllTransaction(){
        return await Transaction.findAll({include : ["compteDebiteur", "compteBeneficiaire"]});
    }

    async getTransactionByID(transactionID){
        return await Transaction.findByPk(transactionID)
    }
}

module.exports = new TransactionService();
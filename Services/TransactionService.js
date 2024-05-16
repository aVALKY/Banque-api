const Transaction = require("../Models/Transaction");

class TransactionService {

    async getAllTransaction(){
        return await Transaction.findAll({include : ["compteDebiteur", "compteBeneficiaire"]});
    }
}

module.exports = new TransactionService();
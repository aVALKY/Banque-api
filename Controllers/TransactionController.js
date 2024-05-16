const TransactionService = require("../Services/TransactionService.js");

class TransactionController {
    async getAllTransaction(request, result){
        try {
            const transactions = await TransactionService.getAllTransaction();
            result.json(transactions)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des Transactions."});
        }
    }
}

module.exports = new TransactionController();
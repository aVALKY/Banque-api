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

    async getTransactionByID(request, result){
        try {
            const transaction = await TransactionService.getTransactionByID(request.params.id);
            result.json(transaction)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des transaction."});
        }
    }

    async addTransaction(request, result){
        try {
            const transaction = await TransactionService.addTransaction(request.body);
            result.json(transaction)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'insertion de la transaction."});
        }
    }
}

module.exports = new TransactionController();
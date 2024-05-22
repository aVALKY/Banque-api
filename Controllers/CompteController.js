const CompteService = require("../Services/CompteService");

class CompteController {
    async getAllCompte(request, result){
        try {
            const comptes = await CompteService.getAllCompte();
            result.json(comptes)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des comptes."});
        }
    }

    async getCompteByID(request, result){
        try {
            const compte = await CompteService.getCompteByID(request.params.id);
            result.json(compte)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des comptes."});
        }
    }

    async addCompte(request, result){
        try {
            const compte = await CompteService.addCompte(request.body);
            result.json(compte)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'insertion du compte."});
        }
    }


    async removeCompte(request, result){
        try {
            await CompteService.removeCompte(request.params.id);
            result.json({message : "Le compte à bien été supprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression du compte"})
        }
    }

    async updateCompte(request, result){
        try {
            const compte = await CompteService.updateCompte(request.params.id, request.body);
            result.json(compte);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification du compte"})
        }
    }

}

module.exports = new CompteController();
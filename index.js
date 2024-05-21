const express = require("express");
const app = express();
const clientRoutes = require("./Routes/ClientRoutes");
const compteRoutes = require("./Routes/CompteRoutes");
const transactionRoutes = require("./Routes/TransactionRoutes")
const authenticateRoutes = require('./Routes/AuthenticateRoutes');
const AuthenticateController = require("./Controllers/AuthenticateController");

app.use(express.json());

app.use('/auth', authenticateRoutes);
app.use("/clients", AuthenticateController.autenticateToken, clientRoutes);
app.use("/comptes", AuthenticateController.autenticateToken, compteRoutes);
app.use('/transactions', AuthenticateController.autenticateToken, transactionRoutes);

module.exports = app; 
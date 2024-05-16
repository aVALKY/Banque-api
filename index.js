const express = require("express");
const app = express();
const clientRoutes = require("./Routes/ClientRoutes");
const compteRoutes = require("./Routes/CompteRoutes");
const transactionRoutes = require("./Routes/TransactionRoutes")

app.use(express.json());

app.use("/clients", clientRoutes);
app.use("/comptes", compteRoutes);
app.use('/transactions', transactionRoutes);

module.exports = app; 
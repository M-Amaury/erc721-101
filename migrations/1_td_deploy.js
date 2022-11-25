const ExerciceSolution = artifacts.require("ExerciceSolution");

const EvaluatorAdressGoerli1 = "";
const EvaluatorAdressGoerli2 = "";

module.exports = function (deployer, network, accounts) {
	deployer.deploy(ExerciceSolution)
};
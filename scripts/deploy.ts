// ** Import types
import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    if(!hre || Object.keys(hre).length == 0) {
        const myhre = require("hardhat");
        hre = myhre;
    }
    const inquirer = require('inquirer');
    await inquirer
    .prompt([
        {
            name: "deploy_select",
            type: "list",
            message: "Deploy Inheritance Module",
            choices: ["y", "[n]"],
        }
    ])
    .then(async answers => {
        if(answers.deploy_select == "y") {
            // TODO: DEPLOY
        }
    })
    .catch(error => {
        console.log("ERROR");
        console.warn(error)
    });
};

export default func;
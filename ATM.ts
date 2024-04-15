#! /usr/bin/env node


import inquirer from "inquirer";
let myBalance = 10000; 
let myPin = 1112;


let pinAnswer = await inquirer.prompt
(
 {
    name: "Pin",
    message: "Enter your pin",
    type: "number",
 }
);

  if (pinAnswer.Pin === myPin)
{
    console.log("Pin is correct");
    let selectOperation = await inquirer.prompt
    (
        {
            name: "selectOperation",
            message: "Select your operation",
            type: "list",
            choices: ["Withdraw", "Deposit", "Balance"],
        }
    );
    // if  withdraw the  how to withdraw
    if (selectOperation.selectOperation === "Withdraw")
    { 
        let withdrawType = await inquirer.prompt
        (
            {
                name: "withdrawType",
                message: "Select your withdraw type",
                type: "list",
                choices: ["FastWithdraw", "NormalWithdraw"],
            
            }
        );
        // if fast withdraw
        if (withdrawType.withdrawType === "FastWithdraw")
        {
           let fastCash = await inquirer.prompt
           (
            {
                name: "fastCash",
                message: "Choose amount",
                type: "list",
                choices: ["1000", "2000", "5000"],
            }
           )

           console.log(" Your remainig  balance is :", myBalance - fastCash.fastCash );
           process.exit(1); // Exit the program 
   

        }
         else if (withdrawType.withdrawType === "NormalWithdraw")
            {
                let withdrawAmount = await inquirer.prompt
                (
                    {
                        name: "withdrawAmount",
                        message: "Enter amount",
                        type: "number",
                    }
                )

                if (withdrawAmount.withdrawAmount > myBalance)
                {
                    console.log("Insufficient balance");
                    process.exit(1); // Exit the program
                }
                else{
                console.log(" Your remainig  balance is :", myBalance - withdrawAmount.withdrawAmount);
                process.exit(1); // Exit the program
                }

            }
        } // if user choose deposite 
        else if (selectOperation.selectOperation === "Deposit")
        {
            let depositAmount = await inquirer.prompt
            (
                {
                    name: "depositAmount",
                    message: "Enter amount",
                    type: "number",
                }
            )
            if (depositAmount.depositAmount < 0)
                {
                    console.log("Please deposite amount greater than 0");
                    process.exit(1); // Exit the program
                }
                else{


            console.log(" Your remainig  balance is :", myBalance + depositAmount.depositAmount);
            process.exit(1); // Exit the program
        }
        }
        else  (selectOperation.selectOperation === "Balance")
            {
                console.log(" Your remainig  balance is :", myBalance);
                process.exit(1); // Exit the program
            }

        }
else{
    console.log("Pin is incorrect");};
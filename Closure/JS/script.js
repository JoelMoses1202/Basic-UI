//Bank Account with 5 users
// Each Account has account number,card number, pin number, account balance.
account = [
  {
    acc_no: 1, // Account Number
    card_no: 1000, //Card Number
    pin: 123, // Pin Number
    acc_balance: 20000, //Account Balance
  },
  {
    acc_no: 2,
    card_no: 2000,
    pin: 234,
    acc_balance: 10000,
  },
  {
    acc_no: 3,
    card_no: 3000,
    pin: 345,
    acc_balance: 20000,
  },
  {
    acc_no: 4,
    card_no: 4000,
    pin: 456,
    acc_balance: 20000,
  },
  {
    acc_no: 5,
    card_no: 5000,
    pin: 567,
    acc_balance: 20000,
  },
];

// Function used to withdraw Money
// 4 parameters are required - Card number, Pin Number,  Amount To Be Withdrawed, Minimum Balance
function withdrawMoney(card_no, pin, amount, min_balance) {
  console.log("-----WITHDRAWING MONEY-----");
  for (i = 0; i < account.length; i++) {
    // ITERATING TO CHECK ACCOUNT NUMBER VALIDATION
    if (card_no == account[i].card_no) {
      if (account[i].pin == pin) {
        //CHECKING PIN NUMBER
        if (account[i].acc_balance >= amount) {
          //AMOUNT WITHDRAWED IS CHECKED IF ITS GREATER THAN OR LESS THAN ACCOUNT BALANCE
          if (account[i].acc_balance + min_balance > amount) {
            //AMOUNT WITHRAWN IS CHECKED ALONG WITH MINIMUM BALANCE
            const temp = account[i].acc_balance - amount; // Cash is successfully withrawn
            account[i].acc_balance = temp;
            console.log("Amount Debited =" + amount);
            console.log("Balance in Account =" + account[i].acc_balance);
            break;
          } else {
            console.log(
              "Minimum balance of the bank should be maintained hence the Amount cannot be withdrawn"
            ); // IF AMOUNT WITHDRAWN IS LESS THAN MINIMUM BALANCE
            break;
          }
        } else {
          console.log("Insufficient Balance"); //IF ACCOUNT HAS INSUFFICIENT BALANCE
          break;
        }
      } else {
        console.log("Wrong Pin"); // IF THE PIN IS WRONG
        break;
      }
    } else {
      console.log("Wrong Card Number"); //IF THE CARD NUMBER IS WRONG
      break;
    }
  }
}

//FUNCTION USED TO DEPOSIT MONEY
//3 parameters are required - Card number, Pin Number,  Amount To Be Withdrawed

function depositMoney(card_no, pin, amount) {
  console.log("-----DEPOSITING MONEY-----");
  for (i = 0; i < account.length; i++) {
    // ITERATING TO CHECK ACCOUNT NUMBER VALIDATION
    if (card_no == account[i].card_no) {
      if (account[i].pin == pin) {
        //CHECKING PIN NUMBER
        const temp = account[i].acc_balance + amount; // Cash is successfully deposited
        account[i].acc_balance = temp;
        console.log("Amount Credited =" + amount);
        console.log("Balance in Account =" + account[i].acc_balance);
        break;
      } else {
        console.log("Wrong Pin"); // IF THE PIN IS WRONG
        break;
      }
    } else {
      console.log("Wrong Card Number");
      break;
    }
  }
}

//function bank
function bank() {
  //atm function is defined here to withraw money
  //it uses 3 parameter - card number, pin number , account balance
  function atm(card_no, pin, acc_balance) {
    const min_balance = 1000; //defining minimum balance
    withdrawMoney(card_no, pin, acc_balance, min_balance); // calling function withdrawMoney
  }
  // cdm function is defined here to deposit money
  // it uses 3 parameters card number, pin number, account balance
  function cdm(card_no, pin, acc_balance) {
    depositMoney(card_no, pin, acc_balance); //calling function depositMoney
  }
  return {
    atm,
    cdm,
  };
}

bank().atm(1000, 123, 20);
bank().cdm(1000, 123, 20);

class Bank{
    accountDetails ={
        1000:{acno:1000,username:"userone",password:"userone",balance:50000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:5000},
        1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},
        1003:{acno:1003,username:"userfour",password:"userfour",balance:6000},
    }
    // validateaccount number function returns true/false
    validateAcno(acno){
        return this.accountDetails.hasOwnProperty(acno)
    }
    // authenticate account(acno,password)
    authenticateAcno(acno,pswd){
        if(this.validateAcno(acno))
        {
            if(pswd==this.accountDetails[acno].password){
                console.log("Authentication Sucessfull");
                
            }
            else{
                console.log("Invalid password.Authentication failed")
            }

        }else{
            console.log("Invalid Account Number.Authentication failed");
            
        }
    }
    // balance enquiry function
    balanceEnquiry(acno)
    {
        if(this.validateAcno(acno))
        {
            console.log(`current balance ${acno}:${this.accountDetails[acno].balance}`);
            
        }else
        {
            console.log("invalid account number");
            
        }
    }
    // function for fund transfer(fromAcno,toAcno,amount)
    fundTransfer(fromAcno,toAcno,amount){
        if(this.validateAcno(fromAcno) && this.validateAcno(toAcno))
        {
            if(this.accountDetails[fromAcno].balance>=amount){
                this.accountDetails[fromAcno].balance-=amount
                this.accountDetails[toAcno].balance+=amount
                console.log("Transfer Successfull");
                
            }
            else{
                console.log("transfer faild");
                
            }
        }else{
            console.log("invalid credit/debit account number");
            
        }
    }

}
const user=new Bank()
console.log(user.validateAcno(1090)?"account is valid":"account is invalid");
user.authenticateAcno(1000,"userone")
user.balanceEnquiry(1000)
user.fundTransfer(1000,1001,3000)
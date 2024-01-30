function changePinCode(newPinCode){
	this.pinCode =  newPinCode
}
 
function paymentToOtherAccount(cardToSend, amount){
      if (this.balance >= amount) {
        this.balance =  this.balance - amount
      } else {
        console.log("ԱՆբավարար միջոցներ")
      }
    }

function addBalance (amount){
	this.balance = this.balance + amount
}

function Card(id, name, surname, expDate, pinCode, accNumber,balance){
  this.id =  id  //Math.floor(Math.random() * 100000)
	this.name= name
	this.surname = surname
	this.expDate = expDate
	this.pinCode = pinCode
	this.changePinCode = changePinCode
	this.accNumber = accNumber
	this.balance = balance
	this.paymentToOtherAccount = paymentToOtherAccount
  this.addBalance = addBalance
}


function changePinCode(newPinCode, oldPin){
if(oldPin === this.pinCode){
	this.pinCode = newPinCode
}
	return "stacvec"
}
 
function paymentToOtherAccount(cardToSend, amount){
      if (this.balance >= amount &&  cardToSend instanceof Card){}
        this.balance =  this.balance - amount
				cardToSend.balance = cardToSend.balance + amount - amount * .5
      } else {
        console.log("ԱՆբավարար միջոցներ")
      }
    }

function addBalance (amount){
	this.balance = this.balance + amount
}

function Card( name, surname, expDate, pinCode, accNumber,balance){
  this.id =  Math.floor(Math.random() * 100000)
	this.name= name
	this.surname = surname
	this.expDate = '01/2027'
	this.pinCode = pinCode
	this.changePinCode = changePinCode
	this.accNumber = accNumber
	this.balance = balance
	this.paymentToOtherAccount = paymentToOtherAccount
  this.addBalance = addBalance
}
function changePinCode(newPinCode, oldPin){
if(oldPin === this.pinCode){
	this.pinCode = newPinCode
}
	return "stacvec"
}
 
function paymentToOtherAccount(cardToSend, amount){
      if (this.balance >= amount &&  cardToSend instanceof Card){}
        this.balance =  this.balance - amount
	cardToSend.balance = cardToSend.balance + amount - amount * 0.5
      } else {
        console.log("ԱՆբավարար միջոցներ")
      }
    }

function addBalance (amount){
	this.balance = this.balance + amount
}

function Card( name, surname, expDate, pinCode, accNumber,balance){
  this.id =  Math.floor(Math.random() * 100000)
	this.name= name
	this.surname = surname
	this.expDate = '01/2027'
	this.pinCode = pinCode
	this.changePinCode = changePinCode
	this.accNumber = accNumber
	this.balance = balance
	this.paymentToOtherAccount = paymentToOtherAccount
  this.addBalance = addBalance
}

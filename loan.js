function eligibility(){
    //You need the declare these values inside the function (getting them globally will only get the value they are when page loads up)
    let Income = document.querySelector("#amount").value;
    let Duration = document.querySelector("#years").value;
    let Loan = document.getElementById("loan").value;
    let amt = parseInt(Income);
    let monthlyPayment = document.getElementById('monthly-payment');
    let totalPayment = document.getElementById('total-payment');
    let totalInterest = document.getElementById('total-interest');
    //let  interest;
    //let dura = parseInt(Duration);
    let Message = document.querySelector("#result");
    if(Loan < 50000 && Duration != ""  &&  amt < 50000){
        Message.textContent = "Please! Your journey ends here as you're not eligible for the loan";
       // console.log('Try again')
    }else if(amt > 50000 && Duration != ""  &&  Loan < 50000){
        Message.textContent = "Please! Your journey ends here as you're not eligible for the loan";
    }
    //Change this else-if to just an else since you are just checking for the exact opposite of your if statement
    //else  if(Loan >= 50000 && Loan <= 70000 && amt >= 50000 && Duration != ""  &&  Loan !="") 
    
     else  if(Loan >= 50000  && Duration != ""  &&  Loan !="") {
        Message.textContent = "Congratulations! Please Check the information below and apply"
      //  console.log('Please Fill the form below and apply')
    }   
    
  if (Loan >= 50000 && Loan <= 70000  ){
    rate = 7/100;
    interest = rate * Loan;
  }
  if(Loan >=70001 && Loan <= 90000   ){
      rate = 8/100;
      interest = rate * Loan;
  }
  {
 
      
      totalPayment.value =  Math.round( parseInt(Loan) + parseInt(interest )* parseInt(Duration)* 12);
      totalInterest.value = Math.round(interest * parseInt(Duration)* 12);
      monthlyPayment.value =   Math.round( parseInt(totalPayment.value)/parseInt(Duration * 12)) ;
  }
  





}

function apply() {
  /*  let Amount = document.querySelector("#amount").value;
    //let Duration = document.querySelector("#years").value;
    let amt = parseInt(Amount);
    let rate;   */

    
}

















//Prevent form from submitted or else page will reload and no message would be shown
document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
});

    
const items = document.getElementsByClassName("select-btn");
let count =1;
for (let i = 0; i < items.length; i++) {
    const element = items[i];
    element.addEventListener("click", function (e) {
        
        e.preventDefault();
       // console.log(e.target.parentNode.children[0].innerHTML);
        if (count <= 5 && !e.target.classList.contains('active')) {
        const listext = e.target.parentNode.children[0].innerHTML;
        const li = document.createElement("li");
        li.innerHTML = listext;
        const selectlist = document.getElementById("select-list");
            selectlist.appendChild(li); 
            
         e.target.classList.add('active');
         e.target.setAttribute('disabled', 'disabled');
         count = count + 1; 
            
        }
        else if (count > 5) {
            alert("limit full");
        }
        
        
    })
    
}

const cal = document.getElementById("cal-btn");
 const expense = document.getElementById("total-amount");
cal.addEventListener("click", function (e) {
    e.preventDefault();
    const player = document.getElementById("player-amount").value;
    const playervalue = parseInt(player);
   
    const ol = document.getElementById("select-list");
    const calamount = ol.children.length * playervalue;
   
    expense.innerHTML = calamount;
    document.getElementById("player-amount").value = "";


});
const totalcal = document.getElementById("total-cal");
totalcal.addEventListener("click", function (e) {
    e.preventDefault();
    const Manager = document.getElementById("manager").value;
    const managervalue = parseInt(Manager);
    
     
    const Coach = document.getElementById("coach").value;
    const coachvalue = parseInt(Coach);
    const expensevalue = parseInt(expense.innerHTML);
    
    function annualbudget(coachvalue, managervalue, expensevalue) {
    const totalbudget = managervalue + coachvalue + expensevalue;
    return totalbudget;
    
    }
    
    const totalannual = annualbudget(managervalue, coachvalue, expensevalue);
    document.getElementById("total-expense").innerHTML=totalannual;

    


})
 

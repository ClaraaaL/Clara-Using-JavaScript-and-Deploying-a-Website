/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayselected = 0;
let dayRate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

//buttons
var monday = document.getElementById('monday');
var tuesday = document.getElementById('tuesday');
var wednesday = document.getElementById('wednesday');
var thursday = document.getElementById('thursday');
var friday = document.getElementById('friday');

//listeners
function changedayColor() {
    if (!(this.classList.contains("clicked"))){
        this.classList.add("clicked");
        dayselected++;
        console.log(dayselected);
    }calculate();
}

monday.addEventListener('click', changedayColor);
tuesday.addEventListener('click', changedayColor);
wednesday.addEventListener('click', changedayColor);
thursday.addEventListener('click', changedayColor);
friday.addEventListener('click', changedayColor);


// /********* clear days *********/
// // when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

//Clear Function
function clear(){
    //Days
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    //Totals
    dayselected = 0;
    calculate();
}

 const clearButton = document.getElementById("clear-button");

 clearButton.addEventListener("click", clear); 


// /********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeRate(){
    if(this === halfButton && fullButton.classList.contains("clicked")){
        fullButton.classList.remove("clicked");
        halfButton.classList.add("clicked");
        dayRate = 20;
    }else{
        fullButton.classList.add("clicked");
        halfButton.classList.remove("clicked");
        dayRate = 35;
    }
    calculate();
}

var halfButton = document.getElementById("half");
var fullButton = document.getElementById("full");

halfButton.addEventListener('click', changeRate);
fullButton.addEventListener('click', changeRate);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(){
    const totalAmountElement = document.getElementById("calculated-cost");
    const total = dayselected * dayRate;
    console.log(total);
    console.log(dayselected);
    console.log(dayRate);
    totalAmountElement.textContent = `${total}`;
}




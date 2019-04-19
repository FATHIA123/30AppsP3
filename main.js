// Starting with second hand cause that updates most often 
// first thing first lets create a function
// this function needs to set the date becasue we need to know the date to get the time
// good thing JS has it installed

// function setDate() {
//     console.log("hi")
    // we need this to run, how often we run seconds,
    // how do we do that? 
    // setInterval: calls a function or evaluates an expression at specified intervals (in milliseconds).
    // The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.


// } 
// setInterval(setDate, 1000)
// so here we set the interval of the setDate function to run 1000milsec a time,
// which just console.logs "hi"


// but we don't want to console.log hi we want the date

// we want to set the time in this function
function setDate() {
// the "now" variable is set to grab the date in JS.
// js has Date in itself. So once we grab the date in JS cloud we set it to a variable.

    const now = new Date(); 

// now we can extract the seconds from the date. 
// the .getSeconds() function is a function in JS that grabs the sec in the date for u 
// then we assign it to a variable called seconds
    const seconds = now.getSeconds();
// to see what the out put is we console.log it. we should see the seconds of the current live time.
// its getting us the second of the current minS 
console.log(seconds);

// now we want to turn that into a degree. How do we turn these seconds 1-60 into a degree

// first we need to turn it into something that is base 100. like 1-360, full circle not 1-100 
// this will make life easier to convert to degrees 
// at 0 its going to be 0degrees 
// at 100% its going to be 360degrees becasue a circle is 360 degrees and not 60 or 100.

//  So this is how we convert to degrees one degee = 60mins = 3600sec
// seconds/ 60  gives us the pecenage that we have then multple that 
const secondsDegrees = ((seconds/ 60 ) * 360 ) + 90;
// here we are rotatng the hand based on the dynamic degrees that we are generating above
// to transform is to change
// we are taking the hand and placing it to the next second and using rotate to do that
// no need for transition becase sec are next to each other
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//  if we console log we can see that the hand is half way but not saying 60
// this is because we initally did 90degrees in css to off set that we add 90

// for min and hour its the same
const mins = now.getMinutes();
const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
minsHand.style.transform = `rotate(${minsDegrees}deg)`;


// dividing this by 12 instead of 60 
const hour = now.getHours();
const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000)

//  lets grab the hands 

const secondHand = document.querySelector('.sec-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
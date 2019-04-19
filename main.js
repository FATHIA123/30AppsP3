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
// at 100% its going to be 360degrees
}

setInterval(setDate, 1000)
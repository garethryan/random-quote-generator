/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 

 ***/
var quote = ''; 

var quotes = [{Quote: ' When something is important enough, you do it even if the odds are not in your favor',
              Source: 'Elon Musk', 
              Citation: 'www.cbsnews.com ', 
              Year: 'May 2012', 
              Category: 'Automotive',
            }, 
              
              {Quote: 'Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it’s really how it works',  
              Source: 'Steve Jobs', 
              Citation: 'Wired Magazine', 
              Year:  '1994', 
              Category: 'Technology'
            }, 

              { Quote: 'Rice is great when you’re hungry and you want 2000 of something.',  
               Source: 'Mitch Hedberg', 
               Citation: 'Unknown',
               Year: ' Unknown ', 
               Category: 'Comedy',
            },  
]
 
  var i = 1; i < quotes.length ; i ++; 
    
   {
    var quote = quotes[i]+= quotes.Source + quotes.Citation + quotes.Year + quotes.Category;
   }
  


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
   var getRandomNumber = Math.floor(Math.random() * quotes.length);
   var getRandomQuote = [getRandomNumber].Quote;   
   return getRandomQuote;  
   
}


/***
 * `printQuote` function
***/ 
function printQuote(){
  printQuote = getRandomQuote(quote); 
} 
console.log(getRandomQuote); 
   

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


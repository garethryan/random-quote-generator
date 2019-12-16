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

            {Quote: 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.', 
            Source:  'Michael Scott (Steve Carell),',
            Citation: ' The Office, Season 2: The Fight.', 
            Year: 'Unknown',  
            Category: 'TV',
              },

            {
              Quote: 'If you obsess over whether you are making the right decision, you are basically assuming that the universe will reward you for one thing and punish you for another.', 
              Source: 'Deepak Chopra',
              Citation: 'The Book of Secrets: Unlocking the Hidden Dimensions of Your Life',
              Year: '2005',
              Category: 'Spiritual',
            }, 

];
 
  var i = 0; i < quotes.length ; i ++; 
    
   {
    var quote = quotes[i]+= quotes.Source + quotes.Citation + quotes.Year + quotes.Category;
   }
  


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
   var getRandomNumber = Math.floor(Math.random() * quotes.length);
   var randomQuote = quotes[getRandomNumber]; 

   return randomQuote;  
    
}
console.log(getRandomQuote());
  

/***
 * `printQuote` function
***/ 
function printQuote(){ 
  var randomQuote = getRandomQuote();
  innerHTML = <p class = "quote"> + randomQuote.Quote</p>; 
  return(randomQuote); 
} 

document.getElementById("quote-box").innerHTML = printQuote; 

console.log(printQuote()); 
 
   

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


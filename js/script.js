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
var htmlString = ','; 

var quotes = [{quote: ' When something is important enough, you do it even if the odds are not in your favor',
              source: 'Elon Musk', 
              citation: 'www.cbsnews.com', 
              year: 'May 2012', 
              category: 'Automotive',
            }, 
              
              {quote: 'Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it’s really how it works',  
              source: 'Steve Jobs', 
              citation: 'Wired Magazine', 
              year:  '1994', 
              category: 'Technology'
            }, 

              { quote: 'Rice is great when you’re hungry and you want 2000 of something.',  
               source: 'Mitch Hedberg', 
               citation: 'Unknown',
               year: '', 
               category: 'Comedy',
            },  

            {quote: 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.', 
            source:  'Michael Scott (Steve Carell)',
            citation: ' The Office, Season 2: The Fight.', 
            year: '2012',  
            category: 'TV',
              },

            {
              quote: 'If you obsess over whether you are making the right decision, you are basically assuming that the universe will reward you for one thing and punish you for another.', 
              source: 'Deepak Chopra',
              citation: 'The Book of Secrets: Unlocking the Hidden Dimensions of Your Life',
              year: '2005',
              category: 'Spiritual',
            }, 

];
 
/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
   var getRandomNumber = Math.floor(Math.random() * quotes.length);
   var randomQuote = quotes[getRandomNumber]; 

   return randomQuote;  
    
}
  
/***
 * `printQuote` function
***/ 
function printQuote(){ 
  var randomQuote = getRandomQuote();
  
  var htmlStringQuote = '<p class = "quote"> '+ randomQuote.quote + '</p>'; 
  var htmlStringSource = '<p class = "source" > '+ randomQuote.source + '</p>'; 
  var htmlStringCitation = '<p class = "citation" > '+ randomQuote.citation + '</p>';
  var htmlStringYear = '<p class = "year" > '+ randomQuote.year + '</p>'; 
  var htmlStringCategory = '<p class = "category" > '+ randomQuote.category + '</p>'; 


  htmlString = htmlStringQuote + htmlStringSource + htmlStringCitation + htmlStringYear + htmlStringCategory ; 
 
   
    document.getElementById("quote-box").innerHTML = htmlString;
  }; 
console.log(htmlString); 


/*** Random color generator 
 * 
 ***/

var numberString = ''; 
var rgbColor; 
var randomColor; 

   function randomRGB(){ 
     return Math.floor(Math.random() * 256); 
   }
   function randomColor(){
    var color = 'rgb('; 
    color += randomRGB()+ ','; 
    color += randomRGB()+ ','; 
    color += randomRGB()+ ',)'; 
    return color; 

   }
     for (var i = 0; i < 100; i +=1 ){
       rgbColor = randomColor;  
     }; 

    console.log(rgbColor()); 



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


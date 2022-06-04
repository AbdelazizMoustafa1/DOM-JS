/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//three variables containing the ul list, section array and the fragment.
let ulList = document.querySelector('#navbar__list');

let sections = document.querySelectorAll('section');

//using a DocumentFragment to store and appendchild once only
let fragment = document.createDocumentFragment();  

//A variable to store li lists that were created in the ul list; li collection; which will be used to iterate through nav bar items and highlight them
let liCol;

/**
 * End Global Variables
 
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function buildNav(){
//for loop to iterate through every section in the secrions array, and creating new list items named after the value of data-nav of the given section.  
    for (const section of sections){
        const secName = section.getAttribute('data-nav'); 
//        const secId = section.getAttribute('id');
        const liElement = document.createElement('li');
        liElement.textContent = secName;
        // liElement.innerHTML = `<a>${secName}</a>`; 
        
        liElement.addEventListener('click', function(){
            console.log(`${secName} was clicked`);
            
            // Scroll to section on link click
            section.scrollIntoView({behavior : 'instant'});
        
        });
        fragment.appendChild(liElement);
    };

    ulList.appendChild(fragment);
    // updating the variable collecting li items
    liCol = ulList.querySelectorAll('li');
};
// Note: Console error concerning object document was resolved by moving the Javascript linking script line down to the bottom of the html body.

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

//An EventListener that listens for scrolls and highlishts current section
window.addEventListener("scroll", () => {
    
    for (let i=0; i < sections.length ; i++){
        
        // getting the rectanglular boudaries of each section
        const rect = sections[i].getBoundingClientRect();
        
        // specifying the place where the section shall be considered visible and get highlighted
        if(rect.top > -200 && rect.top < 400){
            // As section is intersecting; adding css class to section and nav bar items
            // Set sections as active
            sections[i].classList.add('your-active-class');
            liCol[i].classList.add('your-active-nav')
            
        }
        else{ //removing css class from other items that aren't in the viewport
            sections[i].classList.remove('your-active-class');
            liCol[i].classList.remove('your-active-nav')
        };
    };
});   


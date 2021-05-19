/**
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

//DOM elements
//creat global var for nnavigator bar
const menuBarList = document.getElementById("navbar__list");
//creat global var for sections
//using method querySelectorAll to select all sections
const mySections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 * End Helper Functions
 * Begin Main Functions 
 */

//Build the dynamic nav list
//creat menu items
const buildDynamicNav = () => {
    let navListItems = '';
    //creat for of loop, to looping all section
    for (const section of mySections) {
        //add the section id
        let idOfSection = section.id;
        //add section data_nav 
        let titleOfSection = section.dataset.nav;
        //add navigation the sections list
        navListItems += `<li><a class="menu__link" href="#${idOfSection}">${titleOfSection}</a></li>`;

    }; //end for of loop
    //add the section items to the navigation menu bar
    menuBarList.innerHTML = navListItems;
}; //end function

// Add class 'active' to section when near top of viewport

//eventListener to select active section when scroll 
//creat function that gives the active section different appearance
window.addEventListener('scroll', function setActiveionSection() {
    //creat for loop,to over loop all section
    for (const section of mySections) {
        const sectionPosi = section.getBoundingClientRect();
        //if conditional to set the active sctions
        if (sectionPosi.top < 250 && sectionPosi.top >= 0) {
            //get the data-nav
            const sectionIbView = section.dataset.nav;
            //for loop remove the non active section
            for (const myListItems of mySections) {
                myListItems.classList.remove("your-active-class");
                //this color limited to the active section
                myListItems.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
            }; //end for of loop
            //adding the active class to active section
            section.classList.add("your-active-class");
            //add color background to the active section
            section.style.cssText = "background-color:#660033;";
        }; //end if conditional
    }; //end for loop
}); //end eventListener

//call the functions
buildDynamicNav();

// Scroll to anchor ID using scrollTO event
//add the scroll  behavior: "smoth" to the CSS file 
/**
 * End Main Functions
 * Begin Events
 */
// Build menu 
// Scroll to section on link click
// Set sections as active
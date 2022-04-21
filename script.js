const hamburger = document.querySelector(".hamburger-menu");
const white_overlay = document.querySelector(".white-overlay");
const grey_overlay = document.querySelector(".grey-overlay");
const cross = document.querySelector(".close");
const menu = document.querySelector(".menu");

const features = document.getElementById("features");
const featuresDropdown = document.querySelector(".features-dropdown");
const arrowDownFeatures = document.querySelector(".arrow-down-features");
const arrowDownCompany = document.querySelector(".arrow-down-company");
const company = document.getElementById("company");
const companyDropdown = document.querySelector(".company-dropdown");

/* OVERLAY CONTROL*/

hamburger.addEventListener('click',() =>{
    white_overlay.classList.add("show");
    grey_overlay.classList.add("show")
    menu.classList.add("show");
    cross.classList.add("show");
});

cross.addEventListener("click",() =>{
    white_overlay.classList.remove("show");
    grey_overlay.classList.remove("show");
    menu.classList.remove("show");
    cross.classList.remove("show");

});


features.addEventListener("click", () =>{
    featuresDropdown.classList.toggle("show");
    arrowDownFeatures.classList.toggle("active");
});

company.addEventListener("click", () =>{
    companyDropdown.classList.toggle("show");
    arrowDownCompany.classList.toggle("active");
});


// Close the Features dropdown menu if the user clicks outside of it

window.addEventListener('mouseup', function(event){
	var dropFeatures = document.querySelector('.features-dropdown');
    var btnFeatures = document.getElementById("features");
	if (event.target != dropFeatures && event.target != btnFeatures){
        dropFeatures.classList.remove ('show');
    }
});

// Close the Company dropdown menu if the user clicks outside of it


window.addEventListener('mouseup', function(event){
	var dropCompany = document.querySelector('.company-dropdown');
    var btnCompany = document.getElementById("company");
	if (event.target != dropCompany && event.target != btnCompany){
        dropCompany.classList.remove ('show');
    }
});
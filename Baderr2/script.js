function toggleMenu() {
	console.log("Toggle menu function called");
    var menu = document.getElementById("main-menu");
    var burgerIcon = document.querySelector('.burger-icon');
    menu.classList.toggle("active");
    burgerIcon.classList.toggle("active");
}

// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// script.js

// Function to add item to wishlist
function addToWishlist(button) {
    // Retrieve the parent product container
    var productContainer = button.parentElement;

    // Toggle a class to change the background color
    productContainer.classList.toggle('wishlist-added');

    // Get the product name
    var productName = productContainer.querySelector('h3').innerText;

    // Retrieve existing wishlist items from localStorage or initialize an empty array
    let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    // Add or remove the product from the wishlist items based on whether it was added or removed
    var index = wishlistItems.indexOf(productName);
    if (index === -1) {
        wishlistItems.push(productName);
    } else {
        wishlistItems.splice(index, 1);
    }

    // Save the updated wishlist items to localStorage
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

    // Alert the user that the product has been added to or removed from the wishlist (you can replace this with any other notification method)
    alert(productName + (index === -1 ? ' added to wishlist!' : ' removed from wishlist!'));
}


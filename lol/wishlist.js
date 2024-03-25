// wishlist.js

// Function to display wishlist items
function displayWishlist() {
    // Retrieve wishlist items from localStorage
    let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    // Get the wishlist container
    let wishlistContainer = document.getElementById('wishlist-container');

    // Clear any existing content
    wishlistContainer.innerHTML = '';

    // Loop through each wishlist item
    wishlistItems.forEach(function(productName) {
        // Create a div element for each item
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('wishlist-item');

        // Create an image element
        let imageSrc = getImageSrc(productName); // Get the image source based on the product name
        let img = document.createElement('img');
        img.src = imageSrc;
        img.alt = productName;

        // Create a paragraph element for the product name
        let productNamePara = document.createElement('p');
        productNamePara.textContent = productName;

        // Append the image and product name to the item div
        itemDiv.appendChild(img);
        itemDiv.appendChild(productNamePara);

        // Append the item div to the wishlist container
        wishlistContainer.appendChild(itemDiv);
    });
}

// Function to get the image source based on the product name
function getImageSrc(productName) {
    // Define a mapping of product names to image filenames
    let imageMap = {
        'Car': 'car.jpg',
        'Phone': 'phone.jpg',
        'House Mobile': 'house_mobile.jpg'
    };

    // Return the image filename based on the product name
    return imageMap[productName];
}

// Call the displayWishlist function when the page loads
displayWishlist();

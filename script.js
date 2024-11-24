// JavaScript for reservation system

// Simulated data: Availability for each time slot
// const availability = {
//     "6 PM": false,
//     "7 PM": true,
//     "8 PM": false,
//     "9 PM": true
//   };
  
//   // Add event listener to the "Check Availability" button
//   document.getElementById('checkAvailability').addEventListener('click', function() {
//     const selectedTime = document.getElementById('timeSlots').value;
//     const reservationStatus = document.getElementById('reservationStatus');
    
//     if (availability[selectedTime]) {
//       reservationStatus.textContent = `Table is available at ${selectedTime}.`;
//       reservationStatus.style.color = 'green';
//     } else {
//       reservationStatus.textContent = `Sorry, no tables available at ${selectedTime}.`;
//       reservationStatus.style.color = 'red';
//     }
//   });
  // Handle Reservation Form Submission
// document.getElementById('reservation-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const date = document.getElementById('date').value;
//     const time = document.getElementById('time').value;
//     const guests = document.getElementById('guests').value;

//     const confirmationMessage = `Thank you for your reservation, ${name}! You have reserved a table for ${guests} guests on ${date} at ${time}.`;
    
//     document.getElementById('confirmation-message').innerText = confirmationMessage;
//     document.getElementById('confirmation-message').classList.remove('hidden');
    
//     // Clear the form
//     document.getElementById('reservation-form').reset();
// });

// Simulated data: Availability for each time slot
// const availability = {
//     "6 PM": false,
//     "7 PM": true,
//     "8 PM": false,
//     "9 PM": true
//   };
  
  // Add event listener to the "Check Availability" button
  // document.getElementById('checkAvailability').addEventListener('click', function() {
  //   const selectedTime = document.getElementById('timeSlots').value;
  //   const numberOfSeats = document.getElementById('numberOfSeats').value;
  //   const reservationStatus = document.getElementById('reservationStatus');
    
    // Check availability
  //   if (availability[selectedTime]) {
  //     reservationStatus.textContent = `Table for ${numberOfSeats} is available at ${selectedTime}.`;
  //     reservationStatus.style.color = 'green';
  //   } else {
  //     reservationStatus.textContent = `Sorry, no tables available at ${selectedTime}.`;
  //     reservationStatus.style.color = 'red';
  //   }
  // });
// Reservation functionality (same as before)
// const availability = {
//   "6 PM": false,
//   "7 PM": true,
//   "8 PM": false,
//   "9 PM": true
// };

// Simulated data: Availability for each time slot


// Cart functionality (same as before)
// const cart = [];

// function addToCart(itemName, price) {
//   cart.push({ name: itemName, price: price });
//   updateCartDisplay();
// }

// function updateCartDisplay() {
//   const cartItems = document.getElementById('cartItems');
//   cartItems.innerHTML = ''; // Clear existing items
//   cart.forEach(item => {
//       const li = document.createElement('li');
//       li.innerText = `${item.name} - $${item.price}`;
//       cartItems.appendChild(li);
//   });
// }

// // Modal functionality (same as before)
// function showDetails(title, description) {
//   document.getElementById('modalTitle').innerText = title;
//   document.getElementById('modalDescription').innerText = description;
//   document.getElementById('itemModal').style.display = 'block';
// }

// function closeModal() {
//   document.getElementById('itemModal').style.display = 'none';
// }

// // Menu filtering functionality
// function filterMenu(category) {
//   const items = document.querySelectorAll('.menu-item');
//   items.forEach(item => {
//       if (category === 'all' || item.getAttribute('data-category') === category) {
//           item.style.display = 'inline-block';
//       } else {
//           item.style.display = 'none';
//       }
//   });
// }
// // Show only main courses
// document.getElementById('showMain').addEventListener('click', function() {
//     const items = document.querySelectorAll('.menu-item');
//     items.forEach(item => {
//         if (item.classList.contains('main-course')) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// });

// // Show only desserts
// document.getElementById('showDessert').addEventListener('click', function() {
//     const items = document.querySelectorAll('.menu-item');
//     items.forEach(item => {
//         if (item.classList.contains('dessert')) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// });

// // Detail button functionality
// document.querySelectorAll('.detail-button').forEach(button => {
//     button.addEventListener('click', function() {
//         alert('More details about this item will go here!');
//     });
// });
// // Special Discounts functionality
// const discounts = [
//   { name: 'Pizza', discount: '20%' },
//   { name: 'Burger', discount: '15%' },
//   { name: 'Pasta', discount: '10%' }
// ];




// // Initialize Discounts and Events on page load
// window.onload = function() {
//   displayDiscounts();
//   displayEvents();
//   // Optionally, refresh discounts at random intervals
//   setInterval(displayDiscounts, 10000); // Update discounts every 10 seconds
// };


      



    const availability = {
        // Sample data for reserved times
        '2024-11-10': ['18:00', '19:00', '20:00'], // Dates and times already booked
        '2024-11-11': ['19:00'], // Example for another date
    };

    document.getElementById('reservation-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        // Check availability
        if (isAvailable(date, time)) {
            // Display confirmation
            alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been confirmed.`);
            // Optionally, reset the form
            this.reset();
            document.getElementById('availability-message').textContent = ''; // Clear availability message
        } else {
            alert(`Sorry, ${name}. The selected time of ${time} on ${date} is not available. Please choose another time.`);
        }
    });

    // Function to check availability
    function isAvailable(date, time) {
        if (availability[date] && availability[date].includes(time)) {
            return false; // Time is booked
        }
        return true; // Time is available
    }

    // Event listeners for date and time to check availability on selection
    document.getElementById('date').addEventListener('change', checkAvailability);
    document.getElementById('time').addEventListener('change', checkAvailability);

    function checkAvailability() {
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const availabilityMessage = document.getElementById('availability-message');

        if (date && time) {
            if (isAvailable(date, time)) {
                availabilityMessage.textContent = 'This time is available for reservation.';
                availabilityMessage.style.color = 'green';
            } else {
                availabilityMessage.textContent = 'This time is already booked. Please choose another time.';
                availabilityMessage.style.color = 'red';
            }
        } else {
            availabilityMessage.textContent = ''; // Clear message if date/time is not selected
        }
    }










// Reservation availability data
// const availability = {
//   "6 PM": false,
//   "7 PM": true,
//   "8 PM": false,
//   "9 PM": true
// };

// Menu filter functionality
const menuButtons = document.querySelectorAll('#menuButtons button');
const menuItems = document.querySelectorAll('.menu-item');

// Function to filter menu items based on category
function filterMenu(category) {
  menuItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
}

// Event listeners for menu buttons
menuButtons.forEach(button => {
  button.addEventListener('click', () => {
      const category = button.getAttribute('data-filter');
      filterMenu(category);
  });
});

// Cart functionality
let cart = [];
const cartItemsList = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

// Function to add item to cart
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: parseFloat(itemPrice) });
  renderCart();
}

// Function to render cart items and total
function renderCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsList.appendChild(li);
      total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
}

// Event listeners for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
      const itemName = button.getAttribute('data-name');
      const itemPrice = button.getAttribute('data-price');
      addToCart(itemName, itemPrice);
  });
});

// Reservation availability checker
// document.getElementById('checkAvailability').addEventListener('click', function() {
//   const selectedTime = document.getElementById('timeSlots').value;
//   const reservationStatus = document.getElementById('reservationStatus');
  
//   if (availability[selectedTime]) {
//       reservationStatus.textContent = `Table is available at ${selectedTime}.`;
//       reservationStatus.style.color = 'green';
//   } else {
//       reservationStatus.textContent = `Sorry, no tables available at ${selectedTime}.`;
//       reservationStatus.style.color = 'red';
//   }
// });
let votes = {
  dish1: 0,
  dish2: 0,
  dish3: 0,
  drink1: 0,
  drink2: 0,
  drink3: 0,
  dessert1: 0,
  dessert2: 0,
  dessert3: 0
};
// Function to handle voting
function vote(dishId) {
  // Check if the dishId exists in the votes object to avoid undefined errors
  if (votes.hasOwnProperty(dishId)) {
    // Increment vote count for the selected dish
    votes[dishId] += 1;

    // Update the vote count in the HTML if the element exists
    const voteCountElement = document.getElementById(dishId + "-votes");
    if (voteCountElement) {
      voteCountElement.innerText = `Votes: ${votes[dishId]}`;
    } else {
      console.error(`Element with ID ${dishId}-votes not found.`);
    }

    // Trigger confetti animation
    triggerConfetti();
  } else {
    console.error(`Dish ID ${dishId} does not exist in the votes object.`);
  }
}

// Confetti animation function
function triggerConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  document.body.appendChild(confetti);

  // Randomize confetti properties
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDuration = Math.random() * 2 + 3 + 's';

  // Remove confetti after animation
  setTimeout(() => {
    confetti.remove();
  }, 5000);
}
function vote(dishId) {
  // Increment vote count for the selected dish
  votes[dishId] += 1;

  // Update the vote count in the HTML if the element exists
  const voteCountElement = document.getElementById(dishId + "-votes");
  if (voteCountElement) {
    voteCountElement.innerText = `Votes: ${votes[dishId]}`;
  }

  // Trigger confetti animation
  triggerConfetti();

  // Trigger background color animation
  animatePollSection();
}

function animatePollSection() {
  const pollSection = document.getElementById("poll-section");
  pollSection.classList.add("animate-bg");

  // Remove animation class after 1 second to reset
  setTimeout(() => {
    pollSection.classList.remove("animate-bg");
  }, 1000);
}


// Function to handle voting
function vote(dishId) {
  // Check if the dishId exists in the votes object
  if (votes.hasOwnProperty(dishId)) {
    // Increment vote count for the selected dish
    votes[dishId] += 1;

    // Update the vote count in the HTML
    const voteCountElement = document.getElementById(dishId + "-votes");
    if (voteCountElement) {
      voteCountElement.innerText = `Votes: ${votes[dishId]}`;
    }

    // Trigger confetti animation
    triggerConfetti();

    // Trigger background color animation
    animatePollSection();
  } else {
    console.error(`Dish ID ${dishId} does not exist in the votes object.`);
  }
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const inquiryType = document.getElementById('inquiryType').value;
  const preferredDate = document.getElementById('preferredDate').value;
  const preferredTime = document.getElementById('preferredTime').value;
  const message = document.getElementById('message').value;
  const formStatus = document.getElementById('formStatus');

  // Basic validation checks
  if (!name || !email || !phone || !inquiryType || !preferredDate || !preferredTime || !message) {
    formStatus.textContent = "Please fill out all fields.";
    formStatus.style.color = 'red';
    return;
  }

  // Show success message (simulate submission)
  formStatus.textContent = "Thank you, " + name + "! Your message has been received. We will contact you soon.";
  formStatus.style.color = 'green';

  // Clear the form after submission
  document.getElementById('contactForm').reset();
});


// Object to store votes for each dish
// Object to store votes for each dish












  
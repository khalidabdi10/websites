// Select the search icon and input
const searchIcon = document.querySelector('.material-symbols-outlined');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        // Do something with the query, e.g., display it
        alert(`Searching for: ${query}`);
        // Or redirect, call an API, etc.
    } else {
        alert('Please enter a search term.');
    }
});

// Optional: handle Enter key press in the input
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchIcon.click(); // Trigger the same as clicking the icon
    }
});
document.getElementById('searchNeeds').addEventListener('click', function() {
  const bedrooms = document.getElementById('bedrooms').value;
  const priceMin = document.getElementById('priceMin').value;
  const priceMax = document.getElementById('priceMax').value;
  const location = document.getElementById('location').value;

  alert(`Searching with:\nBedrooms: ${bedrooms}\nPrice Range: ${priceMin} - ${priceMax}\nLocation: ${location}`);
  // Here you can implement actual search/filter logic
});
const houses = [
  { label: '1 Bedroom House', imageUrl: 'https://via.placeholder.com/300x200?text=1+Bedroom' },
  { label: '2 Bedroom House', imageUrl: 'https://via.placeholder.com/300x200?text=2+Bedrooms' },
  { label: '3 Bedroom House', imageUrl: 'https://via.placeholder.com/300x200?text=3+Bedrooms' },
  // Add more as needed
];
document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'login.html'; // or your login page URL
  });
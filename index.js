function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json())      // Parse response JSON
    .then((data) => {
      renderBooks(data);                      // Call renderBooks with the data
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
    });
}


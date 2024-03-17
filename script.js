const data = [
    {
      "title": "Card 1",
      "image": "https://via.placeholder.com/300"
    },
    {
      "title": "Card 2",
      "image": "https://via.placeholder.com/300"
    },
    {
      "title": "Card 3",
      "image": "https://via.placeholder.com/300"
    },
    {
      "title": "Card 4",
      "image": "https://via.placeholder.com/300"
    },
    {
      "title": "Card 5",
      "image": "https://via.placeholder.com/300"
    },
    {
      "title": "Card 6",
      "image": "https://via.placeholder.com/300"
    },
  ]
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("cardContainer");
    // Loop through the data and create cards
    data.forEach(cardData => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const image = document.createElement("img");
      image.src = cardData.image;
      image.alt = cardData.title;
  
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
  
      const title = document.createElement("h2");
      title.classList.add("card-title");
      title.textContent = cardData.title;
  
      cardContent.appendChild(title);
      card.appendChild(image);
      card.appendChild(cardContent);
  
      cardContainer.appendChild(card);
    });
  
  });
  
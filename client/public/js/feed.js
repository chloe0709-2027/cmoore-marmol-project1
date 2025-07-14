function createFeedItem(title, body, linkUrl, imageUrl) {
  return {
    title: title,
    body: body,
    linkUrl: linkUrl,
    imageUrl: imageUrl
  };
}
const currentStories = [
    { 
        title: "My Melody getting her education??",
        body: "My Meldoy was found ona  university campus, Marist univercity.",
        linkUrl: "https://www.marist.edu/news/campus-reopens",
        imageUrl: "https://i.pinimg.com/564x/c4/8a/86/c48a8637251050cc9558f6c414dc9041.jpg"
    },
    {
        title: "Pochocco is an educational superweapon!!",
        body: "Pochacco has recently outted as a Marist alumi.",
        linkUrl: "https://www.marist.edu/news/alumni-nasa",
        imageUrl: "https://www.pngall.com/wp-content/uploads/15/Pochacco-PNG-Photos.webp"
    },
    {
        title: "Pompompurin educating the youth",
        body: "Pompompurin is hosting a career fair in Marist University.",
        linkUrl: "https://www.marist.edu/events/career-fair",
        imageUrl: "https://cdn.sanriowiki.com/8/81/Pompompurin.png"
    }
];

function displayItem(feedItem) {
  const newsfeed = document.getElementById("newsfeed");
  if (newsfeed) {
    newsfeed.innerHTML += `
      <div class="feed-item" style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
        <img src="${feedItem.imageUrl}" alt="${feedItem.title}" style="width: 90px; height: auto;">
        <div>
          <h3>${feedItem.title}</h3>
          <p>${feedItem.body}</p>
          <a href="${feedItem.linkUrl}" target="_blank">Read more</a>
        </div>
      </div>
      <hr>
    `;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  currentStories.forEach(displayItem);
  const portalButton = document.getElementById("portal_button");
  if (portalButton) {
    portalButton.addEventListener("click", function () {
      goToLocation("http://my.marist.edu");
    });
  }
});
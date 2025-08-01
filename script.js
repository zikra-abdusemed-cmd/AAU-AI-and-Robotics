// Event database (you can add more here)
const eventData = {
  "vex-opening": {
    title: "VEX Opening Ceremony",
    description: "The opening ceremony aimed to create awareness about the rules and objectives of the VEX competition...",
    image: "./images/events_section/img 4.jpg",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_1",
    sponsors: [
      "./images/sponsors/sponsor1.png",
      "./images/sponsors/sponsor2.png",
      "./images/sponsors/sponsor3.png"
    ]
  },
  "ai-in-robotics": {
    title: "AI in Robotics",
    description: "A workshop focused on AI-powered automation and decision-making in robots...",
    image: "./images/events_section/img 3.jpg",
    youtube: "",
    sponsors: []
  },
  "vex-game": {
    title: "VEX Game Competition",
    description: "The first VEX Robotics competition at AAU CTBE campus. Students showcased their creativity in building bots...",
    image: "./images/events_section/img 2.jpg",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_2",
    sponsors: [
      "./images/sponsors/sponsor4.png",
      "./images/sponsors/sponsor2.png"
    ]
  },
  "closing-ceremony": {
    title: "Closing Ceremony",
    description: "The grand closing ceremony at the Science Museum brought together students, mentors, and partners...",
    image: "./images/events_section/img 1.jpg",
    youtube: "",
    sponsors: []
  }
};
function showEventDetails(eventId) {
  const event = eventData[eventId];
  if (!event) return;

  // Show the detail section, hide the main events section
  document.getElementById("events").classList.add("hidden");
  document.getElementById("event-detail").classList.remove("hidden");

  // Fill in event content
  document.getElementById("event-title").textContent = event.title;
  document.getElementById("event-description").textContent = event.description;
  document.getElementById("event-image").src = event.image;
  document.getElementById("event-image").alt = event.title;

  // YouTube video
  const videoSection = document.getElementById("event-video-section");
  const videoContainer = document.getElementById("event-video");
  if (event.youtube) {
    videoSection.classList.remove("hidden");
    videoContainer.innerHTML = `<iframe src="${event.youtube}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    videoSection.classList.add("hidden");
    videoContainer.innerHTML = "";
  }

  // Sponsors
  const sponsorSection = document.getElementById("event-sponsors-section");
  const sponsorContainer = document.getElementById("sponsor-logos");
  if (event.sponsors && event.sponsors.length > 0) {
    sponsorSection.classList.remove("hidden");
    sponsorContainer.innerHTML = event.sponsors
      .map(src => `<div class="sponsor-circle"><img src="${src}" alt="Sponsor Logo" /></div>`)
      .join("");
  } else {
    sponsorSection.classList.add("hidden");
    sponsorContainer.innerHTML = "";
  }
}

function goBack() {
  document.getElementById("event-detail").classList.add("hidden");
  document.getElementById("events").classList.remove("hidden");
}

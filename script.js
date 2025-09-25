// ======== SECTION NAVIGATION ========
function showSection(sectionId) {
  const sections = document.querySelectorAll(".card");
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");

  // Highlight active button
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach(btn => btn.classList.remove("active-btn"));
  event.target.classList.add("active-btn");
}

// ======== SEARCH FUNCTION ========
const people = [
  "Lokesh - AI Dept",
  "Prem - CSE Dept",
  "Thiru - ECE Dept",
  "Kumar - IT Dept",
  "Anitha - MBA Dept",
  "Deepa - Civil Dept"
];

function searchPeople() {
  let input = document.getElementById("search-input").value.toLowerCase();
  let results = document.getElementById("search-results");
  results.innerHTML = "";

  if (input.length === 0) return;

  let filtered = people.filter(p => p.toLowerCase().includes(input));
  
  if (filtered.length === 0) {
    results.innerHTML = "<li>No results found ❌</li>";
  } else {
    filtered.forEach(p => {
      let li = document.createElement("li");
      li.textContent = p;
      results.appendChild(li);
    });
  }
}

// ======== PRELOADED DATA ========
const notifications = [
  "Exam timetable released 📅",
  "Placement drive next week 💼",
  "Cultural Fest registrations open 🎉",
  "Holiday on Friday 🛑"
];

const events = [
  "Tech Hackathon - 15th Oct",
  "AI Workshop - 20th Oct",
  "Sports Meet - 25th Oct",
  "Robotics Competition - 30th Oct"
];

const resumes = ["Classic Resume", "Modern Resume", "Creative Resume"];
const internships = ["Google Internship", "Microsoft Internship", "Startup Intern"];
const clubs = ["Coders Club","Readers Club","Library Club","NDLI Club","Gamers Club","OD Club","Light Footers","Music Academy"];
const portfolios = ["Thiru Lokeshwaran - AI Prompt Engineer","Gokulan - App Developer","Kishore - Data analyst","Chotta Bheem - Full Stack Developer"];

// ======== LOAD CONTENT ON PAGE LOAD ========
window.onload = function() {
  populateList("notification-list", notifications);
  populateList("event-list", events);
  populateList("resume-list", resumes);
  populateList("internship-list", internships);
  populateList("club-list", clubs);
  populateList("portfolio-list", portfolios);
};

// Helper function to populate lists
function populateList(listId, items) {
  let ul = document.getElementById(listId);
  ul.innerHTML = "";
  items.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// ======== FEEDBACK SYSTEM ========
function submitFeedback() {
  let text = document.getElementById("feedback-text").value;
  if (text.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = "✔ " + text;
    document.getElementById("feedback-list").appendChild(li);
    document.getElementById("feedback-text").value = "";
  } else {
    alert("Please enter feedback before submitting!");
  }
}

// ======== CHAT / FORUM ========
function sendChat() {
  let input = document.getElementById("chat-input").value;
  if (input.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = "👤 " + input;
    document.getElementById("chat-list").appendChild(li);
    document.getElementById("chat-input").value = "";

    // Auto-scroll to latest message
    let chatBox = document.getElementById("chat-list");
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// ======== EVENT REGISTRATION ========
function registerEvent() {
  let event = document.getElementById("event-name").value;
  let participant = document.getElementById("participant-name").value;
  if (event.trim() !== "" && participant.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = `✅ ${participant} registered for ${event}`;
    document.getElementById("registration-list").appendChild(li);

    document.getElementById("event-name").value = "";
    document.getElementById("participant-name").value = "";
  } else {
    alert("Please enter both Event Name and Your Name!");
  }
}

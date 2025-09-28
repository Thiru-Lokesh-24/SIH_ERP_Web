// ======== SECTION NAVIGATION ========
function showSection(sectionId, event) {
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
  "Thiru Lokeshwaran - [AI & DS Dept] -8778329363",
  "Gokulan - [BioTech Dept] - 9090909090",
  "Tony Starc - [AIML Dept] - 9123456780",
  "Tobey - [AI & DS Dept] -8778329363",
  "Thookuthurai - [BioTech Dept] - 9090909090",
  "Maatu Ravi - [CSE Dept] - 8080808080",
  "Harry Poter - [FoodTech Dept] - 7070707070",
  "Sowmiya - [Civil Dept] - 9876543210",
  "Pushparaj - [Textile Dept] - 9123456780",
  "Saniyan Sakada - [AI & DS Dept] - 9123456780",
  "Pattasu Balu - [AI & DS Dept] - 9123456780",
  "Shin Chan - [EEE Dept] - 9123456780",
  "Kaipulla - [AI & DS Dept] - 9123456780",
  "Arif - [CSE Dept] - 8080808080",
  "Kiruthick - [FoodTech Dept] - 7070707070",
  "Anirudh - [Civil Dept] - 9876543210",
  "Pushparaj - [Textile Dept] - 9123456780",
  "Loki - [Mech Dept] - 9123456780",
  "Pre Beyonder - [ECE Dept] - 9123456780",
  "Thor - [EEE Dept] - 9123456780"
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

// ======== AUTH TOGGLE ========
function toggleAuth(type) {
  if (type === "login") {
    document.getElementById("Login").classList.add("active");
    document.getElementById("Register").classList.remove("active");
  } else {
    document.getElementById("Register").classList.add("active");
    document.getElementById("Login").classList.remove("active");
  }
}

// ======== LOGIN FUNCTION ========
function loginUser() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields!");
    return;
  }

  alert("✅ Login Successful for " + email);
  showSection("dashboard"); // Redirect to dashboard
}

// ======== REGISTER FUNCTION ========
function registerUser() {
  let name = document.getElementById("reg-name").value;
  let email = document.getElementById("reg-email").value;
  let password = document.getElementById("reg-password").value;

  if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields!");
    return;
  }

  alert("🎉 Registered Successfully as " + name);
  toggleAuth("login"); // Switch to login after register
}
function processPayment() {
  let name = document.getElementById("payer-name").value;
  let email = document.getElementById("payer-email").value;
  let amount = document.getElementById("payment-amount").value;
  let method = document.getElementById("payment-method").value;

  if (!name || !email || !amount || !method) {
    alert("⚠️ Please fill all details before making payment.");
    return;
  }

  // For demo – assume payment successful
  alert("✅ Payment Successful!");

  // Fill receipt
  document.getElementById("r-name").textContent = name;
  document.getElementById("r-email").textContent = email;
  document.getElementById("r-amount").textContent = amount;
  document.getElementById("r-method").textContent = method.toUpperCase();
  document.getElementById("r-date").textContent = new Date().toLocaleString();

  // Show receipt
  document.getElementById("receipt").style.display = "block";
}
function viewAttendance() {
  let name = document.getElementById("student-name").value.trim();
  if (!name) {
    alert("⚠️ Please enter your name to view attendance.");
    return;
  }

  let data = JSON.parse(localStorage.getItem("attendance")) || {};
  let student = data[name];

  if (!student) {
    alert("❌ No attendance found for this student.");
    return;
  }

  document.getElementById("a-name").textContent = name;
  document.getElementById("a-days").textContent = student.days;
  document.getElementById("a-streak").textContent = student.streak;
  document.getElementById("a-last").textContent = student.lastDate;

  document.getElementById("attendance-record").style.display = "block";
}

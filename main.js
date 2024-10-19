// Dummy data for mentors 
const mentors = [
  {
    id: 1,
    name: "Dr. Birmohan Singh",
    Educational_Qualification: "Ph.D., M.E",
    Phone : "+91-1672-253208",
    Email: "birmohansingh@sliet.ac.in , birmohans@gmail.com",
    availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"]
  },
  {
    id: 2,
    name: "Dr. Damanpreet Singh",
    Educational_Qualification: "Ph.D., M.Tech, B.Tech.",
    Phone : "+91-1672-253210",
    Email: "damanpreets@sliet.ac.in",
    availableSlots: ["11:00 AM", "3:00 PM", "5:00 PM"]
  },
  {
    id: 3,
    name: "Dr. Major Singh Goraya",
    Educational_Qualification: "Ph.D., M.Tech., B.Tech.",
    Phone : "01672-253212",
    Email: "mjrsingh@yahoo.com",
    availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
  },
  {
    id:4,
    name: "Dr. Manoj Sachan",
    Educational_Qualification: "B.Tech(Computer Science) , M.E(Computer Science), Ph.D (Computer Science & Engineering)",
    Phone : "+91-1672-253214",
    Email: "manojsachan@sliet.ac.in, manojsachan@gmail.com",
    availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
  },
  {
    id: 5,
    name: "Dr. Gurjinder Kaur",
    Educational_Qualification: "B.E. Kyrgyz Technical University, Bishkek, M.S. BITS, Pilani, Ph.D SLIET, Longowal",
    Phone: "+91-1672-253326",
    Email: "gurjinder13@yahoo.com",
    availableSlots: ["10:00 AM", "1:00 PM", "4:00 PM"]
  },
  {
    id: 6,
    name: "Dr. Amar Nath",
    Educational_Qualification: "Ph.D. in CSE from IIT Roorkee, M. Tech. in CSE from NIT Rourkela, B. Tech. in CSE from BIET Jhansi",
    Phone: "01672-253610",
    Email: "amarnath@sliet.ac.in",
    availableSlots: ["9:00 AM", "12:00 PM", "3:00 PM"]
  },
  {
    id: 7,
    name: "Dr. Jagdeep Singh",
    Educational_Qualification: "Ph.D. in Routing in Delay-Tolerant Opportunistic Networks from University of Delhi, M. Tech, B. Tech",
    Phone: "01672-253320",
    Email: "jagdeep@sliet.ac.in, jagdeepknit@gmail.com",
    availableSlots: ["10:30 AM", "1:30 PM", "5:00 PM"]
  },
  {
    id: 8,
    name: "Dr. Manminder Singh",
    Educational_Qualification: "B.Tech (Computer Science & Engineering), M.Tech (Computer Science & Engineering), Ph. D (Computer Science & Engineering)",
    Phone: "+91-01672-253328",
    Email: "manminderldh@gmail.com, manmindersingh@sliet.ac.in",
    availableSlots: ["9:30 AM", "11:30 AM", "2:30 PM"]
  },
  {
    id: 9,
    name: "Dr. Preetpal Kaur Buttar",
    Educational_Qualification: "Ph.D. (Computer Science & Engineering)",
    Phone: "01672-253614",
    Email: "preetpal@sliet.ac.in",
    availableSlots: ["10:00 AM", "12:00 PM", "4:00 PM"]
  },
  {
    id: 10,
    name: "Dr. Tajinder Singh",
    Educational_Qualification: "Ph.D. in Machine Learning Based Text Mining in Social Media from NIT Hamirpur",
    Phone: "+91-6283963279",
    Email: "tajindersingh@sliet.ac.in",
    availableSlots: ["11:00 AM", "2:00 PM", "5:00 PM"]
  },
  {
    id: 11,
    name: "Dr. Utkarsh",
    Educational_Qualification: "Ph.D., M.Tech, B.Tech from Jawaharlal Nehru University, New Delhi",
    Phone: "N/A",
    Email: "N/A",
    availableSlots: ["9:00 AM", "12:00 PM", "3:00 PM"]
  },
  {
    id: 12,
    name: "Dr. Vinod Kumar Verma",
    Educational_Qualification: "Ph.D. (Computer Science and Engineering)",
    Phone: "+91-1672-253218",
    Email: "vinod5881@gmail.com",
    availableSlots: ["8:00 AM", "11:00 AM", "2:00 PM"]
  },
  {
    id: 13,
    name: "Jaspal Singh",
    Educational_Qualification: "M.E. (CSE & IT), Pursuing PhD. in Cloud Computing",
    Phone: "01672-253327",
    Email: "safrisoft@yahoo.com, jaspalsingh@sliet.ac.in",
    availableSlots: ["9:30 AM", "1:30 PM", "4:30 PM"]
  },
  {
    id: 14,
    name: "Rahul Gautam",
    Educational_Qualification: "Ph.D. pursuing, M.Tech (Computer Science and Applications) from Thapar University, Patiala, B.Tech (Computer Science and Info. Technology)",
    Phone: "+91-1672-253612",
    Email: "rahulgautam@sliet.ac.in",
    availableSlots: ["10:00 AM", "1:00 PM", "3:00 PM"]
  },
  {
    id: 15,
    name: "Dr. Jatinder Pal Singh",
    Educational_Qualification: "B.Tech, M.Tech, Ph.D. (Computer Science and Engineering)",
    Phone: "N/A",
    Email: "sachdeva.jp@gmail.com, jatinderpalsingh@sliet.ac.in",
    availableSlots: ["11:30 AM", "2:30 PM", "5:00 PM"]
  },
  {
    id: 16,
    name: "Sukhpreet Singh",
    Educational_Qualification: "B.Tech, M.Tech, Ph.D. (Pursuing)",
    Phone: "N/A",
    Email: "sukhpreet.manshahia@gmail.com",
    availableSlots: ["9:00 AM", "1:00 PM", "4:00 PM"]
  }
];

// Constants for pagination
const mentorsPerPage = 8; // Maximum mentors per page
let currentPage = 0; // Start on the first page

// Function to create mentor cards
function createMentorCards() {
  const mentorList = document.getElementById('mentor-list');
  mentorList.innerHTML = ''; // Clear previous cards

  const start = currentPage * mentorsPerPage; // Calculate the starting index
  const end = Math.min(start + mentorsPerPage, mentors.length); // Calculate the ending index

  // Generate mentor cards for the current page
  mentors.slice(start, end).forEach(mentor => {
    const card = document.createElement('div');
    card.className = 'mentor-card';
    card.innerHTML = `
      <h3>${mentor.name}</h3>
      <p><strong>Educational Qualification:</strong> ${mentor.Educational_Qualification}</p>
      <p><strong>Phone:</strong> ${mentor.Phone}</p>
      <p><strong>Email:</strong> ${mentor.Email}</p>
    `;
    
    // Add event listener to direct to #booking when a card is clicked
    card.addEventListener('click', () => {
      window.location.href = '#booking'; // Navigate to the booking section
    });

    mentorList.appendChild(card); // Append the card to the mentor list
  });
}

// Function to handle arrow clicks
function handleArrowClick(direction) {
  // Adjust the currentPage based on direction
  if (direction === 'next' && (currentPage + 1) * mentorsPerPage < mentors.length) {
    currentPage++;
  } else if (direction === 'prev' && currentPage > 0) {
    currentPage--;
  }
  createMentorCards(); // Recreate the cards after changing the page
}

// Function to populate mentor select options
function populateMentorSelect() {
  const mentorSelect = document.getElementById('mentor-select');
  mentorSelect.innerHTML = '<option value="">Select a mentor</option>';

  mentors.forEach(mentor => {
    const option = document.createElement('option');
    option.value = mentor.id;
    option.textContent = mentor.name;
    mentorSelect.appendChild(option);
  });
}

// Function to update time slots based on selected mentor
function updateTimeSlots() {
  const mentorId = document.getElementById('mentor-select').value;
  const timeSelect = document.getElementById('time-select');
  timeSelect.innerHTML = '<option value="">Select a time slot</option>';

  if (mentorId) {
    const mentor = mentors.find(m => m.id === parseInt(mentorId));
    mentor.availableSlots.forEach(slot => {
      const option = document.createElement('option');
      option.value = slot;
      option.textContent = slot;
      timeSelect.appendChild(option);
    });
  }
}

// Function to handle booking form submission
function handleBookingSubmit(event) {
  event.preventDefault();
  const mentorId = document.getElementById('mentor-select').value;
  const date = document.getElementById('date-select').value;
  const time = document.getElementById('time-select').value;
  const studentName = document.getElementById('student-name').value;
  const studentEmail = document.getElementById('student-email').value;

  // In a real application, you would send this data to a server
  console.log('Booking submitted:', { mentorId, date, time, studentName, studentEmail });

  // Show a confirmation message
  alert('Your session has been booked successfully!');

  // Reset the form
  event.target.reset();
}

// Function to toggle chat interface
function toggleChatInterface() {
  const chatInterface = document.getElementById('chat-interface');
  chatInterface.classList.toggle('hidden');
}

// Function to add a message to the chat
function addChatMessage(message, isUser = true) {
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.className = `chat-bubble ${isUser ? 'user' : 'mentor'}`;
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle chat form submission
function handleChatSubmit(event) {
  event.preventDefault();
  const chatInput = document.getElementById('chat-input');
  const message = chatInput.value.trim();
  if (message) {
    addChatMessage(message);
    chatInput.value = '';
    setTimeout(() => {
      addChatMessage("Thank you for your message. A mentor will respond shortly.", false);
    }, 1000);
  }
}

// Initialize the application
function init() {
  createMentorCards();
  populateMentorSelect();
  createMentorCards();

  // Event listeners
  document.getElementById('left-arrow').addEventListener('click', () => handleArrowClick('prev'));
  document.getElementById('right-arrow').addEventListener('click', () => handleArrowClick('next'));
  document.getElementById('mentor-select').addEventListener('change', updateTimeSlots);
  document.getElementById('booking-form').addEventListener('submit', handleBookingSubmit);
  document.getElementById('chat-icon').addEventListener('click', toggleChatInterface);
  document.getElementById('close-chat').addEventListener('click', toggleChatInterface);
  document.getElementById('chat-form').addEventListener('submit', handleChatSubmit);
}

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
document.addEventListener("DOMContentLoaded", function () {
  // The full content to be dynamically added with clear spacing and readability
  const fullContent = `
    <p>
      The Department of Computer Science & Engineering (CSE) is dedicated to ensuring great careers for its students. For us, this means forging deeper industry linkages than ever before, creating a research culture from day one, and ensuring seamless education using the best technology available anywhere.
    </p>
    <p>
      The excellent infrastructure, teaching faculty of the best kind of the Department ensures quality education such as interaction among students, parents, and staff. Along with a Training and Placement Cell, we ensure a bright future for our students.
    </p>
    <p>
      We strongly encourage innovation in research, in teaching, and in service to the profession, the local community, and industry. Our faculty and students constantly strive to excel and advance the state of the art in Computer Science and Engineering.
    </p>
    <p>
      I invite you to be part of our efforts as we propel the Department of Computer Science & Engineering to ever-greater heights.
    </p>
    <p>
      In closing, I wish all the students and faculty a good academic career.
    </p>
    <p><strong>Sincerely, and with best wishes,<br>Prof. Birmohan Singh</strong></p>
  `;

  // Reference to the content and button
  const infoContent = document.getElementById("info-content");
  const toggleBtn = document.getElementById("toggle-info-btn");

  // Load the initial content (first 200 characters with ellipsis)
  infoContent.innerHTML = fullContent.substring(0, 200) + "...";

  // Toggle function for expanding and collapsing content
  toggleBtn.addEventListener("click", function () {
    if (infoContent.classList.contains("collapsed")) {
      // Expand content with full HTML
      infoContent.innerHTML = fullContent;
      infoContent.classList.remove("collapsed");
      infoContent.classList.add("expanded");
      toggleBtn.textContent = "Read Less";
    } else {
      // Collapse content
      infoContent.innerHTML = fullContent.substring(0, 200) + "...";
      infoContent.classList.remove("expanded");
      infoContent.classList.add("collapsed");
      toggleBtn.textContent = "Read More";
    }
  });
});
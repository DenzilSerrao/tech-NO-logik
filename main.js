// Mock data for mentors 
const mentors = [
  {
    id: 1,
    name: "Dr. Birmohan Singh",
    Educational_Qualification: "Computer Networks, Network Security",
    Phone : "+91-1672-253208",
    Email: "birmohansingh@sliet.ac.in , birmohans@gmail.com",
    availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"]
  },
  {
    id: 2,
    name: "Dr. Birmohan Singh",
    Educational_Qualification: "Computer Networks, Network Security",
    Phone : "+91-1672-253208",
    Email: "birmohansingh@sliet.ac.in , birmohans@gmail.com",
    availableSlots: ["11:00 AM", "3:00 PM", "5:00 PM"]
  },
  {
    id: 3,
    name: "Dr. Damanpreet Singh",
    Educational_Qualification: "Computer Networks, Network Security",
    Phone : "+91-1672-253208",
    Email: "birmohansingh@sliet.ac.in , birmohans@gmail.com",
    availableSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
  }
];

// Function to create mentor cards
function createMentorCards() {
  const mentorList = document.getElementById('mentor-list');
  mentorList.innerHTML = '';

  mentors.forEach(mentor => {
    const card = document.createElement('div');
    card.className = 'mentor-card';
    card.innerHTML = `
      <h3>${mentor.name}</h3>
      <p><strong>Educational_Qualification:</strong> ${mentor.Educational_Qualification}</p>
      <p><strong>Phone:</strong> ${mentor.Phone}</p>
      <p><strong>Email:</strong> ${mentor.Email}</p>
    `;
    mentorList.appendChild(card);
  });
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

  // Event listeners
  document.getElementById('mentor-select').addEventListener('change', updateTimeSlots);
  document.getElementById('booking-form').addEventListener('submit', handleBookingSubmit);
  document.getElementById('chat-icon').addEventListener('click', toggleChatInterface);
  document.getElementById('close-chat').addEventListener('click', toggleChatInterface);
  document.getElementById('chat-form').addEventListener('submit', handleChatSubmit);
}

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

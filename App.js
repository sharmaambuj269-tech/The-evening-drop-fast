// Chatbot functionality
function toggleChat() {
    const chatWindow = document.getElementById('chatbotWindow');
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, 'user');
        
        // Bot response
        setTimeout(() => {
            const botResponse = generateBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 1000);
        
        userInput.value = '';
    }
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `${sender}-message`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('order') || message.includes('track')) {
        return "To track your order, please share your order ID. Usually delivery takes 30-45 minutes.";
    } else if (message.includes('payment') || message.includes('upi')) {
        return "You can pay using UPI: upi_7428733852-2@ybl or cash on delivery.";
    } else if (message.includes('menu') || message.includes('food')) {
        return "We offer pizzas, burgers, Chinese food, and desserts. Check our main menu for details!";
    } else if (message.includes('contact') || message.includes('call')) {
        return "You can call us at: 7428733852 for urgent queries.";
    } else if (message.includes('time') || message.includes('delivery')) {
        return "We deliver from 6 PM to 11 PM every day. Delivery time: 30-45 minutes.";
    } else if (message.includes('price') || message.includes('cost')) {
        return "Pizza: ₹199-499, Burgers: ₹99-299, Chinese: ₹149-349. Check menu for details!";
    } else {
        return "I understand you're asking about: " + userMessage + ". For urgent queries, please call 7428733852.";
    }
}

// UPI Copy function
function copyUPI() {
    navigator.clipboard.writeText("upi_7428733852-2@ybl");
    alert("UPI ID copied to clipboard!");
}

// Menu functions
function showMenu(type) {
    let menuItems = [];
    if (type === 'pizza') {
        menuItems = ["Margherita Pizza - ₹199", "Pepperoni Pizza - ₹299", "Veg Supreme - ₹349"];
    } else if (type === 'burger') {
        menuItems = ["Classic Burger - ₹99", "Chicken Burger - ₹199", "Double Cheese - ₹249"];
    } else if (type === 'chicken') {
        menuItems = ["Fried Chicken - ₹149", "Chicken Wings - ₹299", "Grilled Chicken - ₹349"];
    }
    
    alert("Menu:\n" + menuItems.join("\n"));
}

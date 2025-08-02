# Graphical Password Authentication
A secure graphical password authentication system where users log in by clicking specific points on an image. This approach enhances security by resisting brute-force, keylogging, and shoulder surfing attacks while improving usability over traditional text passwords.
# 🚀 Features
**Graphical Password Login**: Users authenticate by clicking specific points on an image rather than typing a text password.

**Resistant to Attacks**: Enhanced protection against brute-force, keylogging, shoulder surfing, hidden camera, phishing, and spyware attacks.

**Usability**: More user-friendly and memorable than complex alphanumeric passwords.

**Account Security**: Notifies and blocks account after multiple failed attempts.

Password Reset: Secure password reset functionality via email notification.
# 📚 How It Works
**Registration** During registration, the user selects an image and chooses a pattern/click points as their graphical password.

**Storage**: Coordinates or selected images are securely stored .  

**Login** On login, the user clicks the same points in the same sequence to authenticate.

**Validation**: System compares login pattern with stored one and grants access. 

If max failed login attempts are reached, the account is blocked and the user is notified via email.

Passwords are never stored in plain text and user credentials are securely managed.
# Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

Database: MongoDB
## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/graphical-password.git
cd graphical-password
```
 ### 2. Setup Backend

 ```bash
cd server
npm install
npm start
```

 ### 3. Setup Frontend

 ```bash
cd client
npm install
npm start
```

---



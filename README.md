# 🚗 Aadishakti Tours & Travels

A modern, responsive, and full-stack Tours & Travels web application that allows users to book rides, explore vehicles, and contact the service owner easily.

---

## 🌟 Live Demo

🔗 https://your-live-link.vercel.app

---

## 📌 Features

* 🚘 Vehicle Showcase (Ertiga & Glanza)
* 🖼️ Image Gallery with preview
* 👨‍✈️ Driver Profile with 15+ years experience animation
* 📋 Booking Form with validation
* 📧 Email Notification using EmailJS
* 💬 WhatsApp Direct Contact Button
* 📱 Fully Responsive Design
* 🎬 Smooth Animations using Framer Motion

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Framer Motion
* Swiper.js
* React Icons

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Integrations

* EmailJS
* WhatsApp API (Click-to-chat)

---

## 📂 Project Structure

aadishakti-tours/
├── client/ (React Frontend)
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── services/
│
├── server/ (Backend)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── config/

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/aadishakti-tours.git
cd aadishakti-tours
```

---

### 2. Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

### 3. Setup Backend

```bash
cd server
npm install
node server.js
```

---

### 4. Setup MySQL Database

Create database:

```sql
CREATE DATABASE tours;
```

Create table:

```sql
CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(20),
  pickup VARCHAR(255),
  destination VARCHAR(255),
  date DATE,
  time TIME,
  vehicle VARCHAR(50),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 5. Environment Variables (.env)

```env
PORT=5000
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=tours
```

---

### 6. EmailJS Setup

* Create account on EmailJS
* Add Email Service
* Create Template
* Add Public Key in frontend

---

## 🚀 Deployment

### Frontend:

* Vercel

### Backend:

* Render

### Database:

* Railway / PlanetScale

---

## 📸 Screenshots

(Add screenshots here for better presentation)

---

## 📈 Future Improvements

* Admin Dashboard
* Payment Integration
* Booking History
* Google Maps Integration

---

## 👨‍💻 Author

**Sarthak Bhoknal**

---

## ⭐ Show Your Support

If you like this project, please ⭐ the repository!

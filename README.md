# ☕ Cafe POS Application

A modern, full‑featured **Cafe POS System** built with the MERN Stack to streamline restaurant operations, enhance customer experience, and manage orders, payments, inventory—with ease.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)

---

## Features

- **🍽️ Order Management**
  Real‑time order entry, status tracking (In Progress ▶️ Ready ▶️ and Completed), and live kitchen/FOH updates.

- **🪑 Table Reservations**
  Easy reservation handling—create, edit, view upcoming bookings, sync with orders.

- **🔐 Authentication & Roles**
  Secure login system with JWT, bcrypt; role‑based access (Admin, Cashier, Waiter) for safe operations.

- **💸 Payment Integration**  
  Seamless integration with Razorpay (or other gateways); accept online payments with automatic order status update.

- **🧾 Billing & Invoicing**  
  Generate detailed bills/invoices per order with item breakdown, taxes, totals; customizable template ready for printing or emailing.

---

## Tech Stack

| Category                   | Technology                    |
| -------------------------- | ----------------------------- |
| 🖥️ Frontend                | React.js, Redux, Tailwind CSS |
| 🔙 Backend                 | Node.js, Express.js           |
| 🗄️ Database                | MongoDB                       |
| 🔐 Authentication          | JWT, bcrypt                   |
| 💳 Payment Integration     | Razorpay                      |
| 📊 State Management        | Redux Toolkit                 |
| ⚡ Data Fetching & Caching | React Query                   |
| 🔗 APIs                    | RESTful APIs                  |

---

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```
git clone https://github.com/tayyab-004/Cafe-POS.git
```

### 2. Navigate to the Project Directory

```
cd Cafe‑POS
```

```
npm install
```

### 3. Install Dependencies

#### Frontend:

```
cd frontend
npm install
```

#### Backend:

```
cd backend
npm install
```

---

## Environment Variables

### Set Up Environment Variables

Create a `.env` file in the respective directories and add the following:

#### **Backend (`backend/.env`)**

```
PORT=8000
MONGODB_URI=
JWT_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
```

#### **Frontend (`frontend/.env`)**

```
VITE_BACKEND_URL=http://localhost:8000
VITE_RAZORPAY_KEY_ID=
```

### Start the Development Servers

Run frontend and backend concurrently:

```
npm start
```

- Frontend : `http://localhost:5173`
- Backend: `http://localhost:8000`

---

Thank you for using Cafe POS! If you have any questions or feedback, feel free to reach out. Happy Coding! 🚀

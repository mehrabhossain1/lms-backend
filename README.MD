# 🎓 Online Learning Management System (LMS)

An online education platform built with **Node.js, Express, and MongoDB** (MERN stack-ready), supporting both **admin** and **student** roles with secure authentication, role-based dashboards, course management, and review system.

## 🚀 Live Links

-   🔗 Frontend: [Coming soon]
-   🔗 Backend API: https://lms-backend-5lk5.onrender.com

---

## 🛠️ Tech Stack

-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB, Mongoose
-   **Authentication:** JWT, bcrypt
-   **Frontend:** Next.js, TailwindCSS, Zustand
-   **Other Tools:** CORS, dotenv, Postman (for testing)

---

## 🔐 User Roles

### 👨‍🎓 Student

-   Browse free & paid courses
-   Register/login securely
-   Enroll in paid courses after registration
-   Add course reviews
-   Access personal dashboard & track progress (planned)

### 👨‍💼 Admin

-   Login with admin credentials
-   Create, update, delete courses
-   View list of students & reviews (planned)
-   Access dashboard with statistics (planned)

---

## 📦 API Features

### ✅ Auth Routes (`/api/auth`)

-   `POST /register`: Register new user (role: `student` or `admin`)
-   `POST /login`: Authenticate & receive JWT token

### ✅ Course Routes (`/api/courses`)

-   `GET /`: List all courses (public)
-   `GET /:id`: Get single course
-   `POST /`: Add new course (admin only)
-   `PUT /:id`: Update course (admin only)
-   `DELETE /:id`: Delete course (admin only)

### ✅ Review Routes (`/api/reviews`)

-   `POST /:courseId`: Add review for course (student only)
-   `GET /:courseId`: Get reviews for course (public)

---

## 🧪 Postman Testing Guide

1. Register as admin and student
2. Login and store tokens
3. Test protected routes (courses/reviews)
4. View public course list and review data

---

## 📁 Project Structure

```bash
backend/
├── controllers/
│   ├── authController.js ✅
│   ├── courseController.js 🆕
│   ├── reviewController.js 🆕
│   └── userController.js
├── models/
│   ├── User.js ✅
│   ├── Course.js 🆕
│   ├── Review.js 🆕
│   └── Enrollment.js
├── routes/
│   ├── authRoutes.js ✅
│   ├── courseRoutes.js 🆕
│   ├── reviewRoutes.js 🆕
│   └── userRoutes.js
├── middlewares/
│   ├── authMiddleware.js ✅
│   ├── roleMiddleware.js ✅
├── utils/
│   └── errorHandler.js ✅
├── server.js ✅
└── .env ✅
```

<!-- ## 🚀 Installation

```bash
git clone https://github.com/mehrabhossain1/stock-sales-management-backend
cd stock-sales-management-backend
npm install
```

## ⚙️ Environment Variables

Create a .env file in the root with the following:

```bash
PORT=5000
JWT_SECRET=your_jwt_secret
CONNECTION_STRING=your_mongodb_connection_string
```

## ▶️ Run the Server

```bash
npm run dev
```

## 📁 Folder Structure

```bash
backend/
├── controllers/
│   ├── authController.js ✅
│   ├── courseController.js 🆕
│   ├── reviewController.js 🆕
│   └── userController.js
├── models/
│   ├── User.js ✅
│   ├── Course.js 🆕
│   ├── Review.js 🆕
│   └── Enrollment.js
├── routes/
│   ├── authRoutes.js ✅
│   ├── courseRoutes.js 🆕
│   ├── reviewRoutes.js 🆕
│   └── userRoutes.js
├── middlewares/
│   ├── authMiddleware.js ✅
│   ├── roleMiddleware.js ✅
├── utils/
│   └── errorHandler.js ✅
├── server.js ✅
└── .env ✅
``` -->

<!-- ## 🔄 API Endpoints

| Method | Endpoint   | Roles Allowed              | Description             |
| ------ | ---------- | -------------------------- | ----------------------- |
| GET    | `/admin`   | `admin`                    | Only Admin can access   |
| GET    | `/manager` | `admin`, `manager`         | Admin or Manager access |
| GET    | `/user`    | `admin`, `manager`, `user` | All roles can access    |

### 📦 Product Endpoints (`/api/products`) – Admin Only

| Method | Endpoint            | Roles Allowed | Description      |
| ------ | ------------------- | ------------- | ---------------- |
| GET    | `/api/products`     | `admin`       | Get all products |
| POST   | `/api/products`     | `admin`       | Create product   |
| PUT    | `/api/products/:id` | `admin`       | Update product   |
| DELETE | `/api/products/:id` | `admin`       | Delete product   |

### 💸 Sales Endpoints (`/api/sales`) – Admin and Manager

| Method | Endpoint          | Roles Allowed      | Description                          |
| ------ | ----------------- | ------------------ | ------------------------------------ |
| POST   | `/api/sales`      | `admin`, `manager` | Record a sale                        |
| GET    | `/api/sales`      | `admin`, `manager` | Get all sales (role-based filtering) |
| GET    | `/api/sales/dues` | `admin`, `manager` | Get all due (unpaid) sales           | -->

<!-- ## 🛡️ Middleware Usage

✅ `verifyToken`
Checks for a valid JWT in the request header.

✅ `authorizeRoles(...allowedRoles)`
Restricts route access to users with specified roles.

🔁 Sales are linked to `product` and `soldBy` using Mongoose `.populate()`
📉 Product stock is automatically reduced on each sale
🧾 Dues are calculated by `total - paid`

## 📦 Example Request (using token)

```bash
GET /admin
Authorization: Bearer <your_token>
```

📌 Example: `authorizeRoles("admin")` protects routes only for admin users. -->

## 📄 License

This project is licensed under the MIT License.

## 🙌 Author

Made with ❤️ by Meharab Hossan Munna

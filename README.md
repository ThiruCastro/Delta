# Delta user  Management System

>[Live Demo]: https://delata.netlify.app/
>[Repository]: https://github.com/ThiruCastro/Delta

 ## Overview

This is a simple and scalable CRUD (Create, Read, Update, Delete) application built using:

1. React (Vite)

2. Tailwind CSS

3. Axios

4. React Icons

5. REST API (running on localhost)

## The application allows users to create, view, update, and delete user records via API integration.

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/ThiruCastro/Delta.git
cd Delta

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


> The app runs on:

http://localhost:5173

🔌 Backend Requirement

> The frontend expects a REST API running at:

http://localhost:5000


Make sure the backend server is running before starting the frontend.

If needed, update the base URL inside the Axios service file.

🧩 How to Add New Fields to the Form

The form is designed to be easily extendable.

## To add a new field (example: age):

1️⃣ Add field in component state
const [age, setAge] = useState("");

2️⃣ Add input field in the form
<input
  type="number"
  placeholder="Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>

3️⃣ Include field in request payload
const newUser = {
  name,
  lastname,
  email,
  phoneno,
  address,
  age
};

4️⃣ Ensure backend supports the new field

### No major structural changes are required — the architecture supports scalable field additions with minimal modifications.

🏗️ Design Decisions & Assumptions
✅ Separation of Concerns

API calls are abstracted using Axios to keep components clean and maintainable.

✅ Component-Based Architecture

Reusable components are used to improve scalability and readability.

✅ Extensibility

The form and state structure allow new fields to be added without refactoring the entire codebase.

✅ Assumptions

Backend follows standard REST conventions

API returns JSON responses

Each user object contains a unique id

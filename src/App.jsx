import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // FETCH USERS
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/Users"
      );
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD USER
  const addItems = async (newItem) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/Users",
        newItem
      );

      setUsers((prev) => [...prev, response.data]);
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE USER
  const updateUser = async (updatedUser) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/Users/${updatedUser.id}`,
        updatedUser
      );

      setUsers((prev) =>
        prev.map((user) =>
          user.id === updatedUser.id ? response.data : user
        )
      );

      setSelectedUser(null);
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">
            Delta User Management System
          </h1>

          <button
            onClick={() => {
              setSelectedUser(null);
              setShowForm(true);
            }}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
          >
            Add User
          </button>
        </div>

        <UserList
          users={users}
          loading={loading}
          error={error}
          setUsers={setUsers}
          setSelectedUser={setSelectedUser}
          setShowForm={setShowForm}
        />
      </div>

      {/* MODAL */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center"
          onClick={() => setShowForm(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-2xl p-6"
          >
            <UserForm
              addItems={addItems}
              updateUser={updateUser}
              selectedUser={selectedUser}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;


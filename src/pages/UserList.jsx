import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const UserList = ({
  users,
  loading,
  error,
  setUsers,
  setSelectedUser,
  setShowForm
}) => {

  const handleDelete = async (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));

    try {
      await axios.delete(`http://localhost:5000/Users/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div className="space-y-4 text-white">

      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white/10 p-4 rounded-xl border border-white/20"
        >
          <p><b>Name:</b> {user.name} {user.lastname}</p>
          <p><b>Phone:</b> {user.phoneno}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Address:</b> {user.address}</p>

          <div className="flex gap-3 mt-3 justify-end">

            {/* EDIT */}
            <button
              onClick={() => {
                setSelectedUser(user);
                setShowForm(true);
              }}
              className="p-2 bg-blue-500/20 rounded"
            >
              <FaEdit />
            </button>

            {/* DELETE */}
            <button
              onClick={() => handleDelete(user.id)}
              className="p-2 bg-red-500/20 rounded"
            >
              <MdDelete />
            </button>

          </div>
        </div>
      ))}

    </div>
  );
};

export default UserList;

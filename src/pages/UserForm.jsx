import React, { useState, useEffect } from "react";

const UserForm = ({ addItems, updateUser, selectedUser }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // PREFILL WHEN EDITING
  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setLastname(selectedUser.lastname);
      setPhoneno(selectedUser.phoneno);
      setEmail(selectedUser.email);
      setAddress(selectedUser.address);
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      id: selectedUser?.id,
      name,
      lastname,
      phoneno,
      email,
      address
    };

    if (selectedUser) {
      updateUser(userData);
    } else {
      addItems(userData);
    }

    setName("");
    setLastname("");
    setPhoneno("");
    setEmail("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <h2 className="text-2xl font-semibold text-center">
        {selectedUser ? "Update User" : "Create User"}
      </h2>

      <input
        type="text"
        placeholder="First Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Last Name"
        required
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="tel"
        placeholder="Phone"
        required
        value={phoneno}
        onChange={(e) => setPhoneno(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <textarea
        placeholder="Address"
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded"
      >
        {selectedUser ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default UserForm;


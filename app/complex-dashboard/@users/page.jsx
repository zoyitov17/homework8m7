"use client";

import React, { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users");
        if (!response.ok) {
          throw new Error("Xatolik yuzaga keldi");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserSelect = (userId) => {
    const user = users.find((user) => user.id === userId);
    setSelectedUser(user);
  };

  const handleBack = () => {
    setSelectedUser(null);
  };

  if (loading) return (
    <ul class="mt-5 space-y-3 min-h-screen">
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
    </ul>
  );
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <div className="flex-1 shadow-md ml-2 font-semibold mt-3">
      {selectedUser ? (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg text-center pt-4 font-bold">
            Foydalanuvchi haqida ma'lumot
          </h2>
          <p className="text-center pt-4">
            <strong>Ism:</strong> {selectedUser.name.firstname}{" "}
            {selectedUser.name.lastname}
          </p>
          <p className="text-center pt-4">
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p className="text-center pt-4">
            <strong>Telefon:</strong> +{selectedUser.phone}
          </p>
          <button
            onClick={handleBack}
            className="w-32 mt-10 rounded-3xl text-gray-200 h-10 bg-slate-600"
          >
            Orqaga
          </button>
        </div>
      ) : (
        <ul className="list-none pl-5">
          {users.map((user) => (
            <li
              key={user.id}
              className="mb-2 cursor-pointer"
              onClick={() => handleUserSelect(user.id)}
            >
              Name: {user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

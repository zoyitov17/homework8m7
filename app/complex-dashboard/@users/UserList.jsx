import React, { useState, useEffect } from "react";

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li
            key={user.id}
            className="mb-2 cursor-pointer"
            onClick={() => onSelectUser(user.id)}
          >
            {user.username}
          </li>
        ))}
      </ul>
  );
};

export default UserList;

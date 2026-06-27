"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function AdminPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");

if (loggedIn === "true") {
  setIsLoggedIn(true);
}
    const fetchAppointments = async () => {
      const querySnapshot = await getDocs(
        collection(db, "appointments")
      );

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAppointments(data);
    };

    fetchAppointments();
  }, []);
  const deleteAppointment = async (id: string) => {
  await deleteDoc(doc(db, "appointments", id));

  setAppointments(
    appointments.filter((item) => item.id !== id)
  );
};
const handleLogin = () => {
  if (
    username === "admin" &&
    password === "12345"
  ) {
    localStorage.setItem("adminLoggedIn", "true");
    setIsLoggedIn(true);
  } else {
    alert("Invalid Username or Password");
  }
};
const filteredAppointments = appointments.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);
if (!isLoggedIn) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm border p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />

        <button
          onClick={handleLogin}
          className="bg-sky-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </main>
  );
}

  return (
    <main className="p-8">
        <div className="flex justify-between items-center mb-6">
            <div className="bg-sky-100 p-4 rounded-lg mb-4">
  <h2 className="text-xl font-semibold">
    Total Appointments: {appointments.length}
  </h2>
</div>

  <button
    onClick={() =>{
        localStorage.removeItem("adminLoggedIn");
         setIsLoggedIn(false)}}
    className="bg-red-500 text-white px-4 py-2 rounded"
  >
    Logout
  </button>
</div>
      
      <input
  type="text"
  placeholder="Search by patient name..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-2 rounded mb-4 w-full"
/>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Treatment</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredAppointments.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.mobile}</td>
              <td className="border p-2">{item.email}</td>
              <td className="border p-2">{item.treatment}</td>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">
  <button
    onClick={() => deleteAppointment(item.id)}
    className="bg-red-500 text-white px-3 py-1 rounded"
  >
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
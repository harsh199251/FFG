import React, { useState, useEffect } from 'react'
import css from './FormD.css'
import { Link } from 'react-router-dom';

export default function FormD() {

  const [formData, setFormData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://ffg-z4nr.onrender.com/formData');
              if (!response.ok) {
                  throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setFormData(data);
              console.log(data); // Logging formData instead of datas
          } catch (error) { 
              // Handle error fetching data
          }
      };
  
      fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    // Redirect to the login page
    window.location.href = "/";
  };
  
  return (
    <section className='home-l'>
    <div className="container-form">
        <h1 className="heading">Form Data</h1>
        <ul className="list">
            {formData.map((item, index) => (
                <li key={index} className="listItem">
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Purpose:</strong> {item.purpose}</p>
                    <p><strong>Age:</strong> {item.age}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>Phone:</strong> {item.phone}</p>
                </li>
            ))}
        </ul>
        <Link to="/login" onClick={handleLogout}>Logout</Link>
    </div>
    </section>
);
}
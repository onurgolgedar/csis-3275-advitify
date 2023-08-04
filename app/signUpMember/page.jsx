"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

import styles from './signUp.module.css';
import Image from 'next/image';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userType: '2',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend API
      await axios.post('/api/registerClient', formData);
      // Handle successful registration (e.g., show a success message or redirect to a success page)
      console.log('Registration successful!');
      router.push('/')
    } catch (error) {
      console.error('Error during sign-up:', error);
      // Handle registration error (e.g., show an error message)
    }
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.signupContainer}>
            <h1 className={styles.heading}>Become an Advitify Member</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your Username"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <button type="submit" className={styles.signupButton}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Image width={500} height={500} src="/contract_image.png" alt="Image Description" />
        </div>
      </div>
    </main>
  );
}




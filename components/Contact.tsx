"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import contact from "@/public/3288524-removebg-preview.png";
import toast from 'react-hot-toast';

export const runtime = "nodejs";


const Contact = () => {
  const [sending,setsending] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: "", error: "" });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ success: "", error: "" });

    const { name, email, message , subject} = formData;

    if (!name || !email || !message || !subject) {
      setStatus({ success: "", error: "Please fill in all required fields." });
      return;
    }

    try {
      setsending(true)
      const response = await axios.post("/api/email", formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success(response.data.success); // Show success toast
      setsending(false)
      setStatus({ success: response.data.success, error: "" });
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        setsending(false)
        setStatus({ success: "", error: error.response.data.error });
      } else {
        setsending(false)
        setStatus({ success: "", error: "Something went wrong. Please try again later." });
      }
    }
  };

  return (
    <div id="contact" className="md:px-4">
      <div className="text-center border-t-2 border-[#FE4F2D] mb-10 pt-10">
        <h1 className="text-4xl font-bold text-[#FE4F2D]">Get In Touch</h1>
        <p>{`We'd`} love to hear from you! Send us a message and {`we'll`} get back to you as soon as possible.</p>
      </div>
      <div className="grid md:grid-cols-2 items-center justify-center border-b-2 border-[#FE4F2D]">
        <div className="flex flex-col items-center space-y-4">
          <Image src={contact} alt="Contact" className="w-full h-full" />
        </div>
        <div className="border-l-2 border-[#FE4F2D] p-6">
          <h2 className="text-2xl font-bold text-center mb-4 text-[#FE4F2D]">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="Enter message details"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-[#FE4F2D] text-white p-2 rounded-lg hover:bg-[#659DAC] transition  " 
            disabled={sending} 
            >
              {
                sending ? 'Sending...' : 'Send Message'
              }
            </button>
          </form>
          {status.success && <p className="text-green-500 mt-2">{status.success}</p>}
          {status.error && <p className="text-red-500 mt-2">{status.error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;

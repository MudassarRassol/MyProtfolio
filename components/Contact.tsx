"use client";

import React, { useState } from "react";
import Image from "next/image";
import contact from "@/public/3288524-removebg-preview.png";
import toast from 'react-hot-toast';
import { sendEmail } from "@/app/actions/sendEmail"; // Import the server action

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all required fields.");
      setSending(false);
      return;
    }

    const emailSent = await sendEmail(name, email, subject, message);
    if (emailSent) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Failed to send email. Try again later.");
    }
    setSending(false);
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
                required
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
            <button type="submit" className="w-full bg-[#FE4F2D] text-white p-2 rounded-lg hover:bg-[#659DAC] transition" 
              disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

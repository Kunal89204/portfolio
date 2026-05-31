"use client";
import React, { useState } from "react";

import { Mail } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

import { usePageView } from "@/hooks/usePageView";
import {
  trackContactForm,
  trackSocialClick,
  type SocialPlatform,
} from "@/lib/gtag";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  usePageView("Contact | Kunal Khandelwal");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      trackContactForm({ status: "validation_error" });
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    trackContactForm({ status: "attempt" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        trackContactForm({ status: "success" });
        alert("Thank you! Your message has been sent successfully. I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorMessage = result.error || "Something went wrong. Please try again.";
        trackContactForm({ status: "server_error", errorMessage });
        alert(errorMessage);
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      trackContactForm({ status: "network_error" });
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const socialLinks: {
    icon: React.ReactNode;
    link: string;
    label: string;
    platform: SocialPlatform;
  }[] = [
    {
      icon: <Mail size={30} />,
      link: "me@kunalkhandelwal.dev",
      label: "Mail me",
      platform: "email",
    },
    {
      icon: <BsGithub size={30} />,
      link: "https://github.com/kunal89204",
      label: "GitHub",
      platform: "github",
    },
    {
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/kunal89204/",
      label: "LinkedIn",
      platform: "linkedin",
    },
  ];

  const handleSocialClick = (platform: SocialPlatform, url: string) => {
    trackSocialClick(platform, url);
  };
  return (
    <div className="px-6 lg:px-4  max-w-[1200px] mx-auto mt-20 flex flex-col items-center">
      <div className="flex gap-20 w-full mt-14">
        <div className="w-1/3">
          <h3 className="text-xl font-semibold">Contact Info</h3>

          {socialLinks.map((link) => (
            <div key={link.label} className="flex gap-4 py-6">
              <div className="p-5 rounded-lg bg-gradient-to-br from-[#202020] to-[#090909] border border-[#202020] aspect-square flex items-center justify-center">
                {link.icon}
              </div>
              <div>
                <p className="text-[#505050] font-semibold">{link.label}</p>
                <a
                  href={link.label === "Mail me" ? `mailto:${link.link}` : link.link}
                  target={link.label === "Mail me" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  onClick={() =>
                    handleSocialClick(
                      link.platform,
                      link.label === "Mail me" ? `mailto:${link.link}` : link.link
                    )
                  }
                >
                  {link.link}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="gray-gradient p-10 rounded-3xl border w-2/3">
          <div>
            <h2 className="text-5xl">
              Let&apos;s work <span>together</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4 mt-4 relative z-30">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="bg-gradient-to-br focus:outline-0 from-[#303030] to-[#181818]  rounded-lg p-4"
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="bg-gradient-to-br focus:outline-0 from-[#303030] to-[#181818]  rounded-lg p-4"
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="bg-gradient-to-br focus:outline-0 from-[#303030] to-[#181818]  rounded-lg p-4 resize-none h-40"
              disabled={isSubmitting}
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#303030] font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300 text-white rounded-lg p-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

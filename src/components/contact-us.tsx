"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import {
  Input,
  SectionHeading,
  SlideIn,
  Textarea,
  TextReveal,
  Transition,
} from "./ui";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  // Check if all fields are filled
  const isFormValid = () =>
    formData.fullName && formData.email && formData.subject && formData.message;

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setValidationMessage(""); // Clear validation message on input change
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      setValidationMessage("Please fill in all fields before submitting.");
      return;
    }
    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "fce4db1a-5b5f-4843-b732-15b445f99b0c",
        ...formData,
      });
      setFormStatus("Form submitted successfully!");
      setFormData({ fullName: "", email: "", subject: "", message: "" }); // Reset form
      console.log("Form submitted:", response);
    } catch (error) {
      setFormStatus("Failed to submit the form. Please try again.");
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <motion.section className="relative">
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]" />
      <div className="p-4 md:p-8 md:px-16">
        <SectionHeading>
          <SlideIn className="text-white/40">Interested in talking,</SlideIn>{" "}
          <br />
          <SlideIn>let’s do it.</SlideIn>
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-10 md:pt-16">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <Transition className="w-full">
                <Input
                  id="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="border-0 border-b rounded-none"
                />
              </Transition>
              <Transition className="w-full">
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-0 border-b rounded-none"
                />
              </Transition>
            </div>
            <Transition>
              <Input
                id="subject"
                placeholder="Enter the subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="border-0 border-b rounded-none"
              />
            </Transition>
            <Transition>
              <Textarea
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleInputChange}
                className="min-h-[100px] rounded-none border-0 border-b resize-none"
              />
            </Transition>
            <Transition>
              <motion.button
                type="submit"
                whileHover="whileHover"
                disabled={!isFormValid()} // Disable button if form is invalid
                className={cn(
                  "border border-white/30 px-8 py-2 rounded-3xl relative overflow-hidden",
                  {
                    "opacity-50 cursor-not-allowed": !isFormValid(),
                  }
                )}
              >
                <TextReveal className="uppercase">Discuss Project</TextReveal>
              </motion.button>
            </Transition>
            {formStatus && <div className="text-white/80 mt-4">{formStatus}</div>}
            {validationMessage && (
              <div className="text-red-500 mt-2">{validationMessage}</div>
            )}
          </form>

          {/* Contact Info */}
          <div className="md:justify-self-end flex flex-col">
            <div className="pb-4">
              <Transition>
                <span className="text-white/90">Get in touch</span>
              </Transition>
              <div className="text-xl md:text-3xl font-bold py-2">
                <Transition>
                  <TextReveal>dimuthnilanjana.official@gmail.com</TextReveal>
                </Transition>
              </div>
              <Transition>
                <div className="pb-1 text-white/80">+94 70 218 2603</div>
              </Transition>

              {/* Social Media Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-between md:px-8 px-2 py-4 text-sm">
        <Transition>
          <div>&copy; {new Date().getFullYear()} ThePortfolio</div>
        </Transition>
        <Transition>
          <p>
            developed by @
            <Link
              href={"https://twitter.com/Dimuthnilanjana"}
              className="hover:underline"
            >
              Dimuth Nilanjana
            </Link>
          </p>
        </Transition>
      </footer>
    </motion.section>
  );
};

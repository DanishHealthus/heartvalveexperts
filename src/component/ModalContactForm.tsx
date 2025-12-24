"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function ModalContactForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const modalData = localStorage.getItem("formModalShown");

  if (modalData) {
    const parsed = JSON.parse(modalData);
    const now = Date.now();

    // 24 hours = 86400000 ms
    if (now - parsed.timestamp > 86400000) {
      localStorage.removeItem("formModalShown");
    }
  }

  const isShown = localStorage.getItem("formModalShown");
  if (!isShown) {
    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem(
        "formModalShown",
        JSON.stringify({ timestamp: Date.now() })
      );
    }, 15000);

    return () => clearTimeout(timer);
  }
}, []);

useEffect(() => {
  if (isOpen) {
    setOpen(true);
  }
}, [isOpen]);

 // Close modal on clicking outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
      onClose()
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Contact Number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setForm({ name: "", phone: "", email: "", message: "" });
          router.push("/thank-you");
          setOpen(false);
          onClose();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to submit. Please try again.",
          });
        }
      } catch {
        Swal.fire({
          icon: "warning",
          title: "Error",
          text: "Something went wrong. Try again later.",
        });
      }
    }
  };

  if (!open) return null;

  return (
    <div onClick={handleOverlayClick} className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="animate-gradient-circle p-8 rounded-3xl shadow-xl w-full max-w-lg relative"
      >
        {/* Close Button */}
        <button
          onClick={() => {setOpen(false),onClose()}}
          className="absolute cursor-pointer top-3 right-5 text-white text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="text-white text-2xl font-semibold mb-4 text-center">
          Quick Enquiry
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Full Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3 rounded-full bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.name && (
              <p className="text-white pl-3 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Contact Number *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-5 py-3 rounded-full bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.phone && (
              <p className="text-white pl-3 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3 rounded-full bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.email && (
              <p className="text-white pl-3 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message *"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-3 rounded-3xl bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
            {errors.message && (
              <p className="text-white pl-3 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Send Enquiry
          </button>
        </form>
      </motion.div>
    </div>
  );
}

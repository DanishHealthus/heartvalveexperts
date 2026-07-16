"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

interface data{
    url:string
}

export default function CallbackForm({ url }: data) {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!form.name.trim()) newErrors.name = "Full Name is required";

        if (!form.phone.trim()) {
            newErrors.phone = "Contact Number is required";
        } else if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = "Enter a valid 10-digit number";
        }

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
                    body: JSON.stringify({
                        name: form.name,
                        phone: form.phone,
                        email: "-",
                        message: url,
                    }),
                });

                if (response.ok) {
                    setForm({ name: "", phone: "", email: "", message: "" });
                    router.push("/thank-you");
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "❌ Failed to submit. Please try again.",
                    });
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                Swal.fire({
                    icon: "warning",
                    title: "Error",
                    text: "⚠️ Something went wrong. Please try again later.",
                });
            }
        }
    };

    return (
        <div className="mt-5 rounded-3xl lg:rounded-[40px] animate-gradient-circle p-6 text-white">
            <h3 className="mb-4 text-center text-3xl lg:text-2xl xl:text-3xl font-semibold">
                Get A Call Back
            </h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mb-1 mt-2 w-full rounded-full border-2 border-white/40 px-4 py-2 outline-none text-white placeholder:text-white text-base"
                />
                {errors.name && (
                    <p className="text-white pl-3 text-sm mt-1">{errors.name}</p>
                )}

                <input
                    type="text"
                    placeholder="Contact Number *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mb-1 mt-2 w-full rounded-full border-2 border-white/40 px-4 py-2 outline-none text-white placeholder:text-white text-base"
                />
                {errors.phone && (
                    <p className="text-white pl-3 text-sm mt-1">{errors.phone}</p>
                )}


                <button
                    type="submit"
                    className="w-full mt-4 rounded-full bg-white capitalize text-black py-2 cursor-pointer font-normal hover:scale-[1.02] duration-500"
                >
                    Request Call Back
                </button>
            </form>
        </div>
    );
}
"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CallbackForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [error2, setError2] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 10) {
            setPhone(value);
            setError2("");
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
        setError2("");
        setSuccess("");

        if (!name.trim()) {
            setError("Please enter your full name");
            return;
        }

        if (!phone.trim()) {
            setError2("Please enter your mobile number");
            return;
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            setError2("Please enter a valid 10-digit mobile number");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email: "dummy@gmail.com",
                    phone,
                    message: "Callback request",
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to send");
            }
            router.push("/thank-you");
            setSuccess("Request sent successfully!");
            setName("");
            setPhone("");
        } catch (err) {
            setError2("Something went wrong. Try again.");
        } finally {
            setLoading(false);
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
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setError("");
                    }}
                    className="mb-2 mt-4 w-full rounded-full border-2 border-white/40 px-5 py-4 outline-none text-white placeholder:text-white text-base"
                />
                {error && <span className="text-sm text-red-200">{error}</span>}

                <input
                    type="text"
                    placeholder="Mobile Number *"
                    value={phone}
                    maxLength={10}
                    className="mb-2 mt-4 w-full rounded-full border-2 border-white/40 px-5 py-4 outline-none text-white placeholder:text-white text-base"
                    onChange={handlePhoneChange}
                />
                {error2 && <span className="text-sm text-red-200">{error2}</span>}

                {success && (
                    <span className="text-sm text-green-300">{success}</span>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 rounded-full bg-white capitalize text-black py-3 cursor-pointer font-normal hover:scale-[1.02] duration-500"
                >
                    {loading ? "Sending..." : "Request Call Back"}
                </button>
            </form>
        </div>
    );
}
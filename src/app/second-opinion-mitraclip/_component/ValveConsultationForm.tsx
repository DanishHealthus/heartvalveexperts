"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ValveConsultationForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    help: "",
    notes: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.help.trim()) newErrors.help = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      setSuccess("");

      const res = await fetch("/api/landing-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: { message?: string } = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setForm({ name: "", phone: "", city: "", help: "", notes: "" });

      router.push("/second-opinion-mitraclip/thank-you");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Failed to submit form");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 md:p-8 max-w-lg w-full mx-auto">
      <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mb-6">
        Discuss Your Valve Treatment Options
      </h3>

      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="text-xs text-white/80">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-xs text-white/80">Phone / WhatsApp</label>
          <div className="flex flex-wrap gap-3 items-center">
            {/* <div className="w-[75%]"> */}
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none"
            />
            {/* </div>
            <div className="w-[22%]">
              <button className="cursor-pointer hover:scale-105 duration-500 px-3.5 bg-white text-black h-10 rounded-xl">Send OTP</button>
            </div> */}
          </div>
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
        {/* City */}
        <div>
          <label className="text-xs text-white/80">City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none"
          />
          {errors.city && (
            <p className="text-red-400 text-xs mt-1">{errors.city}</p>
          )}
        </div>

        {/* Help */}
        <div>
          <label className="text-xs text-white/80">
            What do you want help with?
          </label>

          <select
            name="help"
            value={form.help}
            onChange={handleChange}
            className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none text-white"
          >
            <option value="" className="text-black">
              Select   an option
            </option>
            <option value="TAVI" className="text-black">
              TAVI
            </option>
            <option value="TMVR" className="text-black">
              TMVR
            </option>
            <option value="TEER (MitraClip & TriClip)" className="text-black">
              TEER (MitraClip & TriClip)
            </option>
            <option value="LAAO" className="text-black">
              LAAO
            </option>
            <option value="Device Closures (ASD, PFO, VSD, PDA)" className="text-black">
              Device Closures (ASD, PFO, VSD, PDA)
            </option>
            <option value="Other Procedures (BMV, RSOV, Tric Valve)" className="text-black">
              Other Procedures (BMV, RSOV, Tric Valve)
            </option>
          </select>

          {errors.help && (
            <p className="text-red-400 text-xs mt-1">{errors.help}</p>
          )}
        </div>


        {/* Notes */}
        <div>
          <label className="text-xs text-white/80">Notes (optional)</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white cursor-pointer text-black font-medium py-3 rounded-full hover:bg-white/90 transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Book Consultation"}
        </button>

        {success && (
          <p className="text-green-400 text-sm text-center mt-2">
            {success}
          </p>
        )}

        <p className="text-xs text-white/70 text-center">
          *All enquiries are reviewed by a dedicated heart valve specialist.
        </p>
      </form>
    </div>
  );
};

export default ValveConsultationForm;

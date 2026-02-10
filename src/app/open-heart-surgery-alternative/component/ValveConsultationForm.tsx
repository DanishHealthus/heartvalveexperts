import React from "react";

const ValveConsultationForm = () => {
  return (
    <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 md:p-8 max-w-lg w-full mx-auto">
      <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mb-6">
        Discuss Your Valve Treatment Options
      </h3>

      <form className="space-y-3">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-xs text-white/80">Full Name</label>
          <input
            type="text"
            className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/60"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div className="space-y-1">
          <label className="text-xs text-white/80">
            Phone / WhatsApp
          </label>
          <input
            type="text"
            className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/60"
          />
        </div>

        {/* City */}
        <div className="space-y-1">
          <label className="text-xs text-white/80">City</label>
          <input
            type="text"
            className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/60"
          />
        </div>

        {/* Help With */}
        <div className="space-y-1">
          <label className="text-xs text-white/80">
            What do you want help with?
          </label>
          <input
            type="text"
            className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/60"
          />
        </div>

        {/* Notes */}
        <div className="space-y-1">
          <label className="text-xs text-white/80">
            Notes (optional)
          </label>
          <textarea
            rows={3}
            className="w-full mt-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/60 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-white text-base md:text-lg xl:text-xl cursor-pointer text-black font-medium py-3 rounded-full hover:bg-white/90 transition"
        >
          Book Consultation
        </button>

        <p className="text-xs xl:text-sm text-white/70 text-center">
          *All enquiries are reviewed by a dedicated heart valve specialist.
        </p>
      </form>
    </div>
  );
};

export default ValveConsultationForm;

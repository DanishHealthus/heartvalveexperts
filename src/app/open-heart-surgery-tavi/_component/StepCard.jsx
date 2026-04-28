// components/StepCard.jsx
export default function StepCard({ step, title, description }) {
  return (
    <div className="border border-white/20 rounded-2xl p-6 backdrop-blur-md bg-white/5 hover:bg-white/10 transition">
      <div className="flex items-start gap-4">
        <span className="text-white/60">
          {step}
        </span>

        <div>
          <h3 className="text-white text-lg lg:text-xl font-semibold">
            {title}
          </h3>
          <p className="text-white text-sm mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
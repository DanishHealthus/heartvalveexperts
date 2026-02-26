interface ComparisonRow {
  feature: string;
  tavi: string;
  surgery: string;
}

interface ComparisonProps {
  title: string;
  subtitle: string;
  badge?: string;
  rows: ComparisonRow[];
}

export default function ComparisonSection({
  title,
  subtitle,
  badge = "Why Choose TAVI",
  rows,
}: ComparisonProps) {
  return (
    // <section className="bg-gradient-to-br from-purple-800 via-pink-700 to-red-600 ">
      <div className="max-w-6xl mx-auto text-white text-center py-16 md:py-24 px-4">
        
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          <p className="uppercase tracking-widest text-xs md:text-sm text-white/80">
            {badge}
          </p>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 max-w-2xl mx-auto mb-10 md:mb-14 text-sm md:text-base">
          {subtitle}
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/20 text-left">
            <div className="p-6 text-center font-medium">Feature</div>
            <div className="p-6 text-center font-semibold bg-white/10">
              TAVI / TAVR
            </div>
            <div className="p-6 text-center font-medium">
              Open Surgery
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b last:border-0 border-white/10"
            >
              <div className="p-6 text-white/90">{row.feature}</div>
              <div className="p-6 text-center bg-white/5 font-medium">
                {row.tavi}
              </div>
              <div className="p-6 text-center text-white/90">
                {row.surgery}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {rows.map((row, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 text-left"
            >
              <h4 className="font-semibold mb-4 text-white">
                {row.feature}
              </h4>

              <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                <span className="text-white/70 text-sm">TAVI / TAVR</span>
                <span className="font-medium">{row.tavi}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/70 text-sm">Open Surgery</span>
                <span>{row.surgery}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    // </section>
  );
}
const stories = [
  {
    name: "Mrs. Preeti Manoharan",
    procedure: "TAVI Procedure",
    relation: "Father",
    age: "74 yrs",
    initial: "P",
    avatarColor: "bg-[#4A9CF6]",
    review:
      "The doctors performed my father's TAVI procedure successfully and explained everything with great care. My father recovered faster than we ever imagined. Truly grateful for the expertise and compassionate team.",
  },
  {
    name: "Mr. Rajesh Sharma",
    procedure: "High-Risk TFFR Procedure",
    relation: "Mother",
    age: "68 yrs",
    initial: "R",
    avatarColor: "bg-[#6BCB3C]",
    review:
      "We were told by two other hospitals that surgery was too risky for my mother. HVE took the case, explained every step, and she is now back to her daily life. The level of care here is unmatched.",
  },
  {
    name: "Mr. Suresh Nambiar",
    procedure: "LAAO Procedure",
    relation: "Patient",
    age: "63 yrs",
    initial: "S",
    avatarColor: "bg-[#EFA52F]",
    review:
      "As someone with atrial fibrillation, the LAAO procedure at HVE has been life-changing. No more fear of strokes. The team was thorough, transparent, and genuinely caring throughout.",
  },
];

export default function PatientSuccessStories() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl font-semibold leading-tight text-[#111111] sm:text-2xl lg:text-3xl">
            Patient Success Stories
          </h2>

          <p className="mt-2 text-base font-normal leading-[1.5] text-[#222222] sm:text-lg">
            Every successful procedure is more than a statistic it&apos;s a
            father who walks his daughter down the aisle, a grandmother who
            plays with her grandchildren again.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-[18px]">
          {stories.map((story) => (
            <div
              key={story.name}
              className="flex min-h-[176px] flex-col rounded-[22px] border border-[#DDE3EB] bg-[#F5F7FA] px-[14px] py-[13px]"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold  text-[#171717]">
                    {story.name}
                  </h3>

                  <p className="mt-[3px] text-sm text-[#7D8490]">
                    {story.procedure} - {story.relation}, {story.age}
                  </p>
                </div>

                {/* Avatar */}
                <div
                  className={`ml-2 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full ${story.avatarColor}`}
                >
                  <span className="text-lg font-medium text-white">
                    {story.initial}
                  </span>
                </div>
              </div>

              {/* Review */}
              <p className="mt-4 text-sm leading-[1.45] text-[#454C59]">
                &quot;{story.review}&quot;
              </p>

              {/* Stars */}
              <div className="mt-auto flex gap-[2px] pt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="text-lg leading-none text-[#F6BD45]"
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
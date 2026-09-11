import type { SpecialityProcedure } from "@/lib/speciality/types";
import { Container, MediaFrame, RichText, SectionHeading } from "./ui";

/**
 * "How the procedure is performed" — centred heading and intro, then a vertical
 * timeline of `acf.how_steps[]` beside the 500 x 500 procedure image, closing
 * with the after-description callout. Step count is entirely data-driven.
 */
export default function ProcedureSection({ procedure }: { procedure: SpecialityProcedure | null }) {
  if (!procedure) return null;

  const hasSteps = procedure.steps.length > 0;

  return (
    <section className="py-[clamp(28px,4vw,50px)]">
      <Container>
        {procedure.title ? (
          <SectionHeading title={procedure.title} align="center" className="mx-auto max-w-[820px]" />
        ) : null}

        {procedure.beforeDescription ? (
          <RichText
            html={procedure.beforeDescription}
            compact
            className="mx-auto mt-4 max-w-[720px] text-center"
          />
        ) : null}

        {hasSteps || procedure.image ? (
          <div className="mt-[clamp(32px,4.4vw,62px)] grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-[80px]">
            {hasSteps ? (
              <ol className="relative grid gap-[clamp(26px,3vw,38px)] pl-[34px]">
                {/* The timeline rail — Figma draws it at x=152 behind the 15px dots. */}
                <span
                  aria-hidden="true"
                  className="absolute left-[7px] top-[10px] bottom-[10px] w-px bg-[linear-gradient(180deg,#0074dd_0%,rgba(0,116,221,0.25)_100%)]"
                />
                {procedure.steps.map((step) => (
                  <li key={step.id} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[34px] top-[6px] h-[15px] w-[15px] rounded-full border-[3px] border-white bg-[#0074dd] shadow-[0_0_0_3px_rgba(0,116,221,0.18)]"
                    />
                    {step.title ? (
                      <h3 className="text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] font-semibold leading-[1.5] text-[#0074dd]">
                        {step.title}
                      </h3>
                    ) : null}
                    {step.description ? (
                      <p className="mt-1 max-w-[505px] text-[15px] leading-[1.6] text-[#4a5b6e]">
                        {step.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>
            ) : null}

            {procedure.image ? (
              <MediaFrame
                image={procedure.image}
                sizes="(min-width: 1024px) 500px, 100vw"
                className="aspect-square w-full lg:sticky lg:top-[130px]"
                fallbackLabel={procedure.title}
              />
            ) : null}
          </div>
        ) : null}

        {procedure.afterDescription ? (
          <div className="mt-[clamp(32px,4vw,56px)] rounded-[18px] border border-[#dbe9f7] bg-[#f4faff] px-6 py-5 sm:px-8 sm:py-6">
            <RichText
              html={procedure.afterDescription}
              compact
              className="text-center text-[#0e2033]"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}

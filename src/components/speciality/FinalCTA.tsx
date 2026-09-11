import Image from "next/image";
import type { SpecialityUnderstand } from "@/lib/speciality/types";
import { Container, CtaButton, RichText } from "./ui";

/**
 * Closing "understand what may be possible" panel — Figma draws a 1178 x 422
 * rounded container with the copy block inset 40px on the left and a 555 x 422
 * image filling the right half.
 */
export default function FinalCTA({ understand }: { understand: SpecialityUnderstand | null }) {
  if (!understand) return null;

  return (
    <section className="py-[clamp(28px,4vw,50px)]">
      <Container>
        <div className="grid overflow-hidden rounded-[24px] bg-gradient-to-br from-[#c20937] via-[#3735a7] to-[#c20937] lg:min-h-[422px] lg:grid-cols-[623fr_555fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:py-[73px] lg:pl-[40px] lg:pr-[40px]">
            {understand.title ? (
              <h2 className="max-w-[516px] text-[clamp(1.5rem,1.1rem+1.5vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-white">
                {understand.title}
              </h2>
            ) : null}

            {understand.description ? (
              <RichText
                html={understand.description}
                invert
                compact
                className="mt-4 max-w-[516px]"
              />
            ) : null}

            {understand.buttonName ? (
              <CtaButton label={understand.buttonName} variant="light" className="mt-7 self-start" />
            ) : null}
          </div>

          <div className="relative min-h-[240px] lg:min-h-full">
            {understand.image ? (
              <Image
                src={understand.image.url}
                alt={understand.image.alt}
                fill
                sizes="(min-width: 1024px) 555px, 100vw"
                className="object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="h-full w-full bg-[radial-gradient(120%_120%_at_100%_0%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_62%)]"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

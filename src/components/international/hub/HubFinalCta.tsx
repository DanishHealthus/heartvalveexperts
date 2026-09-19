import Image from "next/image";
import { Body, Container, Eyebrow, Pill, SECTION_Y, SectionTitle } from "../ui";

/**
 * Closing panel — one rounded card split down the middle: the photograph on the
 * left carries the HVE mark, the right half is the brand gradient with the
 * headline and the two CTAs.
 */
export default function HubFinalCta({
  eyebrow,
  title,
  body,
  image,
  primaryLabel,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  primaryLabel: string;
  secondaryLabel: string;
}) {
  return (
    <section id="enquiry" className={`scroll-mt-24 bg-white ${SECTION_Y}`}>
      <Container>
        <div className="grid overflow-hidden rounded-[clamp(18px,2.2vw,28px)] lg:min-h-[420px] lg:grid-cols-[512fr_668fr]">
          <div className="relative min-h-[260px] lg:min-h-full">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1024px) 512px, 100vw"
              className="object-cover"
              aria-hidden="true"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              {/* <Image
                src="/images/homeimages/logo.png"
                alt="Heart Valve Experts"
                width={260}
                height={150}
                className="h-auto w-[52%] max-w-[260px] drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]"
              /> */}
            </span>
          </div>

          <div className="intl-band flex flex-col justify-center p-7 sm:p-10 lg:py-[64px] lg:pl-[56px] lg:pr-[48px]">
            <Eyebrow label={eyebrow} invert />

            <SectionTitle invert className="mt-5 max-w-[560px]">
              {title}
            </SectionTitle>

            <Body invert className="mt-5 max-w-[560px]">
              {body}
            </Body>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Pill label={primaryLabel} variant="white" />
              <Pill label={secondaryLabel} variant="ghost" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

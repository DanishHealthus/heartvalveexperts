import type { SpecialityAbout } from "@/lib/speciality/types";
import { Container, CtaButton, MediaFrame, RichText, SectionHeading } from "./ui";

/**
 * About: Figma places a 566 x 400 image at x=131 and the copy column at x=766
 * (a 69px gutter), with the CTA 45px tall below the paragraph.
 */
export default function AboutSection({ about }: { about: SpecialityAbout | null }) {
  if (!about) return null;

  return (
    // Figma: image and copy both start at y=808, 120px below the hero.
    <section className="pt-[clamp(48px,8.4vw,120px)] pb-[clamp(28px,4vw,50px)]">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[566fr_539fr] lg:gap-[69px]">
          <MediaFrame
            image={about.image}
            className="aspect-[566/400] w-full"
            fallbackLabel={about.title}
          />

          <div>
            <SectionHeading title={about.title} />
            <RichText html={about.description} className="mt-5 lg:mt-[20px]" />
            {about.buttonName ? (
              <CtaButton label={about.buttonName} className="mt-7 lg:mt-[42px]" />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

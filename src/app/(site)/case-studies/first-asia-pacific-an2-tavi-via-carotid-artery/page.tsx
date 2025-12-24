import React from "react";
import BreadCrumb from "@/component/BreadCrumb";
import CardiacComparison from "@/component/Blog/CardiacComparison";

export const metadata = {
  title: "AN2 TAVI via Carotid Artery Case | Heart Valve Experts",
  description:
    "Case study: First Asia-Pacific AN2 TAVI performed via carotid artery, showcasing advanced minimally invasive heart valve experts in Mumbai.",
  alternates: {
    canonical: "https://heartvalveexperts.com/case-studies/first-asia-pacific-an2-tavi-via-carotid-artery",
  },
};

export default async function SingleBlogPage() {

  const blog = {
    image: "/images/case1.webp", 
    title: "Case Report: First Asia-Pacific AN2 TAVI via Carotid Artery",
    long_description: `
    <h2>Patient Profile</h2>
    <p>A 69-year-old woman presented with a history of diabetes, hypertension, prior stroke, and renal impairment. She had multiple allergies, including intolerance to blood transfusions and several medications.</p>

    <h2>Presenting Complaints</h2>
    <p>Progressive breathlessness, chest pain, and repeated black-out episodes. Investigations confirmed severe aortic stenosis.</p>

    <h2>Access Route Evaluation</h2>
    <p>Standard transfemoral access was ruled out due to a right femoral stent and a vascular graft on the left side. Both subclavian routes were unsuitable (left subclavian blocked with pacemaker; right subclavian had an anomalous course). With all four conventional access sites unavailable, the team considered the trans-carotid route.</p>

    <h2>Trans-Carotid Approach</h2>
    <p>The left carotid artery was chosen for access after confirming adequate collateral blood flow through the Circle of Willis on CT brain angiography to ensure cerebral safety.</p>

    <h2>Procedure</h2>
    <p>A 23 mm ACURATE neo2™ (AN2) valve was selected. Predilation was performed with an 18 mm non-compliant balloon. The valve was deployed successfully, achieving a single-digit gradient and no paravalvular leak. Post-dilation was not required. The iSleeve introducer sheath and AN2 delivery system provided excellent stability throughout the procedure without additional manoeuvring.</p>

    <h2>Outcomes</h2>
    <p>The patient recovered well, with significant improvement in daily activity levels. She was discharged in a stable and improved condition.</p>

    <h2>Significance</h2>
    <p>This is the first successful AN2 implantation via the trans-carotid route in the Asia-Pacific region, demonstrating safety and feasibility of this alternative approach when conventional access routes are not available.</p>

    <h2>Key Learnings</h2>
    <ul>
      <li>Consider trans-carotid access when femoral and subclavian routes are contraindicated.</li>
      <li>Careful pre-procedural imaging is critical, especially to assess cerebral collateral flow.</li>
      <li> Supra-annular valve designs (e.g., AN2) can give excellent hemodynamic results even in small annuli.</li>
    </ul>
  `,
  };

  return (
    <>
      <BreadCrumb title={'First Asia-Pacific AN2 TAVI via Carotid Artery'} subpage="true" image="/images/contact.webp" />
      <CardiacComparison blog={blog} />
    </>
  );
}

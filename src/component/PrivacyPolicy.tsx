import { FiCornerDownRight } from "react-icons/fi";

interface SectionItem { title: string; description?: string; } interface Section { heading: string; content?: string; items?: SectionItem[]; }
const sections: Section[] = [
  {
    heading: "1. Scope and Purpose",
    content:
      "This policy covers all digital personal data collected from patients, whether obtained online or offline and later digitised.",
    items: [
      { title: "Providing medical treatment and care" },
      { title: "Maintaining electronic health records (EHRs)" },
      { title: "Managing appointments and billing" },
      { title: "Facilitating diagnostic services (lab tests, imaging)" },
      {
        title:
          "Conducting research and analysis to improve hospital services (with separate consent)",
      },
      { title: "Supporting regulatory compliance and audits" },
    ],
  },
  {
    heading: "2. Types of Data Collected",
    content:
      "We collect and process the following types of personal data:",
    items: [
      {
        title: "Contact data:",
        description: "Name, address, phone number, email address",
      },
      {
        title: "Demographic data:",
        description: "Age, gender, date of birth",
      },
      {
        title: "Medical data:",
        description:
          "Medical history, diagnosis, treatment plans, prescriptions, diagnostic reports (e.g., ECGs, angiograms)",
      },
      {
        title: "Insurance and financial data:",
        description: "Insurance plan details and payment information",
      },
      {
        title: "Technical data (for digital platforms):",
        description:
          "IP addresses, device details, cookies, and browsing behaviour (see Cookie Policy below)",
      },
    ],
  },
  {
    heading: "3. Consent Management",
    items: [
      { title: "Valid Consent:", description: "Clear, informed consent is obtained from patients before collecting or processing personal data." },
      { title: "Withdrawal of Consent:", description: "Patients may withdraw consent anytime. Instructions are clearly explained and easily accessible." },
      { title: "Children's Data:", description: "For patients under 18, consent is obtained from a parent/legal guardian. We do not track, monitor, or advertise directly to children." },
    ],
  },
  {
    heading: "4. Automated Decision-Making and Profiling",
    content:
      "Currently, Heart Valve Experts do not use automated decision-making or patient profiling for clinical or administrative purposes. If any systems are introduced (e.g., AI-based diagnostics or risk stratification tools), patients will be informed, and explicit consent will be obtained.",
  },
  {
    heading: "5. Data Storage, Retention, and Security",
    items: [
      { title: "Confidentiality:", description: "Patient privacy and confidentiality are an ethical and legal obligation." },
      { title: "Security Measures:", description: "Encryption, access controls, firewalls, and regular audits are implemented to safeguard patient data." },
      { title: "Data Breach Notification:", description: "Patients and the Data Protection Board of India are notified of any breach as required by law." },
      { title: "Retention Periods:", description: "Medical records: Minimum 3 years for indoor patients. Billing and financial records: 8 years. Diagnostic reports and lab results: 5 years. Digital records: As long as the patient account is active or until consent withdrawal." },
    ],
  },
  {
    heading: "6. Disclosure of Information",
    items: [
      { title: "Limited Disclosure:", description: "Data is shared only with authorised healthcare providers on a need-to-know basis." },
      { title: "Third-party Vendors:", description: "Diagnostic labs, technology providers, or insurers are required to maintain DPDP Act-compliant safeguards." },
      { title: "International Transfers:", description: "If personal data is processed or stored on servers outside India (e.g., cloud storage providers), such transfers are carried out only in compliance with DPDP Act provisions and patient consent." },
    ],
  },
  {
    heading: "7. Patient Rights and Grievance Redressal",
    items: [
      { title: "Right to Access:", description: "Patients may request and obtain copies of their medical data." },
      { title: "Right to Correction and Erasure:", description: "Patients may request corrections or deletion of inaccurate or outdated data, subject to legal and medical record-keeping requirements." },
      { title: "Right to Withdraw Consent:", description: "Patients can opt out of non-essential data use (e.g., research, cookies)." },
      { title: "Grievance Mechanism:", description: "A transparent redressal process is in place. For significant data fiduciaries, a Data Protection Officer (DPO) oversees compliance." },
    ],
  },
  {
    heading: "8. Legal and Regulatory Framework",
    content: "Our privacy practices align with:",
    items: [
      { title: "The Digital Personal Data Protection (DPDP) Act, 2023" },
      { title: "Indian Medical Council Regulations, 2002" },
      { title: "National and hospital-specific healthcare standards" },
    ],
  },
  {
    heading: "9. Contact Us",
    content:
      "For any privacy-related concerns or to exercise rights regarding your data, please contact us.",
  },
];


export default function PrivacyPolicy() {
  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-24 xl:px-32 text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <p className="mb-8 text-gray-700 leading-relaxed">
          Patient trust stands at the core of Heart Valve Experts’ mission. This privacy
          policy explains how personal information is collected, used, stored, and
          disclosed in compliance with the Digital Personal Data Protection (DPDP) Act,
          2023, and all relevant healthcare-specific regulations in India.
        </p>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              {section.heading}
            </h2>
            {section.content && (
              <p className="text-gray-700 mb-4 leading-relaxed">
                {section.content}
              </p>
            )}
            {section.items && (
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 leading-relaxed"
                  >
                    <FiCornerDownRight className="mt-1 text-xl flex-shrink-0 text-blue-300" />
                    <span>
                      <strong>{item.title}</strong>{" "}
                      {item.description && <>{item.description}</>}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

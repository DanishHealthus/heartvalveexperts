"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiHeart, FiActivity } from "react-icons/fi"

export default function HeartValveExpertsComponent({ appointmentLink = "#" }) {
    const [expanded, setExpanded] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

    const faq = [
        {
            q: "What is an Interventional Cardiologist?",
            a: "A cardiologist who treats closed arteries and valve abnormalities through minimally invasive procedures with stents or balloons, avoiding open-heart surgery to minimize recovery time.",
        },
        {
            q: "Difference between Cardiac Surgery and Interventional Cardiology",
            a: "Cardiac surgery includes open-heart operations with large incisions. Interventional cardiology includes catheter-based minimally invasive procedures, placing stents among others, repairing valves. Recovery is also shorter.",
        },
        {
            q: "Difference between General Cardiology and Interventional Cardiology?",
            a: "General cardiologists diagnose and manage heart conditions with medicines, while interventional cardiologists also perform catheter-based procedures to fix blockages or valve issues.",
        },
        {
            q: "When should you see an Interventional Cardiologist?",
            a: "See an interventional cardiologist in case of chest pain, breathlessness, valve disease, blocked arteries, or abnormal tests, or if medicines alone are not enough.",
        },
        {
            q: "Can an Interventional Cardiologist perform valve replacement?",
            a: "Yes, they can carry out some of the procedures through the catheter, like TAVR or TMVR, but open-heart valve surgery is carried out by a cardiac surgeon.",
        },
    ];

    return (
        <section className="w-full bg-white py-10 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-12">
                <div className="flex flex-col gap-4 lg:gap-6 bg-white">
                    {/* <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm w-max">
                        <span>Best Cardiologist in Mumbai</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
                        Expert Interventional Cardiologist at Heart Valve Experts
                    </h1>

                    <p className="text-slate-600 text-sm lg:text-base max-w-2xl">
                        Complete cardiac care — from preventive screening to complex valve interventions and 24×7 emergency support.
                    </p> */}


                </div>

                {/* COLLAPSIBLE MAIN CONTENT */}
                <div
                    className={`overflow-hidden transition-all duration-500 bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 ${expanded ? "max-h-[3000px]" : "max-h-[250px]"
                        }`}
                >
                    <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-3">
                        <p className="text-slate-600">When it comes to your heart, finding the right specialist can really make a difference in your journey of health. Be it the best cardiologist in Mumbai, a highly trained interventional cardiologist, or simply a heart doctor near me, Heart Valve Experts  provides you with the expertise, trust, and advanced care you are looking for.</p>
                        <p className="text-slate-600"><Link href='https://heartvalveexperts.com/' className="text-[#0074dd] hover:text-[#97323b]"> Heart Valve Experts</Link> is renowned for its cardiac services, which are truly world-class, supported by experienced heart specialists, the latest technology, and a model of care that truly addresses the needs of the patient. <Link href='https://heartvalveexperts.com/blog/heart-valve-disease-symptoms-causes-treatment' className="text-[#0074dd] hover:text-[#97323b]">Heart diseases </Link>continue to be one of India leading health challenges, and timely diagnosis followed by expert management is key. Our cardiologist, ranked among the best heart doctors in Mumbai, provides comprehensive evaluation and treatment for all cardiac disorders-from chest pain and hypertension to complex coronary artery disease.</p>

                        <h2 className="text-2xl font-semibold text-slate-900">Why Choosing the Right Cardiologist Matters?</h2>

                        <p className="text-slate-600">Your heart is the most critical organ in your body, and the selection of a professional who <Link href='https://heartvalveexperts.com/blog/heart-valve-problems-symptoms' className="text-[#0074dd] hover:text-[#97323b]"> understands your symptoms</Link> , your lifestyle, and your long-term health goals is very important. A highly qualified cardiologist ensures early diagnosis, precise monitoring, and evidence-based treatments tailored for you.</p>
                        <p className="text-slate-600">From preventive heart care to interventional treatment, and on to long-term cardiac management, having a specialist helps navigate the journey with confidence, clarity, and compassion. Our cardiologist covers all aspects from routine screening to emergency cardiac care.</p>

                        <h2 className="text-2xl font-semibold text-slate-900">What to Look For in A Heart Specialist Or Cardiac Heart Valve Experts</h2>
                        <p className="text-slate-600">The following are the important factors to consider when choosing either a cardiologist or a cardiac facility for care. Heart Valve Experts sets the standard in each of the following areas:</p>

                        <h4 className="text-lg font-semibold text-slate-500 mb-0">Professional Expertise</h4>
                        <p className="text-slate-600">
                            Choose a cardiologist who manages both routine and complex cardiac conditions. At <Link href='https://heartvalveexperts.com/' className="text-[#0074dd] hover:text-[#97323b]"> Heart Valve Experts</Link>, our specialist is regarded among the best in Mumbai.
                        </p>

                        <h4 className="text-lg font-semibold text-slate-500 mb-0">Advanced Interventional Expertise</h4>
                        <p className="text-slate-600">
                            Interventional cardiology requires skill, training, and accuracy. Our specialist is proficient in procedures such as:
                        </p>
                         <ul className="list-disc pl-8 space-y-2 text-slate-600">
                            <li>Coronary angiography</li>
                            <li>Angioplasty & stent placement</li>
                            <li>Structural heart interventions</li>
                            <li>Emergency cardiac procedures</li>
                        </ul>
                        <p className="text-slate-600">This makes him one of the top-rated <Link href='https://heartvalveexperts.com/cardiologist-mumbai/dr-ankur-u-phatarpekar' className="text-[#0074dd] hover:text-[#97323b]">interventional cardiologists in Mumbai.</Link></p>

                        <h4 className="text-lg font-semibold text-slate-500 mb-0">State-of-the-Art Diagnostic Facilities</h4>
                        <p className="text-slate-600">
                            Accurate diagnosis is the foundation of any effective treatment. Heart Valve Experts offers the following:
                        </p>
                         <ul className="list-disc pl-8 space-y-2 text-slate-600">
                            <li>ECG</li>
                            <li>Echocardiography</li>
                            <li>TMT</li>
                            <li>Holter monitoring</li>
                            <li>Cardiac biomarkers and 24×7 emergency support</li>
                        </ul>
                        <p className="text-slate-600">These facilities ensure speedy and high-precision evaluation.</p>

                        <h4 className="text-lg font-semibold text-slate-500 mb-0">Comprehensive Cardiac & Valve Care</h4>
                        <p className="text-slate-600">Our specialist provides comprehensive care for everything ranging from hypertension to valve disorders. As regards valve-related disorders, he is also considered the best heart valve specialist with advanced options available for:</p>

                        <ul className="list-disc pl-8 space-y-2 text-slate-600">
                            <li><Link href='https://heartvalveexperts.com/tavi' className="text-[#0074dd] hover:text-[#97323b]">TAVI</Link></li>
                            <li>Valve repair</li>
                            <li>Valve replacement</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-slate-500 mb-0">Convenient and Accessible Location</h4>
                        <p className="text-slate-600">Accessibility is key when one is seeking a heart doctor near me, especially in cases of emergency. Heart Valve Experts is located for easy access in time of need.</p>

                        <h4 className="text-lg font-semibold text-slate-500 mb-0">Supportive Patient Services</h4>
                        <p className="text-slate-600">These patients, from lifestyle counseling to long-term cardiac follow-ups, are under continued support toward complete recovery and heart-healthy living.</p>


                        <h2 className="text-2xl font-semibold text-slate-900">When to visit a cardiologist or Heart Valve Experts</h2>
                        <p className="text-slate-600">You should consult a heart specialist in the following cases:</p>
                        <ul className="list-disc pl-8 space-y-2 text-slate-600">
                            <li>Chest pain or discomfort</li>
                            <li>Shortness of breath or unusual fatigue</li>
                            <li>Hypertension, diabetes, high cholesterol</li>
                            <li>Irregular heartbeat or dizziness</li>
                            <li>Family history of heart disease</li>
                        </ul>
                        <p className="text-slate-600">This may be due to age or other life factors that raise the risk of cardiovascular disease.</p>
                        <p className="text-slate-600">Early evaluation by the best cardiac surgeon or cardiology team helps to prevent long-term complications.</p>


                        <h2 className="text-2xl font-semibold text-slate-900">Best Cardiac Care to Services at  Heart Valve Experts</h2>
                        <p className="text-slate-600">
                           Heart Valve Experts offers first-class cardiac services on par with national cardiac centers:
                        </p>
                        <strong>Interventional & Non-Invasive Cardiology</strong>
                        <p className="text-slate-600">Precision-based treatments like angioplasty, stenting, and cardiac support during emergencies.</p>
                        <strong>Cardiac Surgery Support</strong>
                        <p className="text-slate-600">The doctor coordinates with the best-rated surgeons to provide smooth pre- and post-surgical management.</p>
                        <strong>Post-Procedural & Long-Term Heart Care</strong>
                        <p className="text-slate-600">Follow-up plans, optimization of medication, lifestyle counselling and regular monitoring.</p>
                        <strong>Specialized Clinics</strong>
                        <p className="text-slate-600">For:</p>
                        <ul className="list-disc pl-8 space-y-2 text-slate-600">
                            <li>Hypertension</li>
                            <li>Heart failure</li>
                            <li>Coronary artery disease</li>
                            <li>Valve disorders</li>
                            <li>Arrhythmias</li>
                        </ul>
                        <h2 className="text-2xl font-semibold text-slate-900">Tips to Find the Best Cardiologist or Cardiac Heart Valve Experts in Mumbai</h2>
                        <p className="text-slate-600">
                           Here how you can choose the right heart specialist:
                        </p>   
                        <ul className="list-disc pl-8 space-y-2 text-slate-600">
                            <li><strong>Search Online</strong>: Use keywords like best cardiologist, interventional cardiologist, or heart doctor near me.</li>
                            <li><strong>Check Reviews</strong>: Patient experiences are indicative of the cardiologist expertise and approach.</li>
                            <li><strong>Verify Credentials</strong>: Ensure your specialist is certified and experienced in interventional cardiology.</li>
                            <li><strong>Assess Emergency Support</strong>: Heart Valve Experts provide 24×7 cardiac emergency services.</li>
                            <li><strong>Look at Technology</strong>: Modern diagnostics lead to faster, more accurate results.</li>
                            <li><strong>Ask for referrals</strong>: The best heart doctor usually comes through trusted referrals.</li>
                            <li><strong>Schedule a Consultation</strong>: Meet the doctor to understand comfort, communication, and care approach.</li>
                        </ul>
                        <h2 className="text-2xl font-semibold text-slate-900">Your Journey to Exceptional Heart Care with  Heart Valve Experts</h2>
                        <p className="text-slate-600">
                           Choosing the right cardiologist is the foundation of long-term heart health. At Heart Valve Experts, you get the perfect combination of clinical expertise and modern technology with compassionate care. Our cardiologist, often recognized as the best cardiologist, best heart specialist, and best heart valve specialist in Mumbai, ensures that each patient receives personalized and precise treatment. From accurate diagnosis and advanced interventional procedures to preventive care, your trusted partner is Heart Valve Experts.
                        </p>   
                        <h4 className="text-lg font-semibold text-slate-500 mb-0">Book Appointment With the Best Cardiologist in Mumbai</h4>
                        <p className="text-slate-600">Your heart deserves the best care. Whether you are symptomatic or just require a check-up, making an<Link href='https://heartvalveexperts.com/tavi' className="text-[#0074dd] hover:text-[#97323b]"> appointment with our cardiologist</Link> is the right thing to do. Click the appointment button or reach our support team for quick scheduling. Get the right diagnosis. The right treatment at the right time.</p>
                   
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-5 px-3">
                    <Link
                        href={appointmentLink}
                        className="animate-gradient-circle wht-bg-are text-xl cursor-pointer duration-500 px-6 py-3 border text-white hover:scale-105 font-normal rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        Book Appointment
                    </Link>

                    <button
                        onClick={() => setExpanded((s) => !s)}
                        className="animate-gradient-circle wht-bg-are text-xl cursor-pointer duration-500 px-6 py-3 border text-white hover:scale-105 font-normal rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        {expanded ? "Read less" : "Read more"}
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {[
                        {
                            title: "24×7 Emergency Support",
                            text: "Immediate response for acute cardiac events.",
                            icon: <FiHeart className="h-6 w-6 text-primary" />,
                        },
                        {
                            title: "Advanced Diagnostics",
                            text: "ECG, Echo, TMT, Holter & biomarker evaluation.",
                            icon: <FiActivity className="h-6 w-6 text-primary" />,
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm"
                        >
                            <div className="h-10 w-10 flex items-center justify-center bg-[#2563eb] rounded-lg">
                                {item.icon}
                            </div>

                            <div>
                                <h4 className="text-black font-semibold text-sm mb-1">{item.title}</h4>
                                <p className="text-xs text-slate-500">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ SECTION */}
                <div className="mt-10 bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900">FAQs</h3>

                    <div className="mt-4 divide-y divide-slate-200">
                        {faq.map((f, i) => (
                            <div key={i} className="py-4">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex items-center justify-between text-left lg:text-xl font-semib text-blue-600"
                                >
                                    {f.q}
                                    <span>  <BiChevronDown className={`h-5 w-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} /></span>

                                </button>

                                <div
                                    className={`transition-all text-sm text-slate-600 overflow-hidden ${openFaq === i ? "max-h-40 mt-3" : "max-h-0"
                                        }`}
                                >
                                    <p>{f.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeerProcedure() {
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
        {/* Left: Image */}
        <motion.div
           className="relative w-full md:w-1/2 h-72 md:h-[520px] rounded-t-[100px] rounded-bl-[100px] rounded-br-2xl overflow-hidden shadow"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/service/TEER/1.webp"
            alt="TEER Procedure"
            width={1000}
            height={1000}
            className="object-cover rounded-xl"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
           <p
            style={{ letterSpacing: "2px" }}
            className="text-gray-600 text-base font-medium tracking-wide flex items-center justify-start gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
             <Image width={25} height={25} src="/images/icon/Ellipse 3.svg" alt="" />
            </span>{" "}
            ABOUT
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
           What is TEER Surgery/Procedure?
          </h2>


          <p className="mt-4 leading-relaxed text-gray-600">
            TEER, or Transcatheter Edge-to-Edge Repair, is a minimally invasive procedure in Mumbai
            used to treat leaky mitral valves (mitral regurgitation). Instead of open-heart surgery,
            TEER uses a catheter to clip the mitral valve leaflets together, reducing the backflow of blood.
          </p>

          <p className="text-lg text-gray-700">
            Two widely used TEER devices are:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">MitraClip</h3>
             <p
              className="text-md text-gray-600"
              dangerouslySetInnerHTML={{
                __html: `Used to treat <a href="https://heartvalveexperts.com/blog/mitraclip-procedure" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">mitral valve regurgitation</a>, where the valve between the left atrium and left ventricle doesn’t close fully, causing blood to flow backward into the lungs. <a href="https://heartvalveexperts.com/blog/mitraclip-procedure" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-red-500" style="text-decoration: none;">MitraClip</a> is a minimally invasive TEER device that clips the valve leaflets together to reduce the leak.`,
              }}
            />


            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">MyClip</h3>
              <p className="text-md text-gray-600">
                A pioneering Indian TEER device, MyClip treats mitral regurgitation similarly to MitraClip, with
                multiple clip angles and advanced deployment features. Heart Valve Experts (HVE) were the first
                to study and bring MyClip to India, performing the first human trial in the country.
              </p>
            </div>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}

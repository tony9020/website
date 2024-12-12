"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <div className="container mx-auto p-8">
  <h2 className="text-3xl font-bold mb-8">Participating Entities</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex items-center gap-5">
      <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <p className="text-metatitle2 font-semibold text-black dark:text-white">01</p>
      </div>
      <div className="w-full">
        <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">Health Leadership</h3>
        <p>Health leadership from GCC Ministries of Health and various government patient referral authorities.</p>
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <p className="text-metatitle2 font-semibold text-black dark:text-white">02</p>
      </div>
      <div className="w-full">
        <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">Medical Committees</h3>
        <p>Members of specialized medical committees responsible for referring patients for treatment abroad.</p>
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <p className="text-metatitle2 font-semibold text-black dark:text-white">03</p>
      </div>
      <div className="w-full">
        <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">GCC Health Offices</h3>
        <p>Heads of GCC health offices authorized for patient referrals.</p>
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <p className="text-metatitle2 font-semibold text-black dark:text-white">04</p>
      </div>
      <div className="w-full">
        <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">Health Economics Experts</h3>
        <p>Experts and consultants specializing in health economics, cost rationalization, and governance of treatment abroad.</p>
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <p className="text-metatitle2 font-semibold text-black dark:text-white">05</p>
      </div>
      <div className="w-full">
        <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">Hospitals and Medical Centers</h3>
        <p>Gulf and international hospitals and medical centers providing healthcare services to Gulf patients.</p>
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <p className="text-metatitle2 font-semibold text-black dark:text-white">06</p>
      </div>
      <div className="w-full">
        <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">Technology Companies</h3>
        <p>Technology companies developing digital health applications and systems.</p>
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <p className="text-metatitle2 font-semibold text-black dark:text-white">07</p>
      </div>
      <div className="w-full">
        <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">Private Gulf Hospitals</h3>
        <p>Private Gulf hospitals.</p>
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <p className="text-metatitle2 font-semibold text-black dark:text-white">08</p>
      </div>
      <div className="w-full">
        <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">Health Insurance Companies</h3>
        <p>Health insurance companies and claims management organizations.</p>
      </div>
    </div>
  </div>
</div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Launch Your SaaS Fast
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Packed with All Essential {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Integrations
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;

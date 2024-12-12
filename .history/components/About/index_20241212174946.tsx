"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-5">
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
              className="animate_top relative mx-auto hidden aspect-[400/250]  md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-dark-01.jpg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.jpg"
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
              className="animate_right md:w-full justify-center flex flex-wrap "
            >
              <span className="font-medium uppercase text-black dark:text-white">
  Participating Entities
</span>

<h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
  A Complete Solution for Healthcare Partnerships
</h2>

<p>
  Connect with key stakeholders shaping the future of global healthcare through our Kuwait International Treatment Abroad (KITA) Conference & Inhealth Exhibition.
</p>

<div className="mt-7.5 flex items-center gap-5 w-1/2">
  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
    <p className="text-metatitle2 font-semibold text-black dark:text-white">
      01
    </p>
  </div>
  <div className="w-3/4">
    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
      GCC Ministries of Health & Government Patient Referral Authorities
    </h3>
    <p>Representatives from across the Gulf Cooperation Council countries.</p>
  </div>
</div>

<div className="mt-7.5 flex items-center gap-5 w-1/2" >
  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
    <p className="text-metatitle2 font-semibold text-black dark:text-white">
      02
    </p>
  </div>
  <div className="w-3/4">
    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
      Specialized Medical Committees
    </h3>
    <p>Experts responsible for patient referrals abroad.</p>
  </div>
</div>

<div className="mt-7.5 flex items-center gap-5 w-1/2">
  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
    <p className="text-metatitle2 font-semibold text-black dark:text-white">
      03
    </p>
  </div>
  <div className="w-3/4">
    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
      GCC Health Offices
    </h3>
    <p>Authorized for patient referrals and coordination.</p>
  </div>
</div>

<div className="mt-7.5 flex items-center gap-5 w-1/2">
  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
    <p className="text-metatitle2 font-semibold text-black dark:text-white">
      04
    </p>
  </div>
  <div className="w-3/4">
    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
      Health Economics & Treatment Abroad Experts
    </h3>
    <p>Consultants specializing in cost rationalization and governance.</p>
  </div>
</div>

<div className="mt-7.5 flex items-center gap-5 w-1/2">
  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
    <p className="text-metatitle2 font-semibold text-black dark:text-white">
      05
    </p>
  </div>
  <div className="w-3/4">
    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
      Gulf & International Hospitals
    </h3>
    <p>Providers of healthcare services to Gulf patients.</p>
  </div>
</div>

<div className="mt-7.5 flex items-center gap-5 w-1/2">
  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
    <p className="text-metatitle2 font-semibold text-black dark:text-white">
      06
    </p>
  </div>
  <div className="w-3/4">
    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
      Technology Companies
    </h3>
    <p>Developers of digital health applications and systems.</p>
  </div>
</div>

<div className="mt-7.5 flex items-center gap-5 w-1/2">
  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
    <p className="text-metatitle2 font-semibold text-black dark:text-white">
      07
    </p>
  </div>
  <div className="w-3/4">
    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
      Private Gulf Hospitals
    </h3>
    <p>Representatives from independent healthcare providers.</p>
  </div>
</div>

<div className="mt-7.5 flex items-center gap-5 w-1/2">
  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
    <p className="text-metatitle2 font-semibold text-black dark:text-white">
      08
    </p>
  </div>
  <div className="w-3/4">
    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
      Health Insurance Companies & Claims Management Organizations
    </h3>
    <p>Providers of insurance services and claims management solutions.</p>
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
              Book Your Stay
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Experience Luxury at  {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                Jumeirah Messilah Beach Hotel
                </span>
              </h2>
              <p>
              Located on Kuwait's stunning coastline, Jumeirah Messilah Beach Hotel & Spa offers elegant rooms, award-winning dining, and a tranquil spa. Book your stay now and enjoy unforgettable moments of indulgence.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                  Book Now
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

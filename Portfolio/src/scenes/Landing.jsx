import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {avatar} from "../assets"



const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); 

return (
    <section id = "home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-8"> 
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
            {isAboveMediumScreens ? (
                <div
                className="relative z-0 ml-20 before:absolute before:-top-5 before:-left-5 
                before:w-full before:max-w-[400px] md:before:max-w-[400px] before:h-full before:border-2 before:border-accent before:z-[-1]"
                >
                  <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                before:w-full before:max-w-[400px] md:before:max-w-[400px] before:h-full before:border-2 before:border-accent before:z-[-1]">
                   <img
                        alt="profile"
                        className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src= {avatar}
                    />

                  </div>
                </div>
            ) : (
                <img 
                alt="profile"
                className="z-10 w-full max-w-[300px] md:max-w-[500px]"
                src= {avatar}
                />   
            )}
        </div>
        {/* MAIN SECTION */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
            {/* HEADINGS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
            <p className="text-4xl font-playfair z-10 text-center md:text-start">
                Katherine Thames{""}
                {/* <span
                className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                >Thames</span> */}
            </p>

            <p className="mt-10 mb-7 text-sm text-center md:text-start">
            I love receiving new information and altering my view on the world because of it. When I was in elementary school, I hated it because there always seemed to be a wall at the end of my learning or there was a teacher who wasn't taking me seriously as a student and that feeling continued until I got to college. I didn't have a plan on what I wanted to do but I knew that I could learn so much if I pursued engineering. 
As I started Biomedical Engineering at the University of Texas at Dallas, I was overwhelmed with so much information but the feeling of understanding topics that I had previously never seen before was extremely fulfilling. I was in complete awe of my professors who held far more education and wisdom than I did and they inspired me so much to continue to learn. When I graduated from college, I wasn't able to stay at one job for long due to moving between California and Texas, but during my time as a Data Coordinator at Medpace and an Infusion Device Repair Technician and BD I was still able to learn so much. Not just from the job itself but from my colleagues as well. 
In the beginning of 2023, and after another move, I found myself unemployed and itching to find myself another learning environment to immerse myself in. I decided that I should pursue coding, as I reflected on the classes and projects that I had enjoyed the most during college. I began to pursue a certificate in Full Stack Web Development from the University of California Berkeley. I now truly feel like I am on the right path towards finding a career in software development and towards a future of continuous learning.
            </p>
            </motion.div>

            {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-white rounded-sm py-3 px-7 font-semibold
             hover:text-neutral transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-1 pr-0.5"
            onClick={() => setSelectedPage("projects")}
            href="#projects"
          >
            <div className="bg-base-100 text-secondary hover:text-accent transition duration-500 w-full h-full flex items-center justify-center px-10 font-semibold">
              My Work
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>

        </div>
    </section>
    )
}

export default Landing;
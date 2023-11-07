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
        <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                animate={{ x: 100 }}
                transition={{ type: "spring", stiffness: 100 }}
                variants={{
                    hidden: { opacity: 0, x: 150 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
            {isAboveMediumScreens ? (
                <div
                className="relative z-0 ml-20 before:absolute before:-top-5 before:-left-5 
                before:w-full before:max-w-[400px] md:before:max-w-[400px] before:h-full before:border-2 before:border-accent before:z-[-1]"
                >
                  <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                before:w-full before:max-w-[400px] md:before:max-w-[400px] before:h-full before:border-2 before:border-accent before:z-[-1]">
                   <img
                        alt="profile"
                        className="brightness-90 hover:filter-none transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
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
            </motion.div>
        </div>
        {/* MAIN SECTION */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
            {/* HEADINGS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                animate={{ x: 100 }}
                transition={{ type: "spring", stiffness: 100 }}
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
            Welcome to my portfolio, I am a fullstack developer currently looking for employment within a company that strives for quality and providing healthcare to the public. I enjoy working in a fast paced enviornment, learning new coding skills and developing projects within a hard-working team. Aside from my interests in software development and biomedical engineering, I enjoy CrossFit, digital art and spending time with my dogs. I am very proud of all that I have accomplished and I cannot wait to start my career in software development to continue learning all that I can.  
            </p>
            </motion.div>

            {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          animate={{ x: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
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
          animate={{ x: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
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
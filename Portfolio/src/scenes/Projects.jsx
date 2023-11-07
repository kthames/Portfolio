import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { stocktrader, passwordgenerator, hyperadar, javaquiz, ublog, workdayscheduler, jate, weatherforecast, github } from "../assets";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, linkD, linkG, image}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-neutral z-30 flex flex-col justify-center items-center text-center p-16 text-base-100`;
  const projectButtons = `flex justify-around w-full md:w-3/4 p-2 mt-2`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div 
      variants={projectVariant} 
      className="relative max-w-[400px] max-h-[400px]"
    >
      <div className={overlayStyles}>
        <p className="text-xl font-playfair">{title}</p>
        <div className={projectButtons}>
        <a 
          href={linkD}
          target="_blank" 
          rel="noreferrer"
         >
          <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
            App
          </button>
        </a>
        <a 
          href={linkG}
          target="_blank" 
          rel="noreferrer"
         >
          <button className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded">
            GitHub
          </button>
        </a>
        </div>
      </div>
      <img src={image} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-36 pb-36">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-accent">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Please check out my projects below! Through all of these projects I have learned so many new skills and I have built my confidence in software development. 
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project title="Stock Trader" linkD="https://floating-wildwood-52719-0a69bbab7cea.herokuapp.com/login" linkG="https://github.com/Fy50167/stock-trader" image={stocktrader}/>
          <Project title="Ublog" linkD="https://ublog-50a16cea80fc.herokuapp.com/" linkG="https://github.com/kthames/Blog" image={ublog}/>
          <Project title="Hype Radar" linkD="https://fabioesilveira.github.io/hype-radar/" linkG="https://github.com/fabioesilveira/hype-radar" image={hyperadar}/>


          {/* ROW 2 */}
          <Project title="Work Day Scheduler" linkD="https://kthames.github.io/WorkDayScheduler/" linkG="https://github.com/kthames/WorkDayScheduler" image={workdayscheduler}/>
          <Project title="Weather Forecast" linkD="https://kthames.github.io/WeatherForecast/" linkG="https://github.com/kthames/WeatherForecast" image={weatherforecast}/>
          <Project title="Java Quiz" linkD="https://kthames.github.io/JavaScriptQuiz/" linkG="https://github.com/kthames/JavaScriptQuiz" image={javaquiz}/>

          {/* ROW 3 */}
          <Project title="Password Generator" linkD ="https://kthames.github.io/PasswordGenerator/" linkG="https://github.com/kthames/PasswordGenerator" image={passwordgenerator}/>
          <Project title="JATE" linkD="https://glacial-bastion-95249-d644ed8d4741.herokuapp.com/" linkG = "https://github.com/kthames/TextEditor" image={jate}/>
          <div
            className="flex justify-center text-center items-center p-10 bg-primary
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            <p>VISIT MY GITHUB </p>
            <a
          className="hover:opacity-50 transition duration-500 mt-3 relative pr-5 pl-6"
          href="https://github.com/kthames"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="github-link" src={github} className="max-w-[300px] max-h-[300px]" />
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { resume } from "../assets";

const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch(resume).then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "KatherineThames_Resume.pdf";
            alink.click();
        });
    });
   }   

  return (
    <section id="resume" className="py-36">
      {/* HEADING & BUTTON*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-evenly w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            RESU<span className="text-accent">ME</span>
          </p>
          <div className="flex md:justify-center my-5">
            <LineGradient width="w-3/4" />
          </div>
        </div>
      </motion.div>

      {/* RESUME PAGE */}
      <div className="md:flex gap-16 mt-5 justify-center">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <button className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded" onClick={onButtonClick}>
            Download PDF
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
import LineGradient from "../components/LineGradient";

import { motion } from "framer-motion";
import { resume } from "../assets";
import AllPages from "../components/AllPages";

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import useMediaQuery from "../hooks/useMediaQuery.jsx"


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
          <div className="flex justify-center my-5">
            <LineGradient width="w-3/4" />
          </div>
        </div>
      </motion.div>

      {/* RESUME PAGE */}
      
      <div className="flex justify-evenly w-full mt-2">
          <div className="flex sm:display-none">
            <AllPages pdf={resume} />
          </div>  
      </div>
      <div className="flex justify-evenly w-full mt-4">
          <button className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded" onClick={onButtonClick}>
                Download PDF
          </button>
      </div>
    </section>
  );
};

export default Resume;
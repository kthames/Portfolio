import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-10 px-6" >
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full mt-24"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-accent">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-center my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM  */}
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
          className="basis-1/2 md:mt-0 py-10 px-20 bg-primary rounded-lg drop-shadow-lg"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/bcadf3807c7a58a5993d7a037701d65c"
            method="POST"
          >
            <input
              className="w-full bg-white font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-error mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-error mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-error mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 bg-gradient-rainblue w-full font-semibold text-deep-blue mt-5 hover:bg-error hover:text-neutral transition duration-500 rounded-md"
              type="submit"
            >
              SEND TO EMAIL: K.THAMES@ME.COM
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-neutral pt-14">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center text-center ">
          <p className="font-playfair font-semibold text-2xl text-accent">
            KATHERINE THAMES
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
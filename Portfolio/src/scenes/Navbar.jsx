import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery.jsx"
import { menuIcon, closeIcon } from "../assets/index.js";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-neutral" : ""
        } hover:text-accent transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    );
  };

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)"); 
    //console.log(isAboveSmallScreens);
    const navbarBackground = isTopOfPage ? "" : "bg-gradient-rainblue";

    return (
        <nav className = {`${navbarBackground} z-40 w-full sm:max-w-9/12 justify-center fixed top-0 py-3 mb-4`}> 
            <div className="flex items-center justify-between px-5 m-0">
            {/* <div className="flex items-center justify-between mx-auto pb-4 w-5/6"> */}
             <h4 className="font-playfair text-3xl font-bold">KT</h4>

                {/*DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-playfair text-md font-semibold">
                        <Link
                            to="/"
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            to="/Skills"
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            to="/Projects"
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            to="/Resume"
                            page="Resume"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            to="/Contact"
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button className = "rounded-full bg-secondary p-2 mt-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img alt="menu-icon" src={menuIcon}></img>
                    </button>
                )}

                {/* MOBILE MENU POPUP*/}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full w-10/12 bg-accent">
                        {/* CLONE ICON */}
                        <div className = "flex justify-end"> 
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src = {closeIcon}/>
                            </button>
                        </div>
                        {/* MENU ITEMS */}
                        <div className ="flex flex-col gap-10 ml-[33%] text-2xl text-base-100 font-playfair">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Resume"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>

                    </div>
                )}
            </div>
        </nav>
    )
}



export default Navbar;
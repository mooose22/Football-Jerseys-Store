import Navbar from "../components/navBar";
import photo from "../assets/nav_bar.webp";
import JerseysCard from "../components/JerseysCard";
import TypingEffect from "../utils/typingEffect";

const JerseysPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center mt-6">
        <img
          src={photo}
          alt="Soccer Jersey Collage"
          style={{ height: "500px", width: "60%" }}
        />
      </div>

      <div className="text-center my-8 mx-auto p-4 h-20 overflow-hidden font-bold text-2xl text-secondary leading-normal tracking-wide">
        Shop <TypingEffect />
      </div>

      <JerseysCard />
    </>
  );
};

export default JerseysPage;

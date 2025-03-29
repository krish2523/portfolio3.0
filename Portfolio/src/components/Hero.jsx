import image from "/public/image.jpg";
const Hero = () => {
  return (
    <div
      id="home"
      className=" px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justofy-center gap-10 text-white">
        <div>
          <img src={image} alt="" className="w-[300px] h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

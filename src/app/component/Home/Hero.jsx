const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-300 h-screen overflow-hidden ">
        <div className="flex justify-between items-center h-60">
          <div className="px-10">
            <p>Modern I Business I Consultan</p>
            <h2 className="text-5xl font-bold">Digital Solution Business</h2>
            <p>We're Best Consultant Agency In Market</p>

            <button className="btn absolute overflow-hidden bg-[#EA2931] uppercase mt-6 w-44">Discover more
              <div className="h-10 absolute -right-5 rounded-3xl bg-[#BD1D33]  w-10"></div>
            </button>
          </div>
          <div className="h-[500px] w-[50%] left-0">
            <img src="/image/hero.webp" alt="Hero Image" className="h-[700px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

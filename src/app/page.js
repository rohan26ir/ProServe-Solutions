import Hero from "./component/Home/Hero";
import HomeCard from "./component/Home/HomeCard";
import Newsletter from "./component/Home/Newsletter";
import OurBlog from "./component/Home/OurBlog/OurBlog";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <header>
      <Hero></Hero>
      </header>
      
      <main className="">
        
        <div className="py-5">
          <HomeCard></HomeCard>
        </div>

        <div className="py-5">
          <OurBlog></OurBlog>
        </div>


        <div className="py-5"> 
          <Newsletter></Newsletter>
        </div>
      </main>

      

    </div>
  );
}

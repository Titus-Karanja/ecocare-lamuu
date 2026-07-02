import heroImage1 from "../assets/images/hero-image-1.jpg"
import heroImage2 from "../assets/images/environmental-news.jpg"
import heroImage4 from "../assets/images/hero-image-4.jpg"
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return <section

    id="hero"
    className="relative min-h-screen h-100vh  px-4 pt-20 mt-0 bg-border/20 "
  >
    <div className="container text-center flex flex-col items-center justify-center w-full h-screen ">


      <div className="relative md:grid grid-cols-8 md:grid-rows-8 h-screen">
        <div className="bg-black col-span-5 row-span-6 overflow-hidden flex items-center justify-center">
          <h1 className="absolute md:mb-30 text-3xl md:text-4xl font-bold z-10 rounded w-auto bg-card/60 border-5 border-solid border-foreground p-4 md:p-10">
            <span className="opacity-0 animate-fade-in bg-card rounded pl-2"> Eco</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 bg-card">Care</span>
            <span className="text-gradient ml-0 opacity-0 animate-fade-in-delay-2 bg-card rounded pr-2" > Initiative</span>

          </h1>
          <img src={heroImage2} alt="conservationImage" className="relative w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>
        <div className=" hidden md:relative md:flex items-end justify-center bg-white col-span-3 row-span-4 overflow-hidden">
          <img src={heroImage1} alt="conservationImage" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          <h3 className="absolute text-white mb-10 font-bold z-20 w-auto bg-black/50 border-2 border-solid border-white p-4">
            Lamu's Youth, Caring for Tomorrow.
          </h3>
        </div>
        <div className="hidden md:relative display-none md:flex items-center justify-center bg-primary col-span-3 row-span-4 overflow-hidden">
          <img src={heroImage4} alt="conservationImage" className="relative w-full h-full md:object-cover transition-transform duration-500 hover:scale-110" />
          <h3 className="absolute text-white mb-10 font-bold z-20 w-auto bg-black/50 border-2 border-solid border-white p-4">
            We are Safeguarding Lamu's UNESCO World Heritage for the Generations Who Will Call it Home.
          </h3>
          <div className="absolute z-25 pt-4 opacity-0 animate-fade-in-delay-4 hover:scale-110 transition-all mt-30 ">
            <a href="#contribution" className="button py-4 px-12 transition-all hover:bg-background hover:text-xl hover:text-border" >
              Get Involved
            </a>
          </div>
        </div>
        <div className="bg-foreground col-span-5 row-span-2 display-none md:flex items-center justify-center" >
          <p className=" text-sm md:text-lg text-background h-full max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 pt-2">
            Lamu has been recognized by the world as a place worth protecting. We agree. Eco Care Initiative brings together the youth of Lamu County to do the daily, hands-on work of conservation, cleaning beaches, planting trees, and building a generation that understands why it matters. This island is irreplaceable. So is the work.
          </p>
        </div>


      </div>
      <div className="absolute bottom-8 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2 bg-background p-1 rounded-lg">Scroll</span>
        <ArrowDown className="text-primary h-5 w-5" />
      </div>
    </div>







  </section>
}
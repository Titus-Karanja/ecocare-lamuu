import image1 from "../assets/images/hero-image-3.jpg"

const imagebg = `${image1}`

export default function GetInvolvedSection() {
  return <section id="contribution" className="py-24 px-4 relative min-h-screen bg-border/20">
    <div className="container mx-auto ">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get <span className="text-primary">Involved</span>
      </h2>
      <p className="font-medium bg-card/60 rounded text-bold p-4 text-center text-2xl text text-muted-foreground mb-8 max-w-4xl mx-auto">
        Eco Care Initiative is built by people who chose to <span className="font-bold">Act</span>. <span className="font-bold">Donate</span> to keep the work running, <span className="font-bold">Join Us</span> on the ground, or simply send us a <span className="font-bold">Message</span>, the door is <span className="font-bold text-bold">Open</span>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3vw] mb-10">
        <div id="join" className="relative">
          <h3 className="font-semibold bg-white/60 mb-4 rounded border-solid border-1 border-black text-xl">Join Our Team</h3>

          <div className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-[60vh] overflow-hidden">
              <p className="absolute z-10 mb-4 text-left p-6  bottom-6 bg-black/60 text-white rounded-5">
                The work happens on the ground, in the water, and in classrooms across Lamu County. If you live here, or care about this place, there is a role for you. Show up for a clean-up. Mentor a student. Plant a tree. Small actions, taken consistently, are how change actually happens.
              </p>
              <img src={imagebg} alt="Join Team image" className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <a className=" button z-20 absolute bottom-4 right-2 hover:scale-110">
                Join Our Team
              </a>
            </div>
          </div>
        </div>
        <div id="donate" className="relative">
          <h3 className="font-semibold bg-white/60 mb-4 rounded border-solid border-1 border-black text-xl">Donate</h3>

          <div className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-[60vh] overflow-hidden">
              <p className="absolute z-10 mb-4 text-left p-6  bottom-6 bg-black/60 text-white rounded-5">
                Eco Care Initiative runs on commitment, and resources. Every contribution funds seedlings, clean-up supplies, school programs, and the operational costs of keeping a young organization moving. No grant language, no overhead mystery. Your money goes directly into the work. If Lamu matters to you, this is a direct way to show it.
              </p>
              <img src={imagebg} alt="donate image" className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <a className="absolute z-20 bottom-4 right-2 button hover:scale-110">
                Donate
              </a>
            </div>
          </div>
        </div>
        <div id="inTouch" className="relative">
          <h3 className="font-semibold bg-white/60 mb-4 rounded border-solid border-1 border-black text-xl">Get in Touch</h3>

          <div className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-[60vh] overflow-hidden">
              <p className="absolute z-10 mb-4 text-left p-6  bottom-6 bg-black/60 text-white rounded-5">
                We are always open to partnerships, collaborations, and conversations. Whether you are an NGO, a school, a business, or an individual who wants to understand what we do — reach out. Good environmental work rarely happens alone, and we are not interested in working in isolation. Let's talk.
              </p>
              <img src={imagebg} alt="Talk to Us image" className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <a className="absolute z-20 bottom-4 right-2 button hover:scale-110">
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
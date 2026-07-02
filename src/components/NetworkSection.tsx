import safarilogo from "../assets/icons/safari_swimming_logo.svg"
import localRadioLogo from "../assets/icons/local_radio_logo.svg"
import cusfaslogo from "../assets/icons/cusfas_logo.svg"

const ourNetworks = [
  {
    id: 1,
    name: "Safari Swimming Organisation",
    logo: `${safarilogo}`,
    heading: "Collaborated in street and beach clean-up initiatives.",
    information: "Safari Swimming Organisation has been a consistent presence on the ground in Lamu County. Together, we have taken on some of the most polluted stretches of coastline — side by side, bag by bag. Their commitment to community action makes them a natural partner for the work Eco Care Initiative does every day."
  },
  {
    id: 2,
    name: "CUSFAS Limited",
    logo: `${cusfaslogo}`,
    heading: "Partnered in community and beach clean-up projects.",
    information: "CUSFAS Limited brings operational support and coordination to our street and beach clean-up initiatives. Their involvement has helped us scale our efforts, reach more areas, and dispose of waste responsibly. A partnership built on shared values and a shared environment."
  },
  {
    id: 3,
    name: "Local Radio Stations",
    logo: `${localRadioLogo}`,
    heading: "Platform for broadcasting environmental awareness messages to the wider community.",
    information: "Reaching the community means going where the community already is. Our local radio partners have given Eco Care Initiative a platform to broadcast environmental awareness messages across Lamu County — bringing conservation conversations into homes, businesses, and schools far beyond what our ground teams can reach alone."
  },
]

export default function NetworkSection() {
  return <section id="network" className="py-24 px-4 relative">
    <div id="partners" className="container mx-auto  max-w-5xl min-h-screen">
      <h2 className="text-3xl  md:text-4xl font-bold mb-12 text-center">
        Network <span className="text-primary"> Section</span>
      </h2>
      <p className="font-bold bg-card/60 rounded text-bold p-4 text-center text-2xl text text-muted-foreground mb-8 max-w-2xl mx-auto">
        We Do Not Work Alone. <br /> Here are Some of Our Collaborations.
      </p>

      <div className="grid grid-cols-1 gap-[10vh]">
        {ourNetworks.map((network, key) => (
          <div key={key} className=" bg-card rounded-lg overflow-hidden shadow-xs card-hover grid grid-cols-3 gap-6 md:h-[40vh]">
            <div className="bg-primary flex flex-col">
              <h3 className="flex flex-start p-4 bg-black/50 rounded text-white font-bold ">{network.name}</h3>

              <img src={network.logo} alt={network.logo} className="h-[25vh] md:h-[30vh] object-cover rounded-full m-auto transition-transform duration-500 hover:scale-110" />

            </div>
            <div className="bg-card col-span-2">
              <h3 className="text-sm p-2 text-left md:text-lg  bg-white/70 rounded bolder-solid border-black border-1 mr-6 font-bold mt-6">
                {network.heading}
              </h3>
              <p className=" text-tiny md:text-base overflow-y-auto h-[25vh] md:h-auto  mt-2 p-2 text-left">
                {network.information}
              </p>
            </div>
          </div>

        ))}
      </div>
    </div>
  </section>
}






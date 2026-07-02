import man from "../assets/images/man.jpg"
import woman from "../assets/images/woman.jpg"
import whatWeDo from "../assets/images/hero-image-1.jpg"
import WhatWedo from "./WhatWeDo"
const image2 = `${whatWeDo}`

const teamMembers = [
  {
    id: 1,
    photo: `${woman}`,
    name: "Ann Karanja ",
    title: "Chairperson",
  },
  {
    id: 2,
    photo: `${man}`,
    name: "Daniel Kazungu ",
    title: "Assistant Chairperson",
  },
  {
    id: 3,
    photo: `${woman}`,
    name: "Hellen Kibe ",
    title: "Secretary",
  },
  {
    id: 4,
    photo: `${man}`,
    name: "Esha Bakari ",
    title: "Assistant Secretary",
  },
  {
    id: 5,
    photo: `${man}`,
    name: "Samwel Ngure ",
    title: "Treasurer",
  },
  {
    id: 6,
    photo: `${woman}`,
    name: "Eunice Waithira ",
    title: "Member",
  },
  {
    id: 7,
    photo: `${man}`,
    name: "Said Abdalla ",
    title: "Member",
  },
]
export default function AboutSection() {
  return <section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Us</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-1 gap-[10vh] mb-10">
      <div id="whoUs" className="flex flex-col items-center md:block h-[60vh] group bg-card/30 rounded-lg overflow-hidden shadow-xs card-hover md:text-left">
        <h3 className="justify-self-center font-semibold text-xl md:text-2xl my-8 md:ml-[18vw] p-3 w-[25vw] rounded bg-white/50 border-solid border-1 border-black">
          Who We Are
        </h3>
        <div className="flex">
          <div className="hidden md:flex vw-[45vw] hover:gap- max-w-[45vw] h-50">
            <img className="sticky left-4  -mt-4 -mr-8 w-[15vw] hover:w-full hover:z-31 hover:-mt-10 rounded border-solid border-4 border-white" src={image2} alt="What we do Image" />
            <img className="-mt-8 w-[15vw] z-30 hover:w-full hover:-mt-10 rounded border-solid border-4 border-white" src={image2} alt="What we do Image" />
            <img className="sticky right-[52vw]  -mt-4 -ml-8 w-[15vw] hover:w-full hover:z-31 hover:-mt-10 rounded border-solid border-4 border-white" src={image2} alt="What we do Image" />
          </div>
          <p className="mb-4 md:w-[45vw] ml-14 mr-4 pr-6">
            Eco Care Initiative is a youth-led community organization based in Lamu County, Kenya. We are registered, rooted, and driven by one conviction: that the people who live here are the ones best placed to protect it. Founded in 2024 by young people who saw a problem and decided to act, we work at the intersection of environmental conservation and community empowerment. We are not outsiders with a plan. We are Lamu.
          </p>

        </div>
      </div>
      <div id="doWhat" className="flex flex-col items-center md:block h-[60vh] group bg-card/30 rounded-lg overflow-hidden shadow-xs card-hover md:text-left ">
        <h3 className="font-semibold text-xl md:text-2xl my-8 mx-10 p-3 w-[25vw] rounded bg-white/50 border-solid border-1 border-black">
          What We Do
        </h3>
        <div className="container flex gap-6">
          <p className=" mb-4 md:w-[45vw] ml-4 ">
            We clean beaches. We plant trees. We walk into schools and show students what environmental stewardship looks like in practice. We partner with local organizations, speak on community radio, and show up consistently for the places and people that make Lamu worth protecting. From Wiyoni Beach to the classrooms of Lamu's secondary schools, Eco Care Initiative runs programs that are hands-on, community-driven, and built to last. The work is unglamorous. It is also essential.
          </p>
          <div className="
          hidden md:flex w-[45vw] h-60 -mt-14 mb-  rounded">
            <WhatWedo />
          </div>

        </div>

      </div>
    </div>

    <div id="team" className="container">
      <div className="mb-6 flex justify-center items-center ">
        <h2 className="font-semibold text-2xl m-4 px-4 py-1 md:w-[25vw] bg-white rounded border-solid border-1 border-black">Team Members</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2vw] mb-10">
        {teamMembers.map((member, key) => (
          <div key={key} className="group bg-white overflow-hidden shadow-xs card-hover">
            <div className="h-30 overflow-hidden rounded-full">
              <img src={member.photo} alt={member.title} className=" w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 " />
            </div>
            <div className=" p-2 flex items-end bg-card text-">
              <div className="mb-2">
                <h3 className="mb-2 text-lg text-xl text-left bg-white/60 border-solid border-1 border-black rounded font-semibold px-3">{member.name}</h3>
                <h3 className="mb-2 text-left px-3">
                  {member.title}
                </h3>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>


  </section>
}

import { useState } from "react"
import blogImage from "../assets/images/eco-7.jpg"
import blog2Image from "../assets/images/eco-4.jpg"
import blog3Image from "../assets/images/eco-2.jpg"
import blog4Image from "../assets/images/eco-3.jpg"
import blog5Image from "../assets/images/eco-1.jpg"
import blog6Image from "../assets/images/eco-6.jpg"
import blog7Image from "../assets/images/eco-5.jpg"
import newsImage from "../assets/images/environmental-news.jpg"
import eventImage from "../assets/images/event-image.jpg"



const newsitems = [
  {
    id: 1,
    image: `${newsImage}`,
    title: "The Ocean Cannot Wait",
    heading: "Why Coastal Clean-Up Efforts Matter More Than Ever",
    body: "The world's oceans absorb roughly a third of the carbon dioxide humans produce and generate more than half ",
    moreContent: "of the oxygen we breathe. Yet every year, millions of tonnes of plastic waste enter marine ecosystems, threatening the delicate balance that coastal communities and marine life depend on. The problem is visible, measurable and still growing."
  }
]
const eventsItems = [
  {
    id: 1,
    title: "Lamu Island Community Beach Clean-Up Day",
    date: "Saturday, 12th July 2026",
    heading: "Wiyoni Beach, Lamu Island 8:00 AM - 12:00 PM",
    description: "Eco Care Initiative invites volunteers, community members, students, and visitors to join us for ",
    image: `${eventImage}`,
    moreDetails: "a morning of hands-on environmental action at Wiyoni Beach. This is an open community event, no experience required, just a willingness to show up. Gloves and collection bags will be provided. Together, we will clean, we will connect, and we will leave the shore better than we found it. Be there."

  }
]

const blogItems = [
  {
    id: 1,
    title: "What a beach clean-up actually looks like",
    body: "People imagine it differently than it is. There is no ceremony. You show up, you put on gloves, and you start picking things up.",
    moreBody: "Last month on Wiyoni Beach, our volunteers collected bags of waste in a single morning plastic, foam, fishing line. The beach looked different by noon. That is the whole point. Show up enough times, and the difference becomes permanent.",
    active: false,
    image: `${blogImage}`,
  },
  {
    id: 2,
    title: "The Next Generation of Conservationists Is Already Here",
    body: "Nobody taught us to care about the environment from a textbook alone. Real understanding comes from ",
    moreBody: "getting your hands in the soil, standing on a beach and seeing what washes up, and being part of a community that takes its surroundings seriously. That is exactly what Eco Care Initiative believes — and it is why we go directly into school. Environmental clubs are now active in secondary schools across Lamu County.Students are not just learning facts about climate change.They are planting trees, monitoring growth, competing to see whose school takes the best care of its seedlings.They are becoming the kind of people who notice when something is wrong with their environment — and who know what to do about it. The habit of stewardship, built young, lasts a lifetime.That is the investment we are making.",
    active: false,
    image: `${blog2Image}`,
  },
  {
    id: 3,
    title: "Why Environmental Clubs Change More Than Just Schools",
    body: "An environmental club is not just an after-school activity. It is a shift in how a young person sees their ",
    moreBody: "role in their community. When students form clubs, elect leaders, set goals, and measure outcomes, they are practising citizenship — not just conservation. In Lamu County, we have seen what happens when young people are given responsibility for something real.They rise to it.They recruit friends.They go home and tell their families what they learned.One student becomes a messenger.A club becomes a movement. The change does not stay inside the school gates.It never does.",
    active: false,
    image: `${blog3Image}`,
  },
  {
    id: 4,
    title: "A Tree Is a Long Bet on the Future",
    body: "Planting a tree is an act of optimism. You will not sit under its shade for years. You will not eat its fruit today. You plant it because",
    moreBody: "you believe the future is worth preparing for — and because you understand that the environment does not recover on its own timeline. It recovers on ours. Eco Care Initiative has distributed fruit tree seedlings to secondary schools across Lamu County.Each seedling comes with responsibility, students monitor growth, report progress, and compete for recognition at the end of the year.The trees are not decorative.They are functional, educational, and permanent. In a place like Lamu, where ecosystems face real pressure, every tree planted is a statement.We intend to keep making it.",
    active: false,
    image: `${blog4Image}`,
  },
  {
    id: 5,
    title: "Fruit Trees, School Grounds, and the Logic of Planting Where People Are",
    body: "There is a reason EcoCare Initiative focuses its tree planting programs inside schools rather than ",
    moreBody: "in remote areas. Access matters. When trees are planted where students spend their days, those trees get watched. They get watered. They become part of daily life rather than a distant conservation statistic. Fruit trees add another layer.They produce something tangible — food, shade, income potential — that connects conservation directly to community benefit.Students understand the value of what they are growing.That understanding changes how they engage with the wider environment. Planting in schools is not a compromise.It is a strategy.",
    active: false,
    image: `${blog5Image}`,
  },
  {
    id: 6,
    title: "Conservation Is Not a Solo Project",
    body: "No single organisation cleans up a coastline. No single group reverses decades of environmental neglect. What works is",
    moreBody: " coordination — organisations with different strengths showing up in the same place, at the same time, with the same goal.Eco Care Initiative has learned this firsthand.Our beach and street clean- up programs run in partnership with Safari Swimming Organisation and CUSFAS Limited.Local radio stations amplify our message beyond what any ground team can reach.Schools host our programs and their students carry the work home.The partnerships are not ceremonial.They are operational.And the work is stronger for them.",
    active: false,
    image: `${blog6Image}`,
  },
  {
    id: 7,
    title: "Lamu's Beaches Deserve Better Than What Washes Up",
    body: "Wiyoni Beach does not have a waste problem because people in Lamu do not care. It has a waste problem because ",
    moreBody: "waste management systems are under pressure, habits take time to change, and plastic travels far from wherever it starts. Caring is not the issue. Systems and sustained action are. That is what Eco Care Initiative brings.Not lectures.Not shame.Just consistent, organised clean- up efforts — gloves, bags, people, and a plan.We work the beaches, the streets, and the public areas that see the most use and the least attention. Every clean - up changes the baseline.Do it enough times, and the baseline stays changed.",
    active: false,
    image: `${blog7Image}`,
  },
]


export default function MediaSection() {
  const [morenews, setMoreNews] = useState(false)
  const [activityDetails, setActivityDetails] = useState(false)
  const [blogElements, setBlogElements] = useState(blogItems)

  const toggleActive = (id: number) => setBlogElements(prevElements => prevElements.map(item => item.id === id ? { ...item, active: !item.active } : item))



  return <section id="media" className="relative min-h-screen py-24 px-4 bg-border/20">
    <div className="container mx-auto ">
      <h2 className="text-3xl  md:text-4xl font-bold mb-10 text-center">
        Media <span className="text-primary"> Center</span>
      </h2>
      <p className="font-bold bg-card/60 rounded px-0 text-bold py-4 text-center text-2xl Md:text-3xl text text-muted-foreground mb-8 max-w-2xl mx-auto">What Conservation Looks Like Here </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] mb-16">
        <div id="news" className="relative">
          <h3 className="font-semibold bg-white/60 mb-4 rounded border-solid border-1 border-black text-xl">News Articles</h3>
          {newsitems.map((news, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs ">
              <div className="relative h-[60vh] overflow-hidden">
                <h2 className="text-primary font-semibold bg-black/70 px-4 py-3 rounded-sm z-10 absolute flex flex-start top-3 left-4 border-solid border-2 border-white ">{news.title}</h2>
                <img src={news.image} alt={news.heading} className="static w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-4 h-auto  bg-black/60 text-card">
                <div className="flex flex-col items-start">
                  <h4 className="mb-6 font-semibold bg-white/60 rounded-sm text-black px-2 border-solid border-2 border-black">
                    {news.heading}
                  </h4>
                  <p className="mb-4 text-left">
                    {news.body}
                    <span>
                      {morenews && news.moreContent}
                    </span>
                  </p>
                  <a onClick={() => setMoreNews(!morenews)} className=" self-end button hover:scale-110">
                    {morenews ? "Hide" : "Read More"}
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>
        <div id="events" className="relative">
          <h3 className="font-semibold bg-white/60 mb-4 rounded border-solid border-1 border-black text-xl">Events</h3>
          {eventsItems.map((event, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs">

              <div className="relative h-[60vh] overflow-hidden">
                <h2 className="absolute top-2 left-2 text-primary font-semibold bg-black/70 px-4 py-3 rounded-sm z-10 mb-2 flex flex-start border-solid border-2 border-white ">{event.title}</h2>
                <h2 className="absolute top-24 z-15 left-2 flex flex-start bg-black/70 text-white bg-primary rounded-sm px-4 py-1 border-solid border-2 border-white">{event.date}</h2>

                <img src={event.image} alt={event.image} className=" w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>

              <div className="p-4 h-auto  bg-black/60 text-card">
                <div className="flex flex-col flex flex-start items-start">
                  <h4 className="mb-6 px-2 rounded-sm text-background font-bold bg-black/20 border-solid border-2 border-white">
                    {event.heading}
                  </h4>
                  <p className="mb-4 text-start">
                    {event.description}
                    <span>{activityDetails && event.moreDetails}</span>
                  </p>
                  <a onClick={() => setActivityDetails(!activityDetails)} className="self-end button hover:scale-110">
                    {activityDetails ? "Hide" : "Read More"}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div id="blogs" className="container">
        <div className="mb-6">
          <h2 className="font-semibold bg-white/60 mb-12 rounded border-solid border-1 border-black text-xl">Blogs</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2vw] mb-10">
          {blogElements.map((blog, key) => {

            return (
              (
                <div key={key} className={blog.active ? "relative  col-span-2 md:col-span-3 gap-6 mb-10 group bg-card rounded-lg overflow-hidden shadow-xs card-hover" : "relative h-75 group bg-card rounded-lg overflow-hidden shadow-xs card-hover"}>
                  <div className={blog.active ? "relative h-auto overflow-hidden" : "relative h-45 overflow-hidden"}>
                    <h3 className=" absolute z-25 top-2 mx-2 text-left mb-2 px-2 text-white font-semibold rounded  border-solid bg-black/50 border-2 border-white">{blog.title}</h3>
                    <img src={blog.image} alt={blog.image} className="w-full h-45 object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className=" p-2 h-full text-card">

                    <p className=" mb-10 text-left text-sm text-black">
                      {blog.body}
                      {blog.active && <span>{blog.moreBody}</span>}
                    </p>



                    <a key={blog.id} onClick={() => { toggleActive(blog.id) }} className="absolute bottom-2 right-2  cursor-pointer button text-tiny text-nowrap p-2 ml-2 hover:scale-110 ">
                      {blog.active ? "Hide" : "Read More"}
                    </a>
                  </div>

                </div>


              )
            )
          })}
        </div>
      </div>
    </div>

  </section >
}
import ecocarelogo from "../assets/icons/ecocare logo.svg"
import { useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"


const aboutDropDown = [
  { title: "Who We Are", href: "#whoUs" },
  { title: "What We Do", href: "#doWhat" },
  { title: "Team Members", href: "#team" },
]
const mediaDropDown = [
  { title: "News Articles", href: "#news" },
  { title: "Events", href: "#events" },
  { title: "Blogs", href: "#blogs" },
]
const networkDropDown = [
  { title: "Partnerships and Collaborations", href: "#partners" }
]
const contactDropDown = [
  { title: "Contact Information", href: "#contactInfo" },
  { title: "Follow the Journey on Socials", href: "#socials" },
  { title: "Send A Message", href: "#message" },
]
const contributionDropDown = [
  { title: "Join Our Team", href: "#join" },
  { title: "Talk To Us ", href: "#inTouch" },
  { title: "Donations", href: "#donate" },
]




const aboutList = aboutDropDown.map((item, key) => <a className="bg-card py-3 pl-2 mt-0 mx-0 text-foreground/80 hover:bg-card/80 hover:text-primary hover:scale-102 transition-all duration-300" key={key} href={item.href} >{item.title}</a>)
const mediaList = mediaDropDown.map((item, key) => <a className="bg-card py-3 pl-2 mt-0 mx-0 text-foreground/80 hover:bg-card/80 hover:text-primary hover:scale-102 transition-all duration-300" key={key} href={item.href} >{item.title}</a>)
const networkList = networkDropDown.map((item, key) => <a className="bg-card py-3 pl-2 mt-0 mx-0 text-foreground/80 hover:bg-card/80 hover:text-primary hover:scale-102 transition-all duration-300" key={key} href={item.href}>{item.title}</a>)
const contactList = contactDropDown.map((item, key) => <a className="bg-card py-3 pl-2 mt-0 mx-0 text-foreground/80 hover:bg-card/80 hover:text-primary hover:scale-102 transition-all duration-300" key={key} href={item.href}>{item.title}</a>)
const contributionList = contributionDropDown.map((item, key) => <a className="bg-card py-3 pl-2 mt-0 mx-0 text-foreground/80 hover:bg-card/80 hover:text-primary hover:scale-102 transition-all duration-300" key={key} href={item.href} >{item.title}</a>)




const navItems = [
  { name: "Home", href: "#hero", dropdown: "", active: false },
  { name: "About", href: "#about", dropdown: aboutList, active: false },
  { name: "Media Center", href: "#media", dropdown: mediaList, active: false },
  { name: "Network", href: "#network", dropdown: networkList, active: false },
  { name: "Contacts", href: "#contact", dropdown: contactList, active: false },
  { name: "Get involved", href: "#contribution", dropdown: contributionList, active: false },
]
export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isDropdown, setIsDropdown] = useState(navItems)


  const toggleActive = (name: string) => setIsDropdown(prevDropdown => prevDropdown.map(item => item.name === name ? { ...item, active: !item.active } : item))

  return (
    <>
      <nav className={cn("fixed w-full z-40 transition-all duration-300 py-3 shadow-xs bg-card/30"
      )} >
        <div className="container flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-primary flex items-center">
            <span className="relative z-10 mr-2">
              <span className="text-glow text-foreground">
                Ecocare
              </span> Initiative
            </span>
            <div className="w-12 h-auto">
              <img src={ecocarelogo} alt="Ecocare logo" className=" object-full" />
            </div>
          </a>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 " >
            {isDropdown.map((item, key) => {



              return (
                <div key={key} onMouseEnter={() => { toggleActive(item.name) }} onMouseLeave={() => { toggleActive(item.name) }} className="relative h-fit w-fit">
                  <a href={item.href} className=" relative p-2  text-foreground/80 hover:text-primary hover:bg-card/50 transition-all duration-300">
                    {item.name}
                    {item.dropdown && <span
                      style={{
                        transform: item.active ? "scaleX(1)" : "scaleX(0)",
                      }}
                      className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-primary transition-transform duration-300 ease-out" />}
                  </a>
                  <AnimatePresence>
                    {item.dropdown && item.active && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}

                        className="absolute left-1/2 top-12 -translate-x-1/2 ">
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className=" w-65 flex flex-col text-left text-nowrap my-0 gap-1 text-foreground font-semibold bg-white/60">{item.dropdown}</div></motion.div>)}
                  </AnimatePresence>

                </div>




              )
            }
            )}

          </div>



          <button onClick={() => setIsMenuOpen((prevStatus) => !prevStatus)} className={isMenuOpen ? "md:hidden p-2 bg-card/60 text-background rounded z-50 hover:text-background/80 hover:bg-card/80 transition-colors duration-300 " : "md:hidden p-2 text-foreground z-50"}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} >{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>

          <div className={cn("fixed inset-0 bg-background-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "bg-foreground opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )} >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item, key) => (
                <div key={key}>

                  <a href={item.href} className="font-bold text-background px-3 py-2 rounded bg-card/80 hover:text-primary hover:bg-card/60 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </div>
              ))}

            </div>
          </div>

        </div>
      </nav >

    </>
  )
}
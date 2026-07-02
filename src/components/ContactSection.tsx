
import { ToastContainer, toast } from "react-toastify"
import { Mail, MapPin, PhoneCallIcon, Send } from "lucide-react";
import { cn } from "../lib/utils";

import instagram from "../assets/icons/instagram-1-svgrepo-com.svg"
import facebook from "../assets/icons/facebook-svgrepo-com.svg"
import tiktok from "../assets/icons/tiktok-icon-black-1-logo-svgrepo-com.svg"
import linkedin from "../assets/icons/linkedin-icon-2-logo-svgrepo-com.svg"
import discord from "../assets/icons/discord-svgrepo-com.svg"
import { useState } from "react";


export default function ContactSection() {
  const [isSending, setIsSending] = useState(false)
  const sendMessage = (e: any) => {
    e.preventDefault()
    setIsSending(true)
    setTimeout(() => {
      toast("Message Sent.", { position: 'bottom-center' }),
        toast("Thank You for Your Message, We Will Get Back to You ASAP", { position: 'bottom-center', delay: 5000 })
      setIsSending(false)
    }, 1500)
  }

  return <section id="contact" className="relative min-h-screen py-24 px-4 ">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get In<span className="text-primary"> Touch</span>
      </h2>
      <p className="font-medium bg-card/60 rounded p-4 text-center text-2xl text-muted-foreground mb-8 md:max-w-4xl mx-auto">
        Have something to say? We want to hear it. <span className="font-bold">Email</span>Email us, give us a <span className="font-bold">Call</span>call, or find us on <span className="font-bold">Social Media</span>, however you reach out, someone will respond..
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div id="contactInfo" className="space-y-8">
          <h3 className=" font-semibold bg-white/60 mb-4 rounded border-solid border-1 border-black text-xl"> Contact Information</h3>
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10" >
                <Mail className="h-6 w-6 text-primary hover:text-card hover:scale-120 transition-all " />
              </div>
              <div>
                <h4 className="font-medium flex items-start"> Email</h4>
                <a href="mailto:nimmohkaranja12@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  nimmohkaranja12@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10" >
                <PhoneCallIcon className="h-6 w-6 text-primary hover:text-card hover:scale-120 transition-all" />
              </div>
              <div>
                <h4 className="font-medium flex items-start"> Phone</h4>
                <a href="tel:+254 799 671 341" className="text-muted-foreground hover:text-primary transition-colors">
                  +254 799 671 341
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10" >
                <MapPin className="h-6 w-6 text-primary hover:text-card hover:scale-120 transition-all" />
              </div>
              <div>
                <h4 className="font-medium flex items-start"> Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Lamu, Kenya.
                </a>
              </div>
            </div>

          </div>
          <div id="socials" className="pt-8">
            <h4 className="font-medium mb-6 bg-white/60 rounded border-solid border-1 border-black inline px-4"> Connect With Me</h4>
            <div className="flex space-x-2 justify-center mt-4">
              <a href="" target="_blank">
                <img src={instagram} alt="facebook icon" className="w-6 h-6 hover:scale-115 transition-all duration-300" />

              </a>
              <a href="" target="_blank">
                <img src={facebook} alt="facebook icon" className="w-6 h-6 hover:scale-115 transition-all duration-300" />
              </a>
              <a href="" target="_blank">
                <img src={tiktok} alt="facebook icon" className="w-6 h-6 hover:scale-115 transition-all duration-300" />
              </a>
              <a href="" target="_blank">
                <img src={linkedin} alt="facebook icon" className="w-6 h-6 hover:scale-115 transition-all duration-300" />
              </a>
              <a href="" target="_blank">
                <img src={discord} alt="facebook icon" className="w-6 h-6 hover:scale-115 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
        <div id="message" className="bg-card p-8 rounded-lg shadow-xs" >
          <h3 className="text-2xl font-semibold mb-6">
            Send a Message
          </h3>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Anne Karanja..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="anne@gmail.com..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>
            <button type="submit" onClick={sendMessage} className={cn("button w-full flex items-center justify-center gap-2",
            )}>
              {isSending ? "Sending ..." : "Send Message"}

              {!isSending && <Send />}

            </button>
            <ToastContainer />
          </form>

        </div>
      </div>
    </div>
  </section>
}
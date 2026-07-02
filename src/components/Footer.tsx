import { ArrowUp } from "lucide-react";

export default function Footer(){
  return <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} EcocareInitiative.or All Rights Reserved.</p>
    
    <a href="#hero" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 text-muted-foreground transition-colors animate-bounce"><ArrowUp /></a>
  </footer>
}
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import ServicesDone from "@/pages/ServicesDone";
import Milestones from "@/pages/Milestones";
import Contact from "@/pages/Contact";

function SinglePageApp() {
  return (
    <Layout>
      <div className="scroll-smooth">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="portfolio">
          <ServicesDone />
        </section>
        <section id="milestones">
          <Milestones />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SinglePageApp />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

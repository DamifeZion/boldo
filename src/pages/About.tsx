import { Hero } from "@/sections/about/hero";
import { Numbers } from "@/sections/about/numbers";
import { OurTeam } from "@/sections/about/our-team";
import { OurValues } from "@/sections/about/our-values";
import { Story } from "@/sections/about/story";

const About = () => {
   return (
      <main>
         <Hero />
         <Story />
         <Numbers />
         <OurTeam />
         <OurValues />
      </main>
   );
};

export default About;

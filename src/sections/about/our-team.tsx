import { TeamCard } from "@/components/about/team-card";
import Typography from "@/components/ui/typography";
import { TEAMS } from "@/constants/about-const";

export const OurTeam = () => {
   return (
      <section className="container py-28">
         <div className="max-w-2xl mx-auto space-y-4">
            <Typography className="text-muted-foreground">Our team</Typography>

            <Typography variant="h2" className="font-normal">
               The leadership team
            </Typography>

            <Typography className="text-muted-foreground">
               Conversion angel investor entrepreneur first mover advantage.
               Handshake infographic mass market crowdfunding iteration.
               Traction stock user experience deployment beta innovator
               incubator focus.
            </Typography>
         </div>

         <div className="grid max-w-4xl grid-cols-2 mx-auto mt-16 gap-y-16 gap-x-8 md:grid-cols-3">
            {TEAMS.map((item, index) => (
               <TeamCard key={index} {...item} />
            ))}
         </div>
      </section>
   );
};

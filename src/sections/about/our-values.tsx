import { ValuesCard } from "@/components/about/values-card";
import Typography from "@/components/ui/typography";
import { OUR_VALUES } from "@/constants/about-const";

export const OurValues = () => {
   return (
      <section className="bg-secondary py-28">
         <div className="container max-w-3xl text-secondary-foreground">
            <Typography>Our values</Typography>

            <Typography variant="h2" className="mt-4 font-light">
               Things in we believe
            </Typography>

            <Typography className="mt-4">
               Conversion angel investor entrepreneur first mover advantage.
               Handshake infographic mass market crowdfunding iteration.
               Traction stock user experience deployment beta innovator
               incubator focus.
            </Typography>

            <div className="grid mt-24 gap-y-16">
               {OUR_VALUES.map((item, index) => (
                  <ValuesCard key={index} {...item} />
               ))}
            </div>
         </div>
      </section>
   );
};

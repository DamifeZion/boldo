import { FeatureNumbers } from "@/components/about/feat-numbers";
import Typography from "@/components/ui/typography";
import { FEATURE_NUMBERS } from "@/constants/about-const";

export const Numbers = () => {
   return (
      <section className="py-20 bg-secondary">
         <div className="container max-w-xl mx-auto lg:max-w-4xl">
            <div className="text-center text-secondary-foreground">
               <Typography>Our numbers</Typography>

               <Typography
                  variant="h2"
                  className="mt-4 font-light !leading-tight text-center"
               >
                  Handshake infographic mass market crowdfunding iteration.
               </Typography>
            </div>

            <div className="flex flex-col items-center justify-between mt-16 gap-y-10 gap-x-4 sm:flex-row">
               {FEATURE_NUMBERS.map((item, index) => (
                  <FeatureNumbers key={index} {...item} />
               ))}
            </div>
         </div>
      </section>
   );
};

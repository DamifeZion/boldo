import Typography from "@/components/ui/typography";

export const Hero = () => {
   return (
      <div>
         <section className="pt-20 pb-20 min-[500px]:pb-32 sm:pb-56 bg-secondary">
            <div className="container text-center text-secondary-foreground">
               <Typography className="sm:text-lg">About</Typography>

               <Typography
                  variant="h1"
                  className="mt-2 mx-auto text-balance max-w-4xl font-light !leading-tight lg:text-[64px]"
               >
                  We love to make great things, things that matter.
               </Typography>

               <Typography className="max-w-3xl mx-auto mt-6 min-[474px]:text-balance lg:text-pretty">
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
               </Typography>
            </div>
         </section>

         <section className="container -mt-10 grid max-w-[1200px] gap-4 grid-cols-3 min-[500px]:-mt-16 sm:-mt-24 [&_img]:rounded-[24px] md:gap-10">
            <div className="grid gap-4 *:object-cover *:size-full md:gap-10">
               <img src="/about/hero-1.svg" loading="lazy" />
               <img src="/about/hero-2.svg" loading="lazy" />
            </div>

            <img
               src="/about/hero-3.svg"
               loading="lazy"
               className="object-cover max-w-lg mx-auto size-full"
            />

            <div className="grid gap-4 *:object-cover *:size-full md:gap-10">
               <img src="/about/hero-4.svg" loading="lazy" />
               <img src="/about/hero-5.svg" loading="lazy" />
            </div>
         </section>
      </div>
   );
};

import { useNewsletter } from "@/hooks/use-newsletter";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import Typography from "./ui/typography";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const NewsLetter = () => {
   const { form, onSubmit } = useNewsletter();

   return (
      <section className="container py-28">
         <div className="relative px-4 py-12 overflow-hidden text-center rounded-md lg:py-20 bg-secondary text-secondary">
            <span className="absolute z-0 -top-[160%] bg-[#1C3D5B] rounded-full lg:w-[60%] lg:pt-[60%] h-full lg:-right-40" />

            <div className="relative max-w-2xl mx-auto">
               <Typography
                  variant="h2"
                  className="max-lg:max-w-xl mx-auto font-normal !leading-tight text-secondary-foreground"
               >
                  An enterprise template to ramp up your company website
               </Typography>

               <Form {...form}>
                  <form
                     onSubmit={form.handleSubmit(onSubmit)}
                     className="flex flex-col max-w-lg mx-auto mt-6 gap-y-6 gap-x-4 sm:flex-row"
                  >
                     <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem className="flex-grow">
                              <FormControl>
                                 <Input
                                    placeholder="Your email address"
                                    className="px-4 py-3 rounded-full h-fit text-secondary bg-background placeholder:font-semibold"
                                    {...field}
                                 />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <Button className="h-full px-10 py-3 font-bold rounded-full">
                        Start now
                     </Button>
                  </form>
               </Form>
            </div>
         </div>
      </section>
   );
};

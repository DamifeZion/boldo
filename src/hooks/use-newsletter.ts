import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

export const useNewsletter = () => {
   const formSchema = z.object({
      email: z.string().email({
         message: "Please enter a valid email address",
      }),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
      },
   });

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
         toast.success(
            `You just signed up to our newsletter with mail: ${values.email}. You will not hear from us soon at all!`
         );
      } catch (err) {
         console.error(err);
      }
   };

   return {
      form,
      onSubmit,
   };
};

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, Send } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters long" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to an API endpoint
      // For demonstration purposes, we'll just simulate a successful request
      // await apiRequest("POST", "/api/contact", data);
      
      // Simulate API latency
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I will get back to you soon.",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      console.error("Failed to send message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-foreground font-medium mb-1.5 block">
          Name
        </Label>
        <Input
          id="name"
          placeholder="Your Name"
          {...register("name")}
          className="bg-background/50 border-border focus-visible:ring-secondary"
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground font-medium mb-1.5 block">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          {...register("email")}
          className="bg-background/50 border-border focus-visible:ring-secondary"
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject" className="text-foreground font-medium mb-1.5 block">
          Subject
        </Label>
        <Input
          id="subject"
          placeholder="Subject of your message"
          {...register("subject")}
          className="bg-background/50 border-border focus-visible:ring-secondary"
        />
        {errors.subject && (
          <p className="mt-1.5 text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-foreground font-medium mb-1.5 block">
          Message
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Your message here..."
          {...register("message")}
          className="bg-background/50 border-border resize-none min-h-[120px] focus-visible:ring-secondary"
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

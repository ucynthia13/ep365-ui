"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Contact schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

const onContactSubmit = () => {};

const ContactUS = () => {
  const contactForm = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  return (
    <section
      id="features"
      className="relative z-10 overflow-hidden py-16 md:py-24 lg:py-32 text-black"
    >
      <div className="flex flex-col md:flex-row gap-8 container max-w-6xl mx-auto px-6">
        <div className="flex flex-col w-full md:w-1/2 items-start text-start gap-4">
          <div className="p-4 bg-white rounded-xl shadow mb-4">
            <Mail className="text-[#44BCFF] w-5 h-5" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-4 capitalize"
          >
            Contact Us
          </motion.h2>
          <p>
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
          </p>
          <p className="text-gray-600 mt-4">contact@yoursaas.ai . +1 (800) 123 XX21 . support@yoursaas.ai</p>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 space-y-4">
          <Form {...contactForm}>
            <form
              onSubmit={contactForm.handleSubmit(onContactSubmit)}
              className="space-y-4 max-w-xl border p-8 rounded-xl"
            >
              <FormField
                control={contactForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="name" className="mb-3">
                      Full Name
                    </Label>
                    <FormControl>
                      <Input id="name" placeholder="Full name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email" className="mb-3">
                      Email Address
                    </Label>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email address"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={contactForm.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="company" className="mb-3">
                      Company
                    </Label>
                    <FormControl>
                      <Input id="company" placeholder="Company" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={contactForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="message" className="mb-3">
                      Message
                    </Label>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="btn-primary w-full md:w-1/2">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;

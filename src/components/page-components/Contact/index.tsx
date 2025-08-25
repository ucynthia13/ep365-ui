"use client";
import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { WorldMap } from "@/components/ui/world-map";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Card } from "@/components/ui/card";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

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
    <Section id="contact" className="pb-28">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col w-full md:w-1/2 items-start text-start gap-4">
          <div className="p-4 bg-white rounded-xl shadow mb-4">
            <Mail className="text-[#44BCFF] w-6 h-6" />
          </div>
          <SectionTitle title="Contact Us" className="mb-4" />
          <p>
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
          </p>
          <p className="text-gray-600 my-4">
            info@ep365.com . +1 (800) 123 XX21 . support@yoursaas.ai
          </p>
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 space-y-4">
          <Card className="relative overflow-hidden">
            <BorderBeam
              duration={8}
              size={300}
              reverse
              className="absolute inset-0 z-10 pointer-events-none from-transparent via-[#44BCFF] to-transparent"
            />
            <Form {...contactForm}>
              <form
                onSubmit={contactForm.handleSubmit(onContactSubmit)}
                className="space-y-4 max-w-xl p-8 rounded-xl"
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
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ContactUS;

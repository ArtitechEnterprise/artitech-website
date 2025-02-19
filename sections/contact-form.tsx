"use client";

import Container from "@/components/customs/container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  ContactForm as IfContactSchema,
  contactSchema,
} from "@/schemas/contact.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const ContactForm = () => {
  const form = useForm<IfContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      object: "",
      email: "",
      tel: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;
  const onSubmit = async (data: IfContactSchema) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const resposeData = await response.json();
      if (resposeData) {
        reset();
        toast("Votre message a bien été envoyé", {
          action: {
            label: "Fermer",
            onClick: () => {},
          },
        });
      } else {
        toast("Une erreur est survenue", {
          action: {
            label: "Fermer",
            onClick: () => {},
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form {...form}>
        <Container className="flex flex-col-reverse gap-8 space-y-6 md:my-10 lg:flex lg:flex-row">
          <div className="h-[400px] w-full overflow-hidden rounded-lg lg:block lg:h-auto lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63675.71011384752!2d9.730523251948563!3d4.074942848809234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e80fccb2193%3A0x6c9146f5bf6f933e!2sLogbessou%20-%20SunShineCity%2C%20Douala!5e0!3m2!1sfr!2scm!4v1739620463754!5m2!1sfr!2scm"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <form className="lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5 space-y-3">
              <h3 className="lg:6xl scroll-m-20 text-4xl font-semibold tracking-tight">
                Discutons de votre projet
              </h3>
              <p className="text-sm">
                Prêt à donner vie à vos idées ? Discutons ensemble de votre
                projet ! Décrivez-nous vos besoins , et notre équipe reviendra
                vers vous en un rien de temps.
              </p>
            </div>
            <div className="space-y-4 md:grid md:grid-cols-1 md:gap-3 md:space-y-0 lg:grid-cols-2">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Votre nom & Prenom" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Votre Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* telephone */}
              <FormField
                name="tel"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Telephone" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="typeDeProject"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Type de projet" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Design UI/UX ">
                          Design UI/UX{" "}
                        </SelectItem>
                        <SelectItem value="Application Web">
                          Application Web
                        </SelectItem>
                        <SelectItem value="Application Mobile">
                          Application Mobile
                        </SelectItem>
                        <SelectItem value="Cybersecurite">
                          Cybersecurite
                        </SelectItem>
                        <SelectItem value="Application E-commerce">
                          Application E-commerce
                        </SelectItem>
                        <SelectItem value="Site Web">Site Web</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-2 grid gap-5 md:grid-cols-2 md:items-center md:justify-center">
                <FormField
                  name="typeDentreprise"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormLabel className="font-normal">
                              Entreprise
                            </FormLabel>
                            <FormControl>
                              <RadioGroupItem value="Entreprise" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Particulier
                            </FormLabel>
                            <FormControl>
                              <RadioGroupItem value="Particulier" />
                            </FormControl>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="object"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="object..." {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                name="message"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <Textarea placeholder="Message..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="mt-6 w-full"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <p className="flex items-center justify-center gap-1">
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  <span>Envoie en cour...</span>
                </p>
              ) : (
                "Envoyer"
              )}
            </Button>
          </form>
        </Container>
      </Form>
    </>
  );
};

export default ContactForm;

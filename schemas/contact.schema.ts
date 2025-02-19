import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Votre nom est obligatoire" }),
  email: z
    .string()
    .trim()
    .email({ message: "S'il vous plaît entrer une adresse email valide" }),
  message: z
    .string()
    .trim()
    .min(40, { message: "Votre message doit contenir au moins 40 caractères" })
    .max(255, {
      message: "Votre message doit contenir au plus 255 caractères",
    }),
  typeDeProject: z.enum(
    [
      "Design UI/UX",
      "Application Web",
      "Application Mobile",
      "Cybersecurite",
      "Application E-commerce",
      "Site Web",
      "autre",
    ],
    { message: "Veuillez choisir un type de projet" },
  ),
  typeDentreprise: z.enum(["Entreprise", "Particulier"], {
    message: "Veuillez choisir un type d'entreprise",
  }),
  object: z.string().min(1, { message: "Votre sujet est obligatoire" }),
  tel: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Veuillez entrer un numéro de téléphone valide",
  }),
});

export type ContactForm = z.infer<typeof contactSchema>;

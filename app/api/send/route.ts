import { Resend } from "resend";

import { contactSchema } from "@/schemas/contact.schema";
import ContactFormEmail from "@/components/customs/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, object, tel, typeDeProject, typeDentreprise } =
    contactSchema.parse(body);

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "artitech@homesolutionsworld.org",
      subject: object,
      react: ContactFormEmail({
        name,
        email,
        tel,
        message,
        typeDeProject,
        typeDentreprise,
        object,
      }),
      replyTo: email,
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error, message: "Erreur de serveur veillez ressayer" },
      { status: 500 },
    );
  }
}

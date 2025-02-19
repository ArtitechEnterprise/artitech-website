import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";
import { CSSProperties } from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  object: string;
  tel: string;
  typeDeProject: string;
  typeDentreprise: string;
}

const ContactFormEmail = ({
  name,
  email,
  message,
  object,
  tel,
  typeDeProject,
  typeDentreprise,
}: ContactFormEmailProps) => (
  <Html>
    <Head>
      <title>{`Nouveau message de ${name} - Artitech`}</title>
    </Head>
    <Body style={main}>
      <Container style={container}>
        {/* En-tête avec logo */}
        <Section style={header}>
          <Img
            src={
              "https://res.cloudinary.com/dd2t9tdyy/image/upload/v1739702462/rgum1rvqdp5vdazhuco7.jpg"
            }
            width="170"
            height="50"
            alt="Artitech"
            style={logo}
          />
        </Section>

        {/* Contenu principal */}
        <Section style={content}>
          <Heading style={heading}>Nouvelle demande de contact</Heading>

          <Text style={introText}>
            Bonjour l&apos;équipe Artitech,
            <br />
            Vous avez reçu une nouvelle demande via le formulaire de contact :
          </Text>

          {/* Section informations client */}
          <Section style={infoSection}>
            <Heading style={sectionHeading}>Informations du client</Heading>
            <Row style={row}>
              <Column style={columnLabel}>Nom :</Column>
              <Column style={columnValue}>{name}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnLabel}>Email :</Column>
              <Column style={columnValue}>
                <a href={`mailto:${email}`} style={link}>
                  {email}
                </a>
              </Column>
            </Row>
            <Row style={row}>
              <Column style={columnLabel}>Objet :</Column>
              <Column style={columnValue}>{object}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnLabel}>Téléphone :</Column>
              <Column style={columnValue}>
                <a href={`tel:${tel}`} style={link}>
                  {tel}
                </a>
              </Column>
            </Row>
            <Row style={row}>
              <Column style={columnLabel}>Type de projet :</Column>
              <Column style={columnValue}>{typeDeProject}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnLabel}>Type d&apos;entreprise :</Column>
              <Column style={columnValue}>{typeDentreprise}</Column>
            </Row>
          </Section>

          {/* Section message */}
          <Section style={messageSection}>
            <Heading style={sectionHeading}>Message</Heading>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Section>

        {/* Pied de page */}
        <Section style={footer}>
          <Text style={footerText}>
            Artitech - Solutions Digitales Innovantes
            <br />
            123 Rue de l&apos;Innovation, Logbessou
            <br />
            Tél: +1 514-123-4567 | Email:{" "}
            <a href="mailto:artitech@homesolutionsworld.org" style={link}>
              artitech@homesolutionsworld.org
            </a>
          </Text>
          <Text style={copyright}>
            © {new Date().getFullYear()} Artitech. Tous droits réservés.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
export default ContactFormEmail;
// Styles modernisés
const main = {
  backgroundColor: "#f8f9fa",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  padding: "20px 0",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const header = {
  backgroundColor: "#2A4365",
  padding: "60px 30px",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logo: CSSProperties = {
  margin: "0",
  objectFit: "cover",
  maxWidth: "100%",
  height: "100%",
};

const content = {
  padding: "30px",
};

const heading = {
  fontSize: "24px",
  color: "#2A4365",
  margin: "0 0 20px 0",
  fontWeight: "600",
};

const introText = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#4a5568",
  marginBottom: "25px",
};

const infoSection = {
  backgroundColor: "#f7fafc",
  borderRadius: "6px",
  padding: "20px",
  marginBottom: "25px",
  border: "1px solid #e2e8f0",
};

const sectionHeading = {
  fontSize: "18px",
  color: "#2A4365",
  borderLeft: "4px solid #2A4365",
  paddingLeft: "10px",
  margin: "0 0 15px 0",
  fontWeight: "600",
};

const row = {
  marginBottom: "10px",
};

const columnLabel = {
  width: "30%",
  color: "#4a5568",
  fontWeight: "600",
  fontSize: "14px",
};

const columnValue = {
  width: "70%",
  color: "#4a5568",
  fontSize: "14px",
};

const messageSection = {
  borderTop: "2px solid #e2e8f0",
  paddingTop: "25px",
};

const messageText = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#4a5568",
  whiteSpace: "pre-wrap",
};

const footer = {
  backgroundColor: "#2A4365",
  padding: "20px 30px",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
};

const footerText = {
  fontSize: "12px",
  color: "#cbd5e0",
  lineHeight: "1.5",
  textAlign: "center" as const,
  margin: "0",
};

const copyright = {
  fontSize: "12px",
  color: "#cbd5e0",
  textAlign: "center" as const,
  margin: "15px 0 0 0",
};

const link = {
  color: "#63B3ED",
  textDecoration: "none",
};

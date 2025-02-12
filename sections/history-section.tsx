import Container from "@/components/customs/container";
import Image from "next/image";

export default function HistorySection() {
  return (
    <Container className="px-10 py-16">
      <h2 className="mb-10 text-left text-3xl font-semibold text-black">
        Impact / Valeurs
      </h2>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
        {/* Section Impact */}
        <div className="flex flex-col items-center">
          <Image
            width={600}
            height={600}
            src=""
            alt="Impact d'Artitech"
            className="h-auto w-[90%] max-w-2xl rounded-lg shadow-lg md:w-full"
          />

          <p className="mt-4 text-left text-lg font-normal">
            Chez Artitech, nous croyons que la technologie doit être un moteur
            de transformation et de progrès pour les entreprises. Notre impact
            se mesure à travers :
            <br />
            <br />
            <strong>L’Automatisation des processus :</strong> Automatiser les
            processus pour améliorer l’efficacité des entreprises. <br />
            <strong>L’Accessibilité à l’IA :</strong> Démocratiser
            l’intelligence artificielle pour toutes les organisations. <br />
            <strong>
              La Sécurisation des infrastructures digitales :
            </strong>{" "}
            Protection contre les cybermenaces. <br />
            <strong>L’Innovation au service de la croissance :</strong>{" "}
            Accélérer la transformation numérique avec des solutions innovantes.{" "}
            <br />
            <strong>La Formation et l’Accompagnement :</strong> Optimiser la
            productivité grâce à des technologies avancées.
          </p>
        </div>

        {/* Section Valeurs */}
        <div className="flex flex-col items-center">
          <Image
            src=""
            alt="Valeurs d'Artitech"
            width={600}
            height={600}
            className="h-auto w-[90%] max-w-2xl rounded-lg shadow-lg md:w-full"
          />
          <p className="mt-4 text-left text-lg font-normal">
            Chez Artitech, nos valeurs définissent notre engagement et notre
            manière d’innover au service de nos clients. Elles guident chacune
            de nos actions et décisions. Nos valeurs se mesurent à travers :
            <br />
            <br />
            <strong>Innovation 💡 :</strong> Nous repoussons sans cesse les
            limites pour proposer des solutions performantes et disruptives.{" "}
            <br />
            <strong>Excellence 🎯 :</strong> Chaque projet est mené avec rigueur
            et souci du détail pour offrir une qualité irréprochable. <br />
            <strong>Sécurité 🔒 :</strong> La protection des données et des
            infrastructures numériques est une priorité absolue. <br />
            <strong>Engagement Client 🤝 :</strong> Des solutions sur mesure
            adaptées aux besoins des entreprises. <br />
            <strong>Transparence & Éthique ⚖️ :</strong> La transparence et
            l’éthique sont au cœur de nos actions.
          </p>
        </div>
      </div>
    </Container>
  );
}

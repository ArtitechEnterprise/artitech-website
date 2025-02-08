import Container from "@/components/customs/container";

export default function HistorySection() {
    return (
      <Container className="py-16 px-10">
        
        <h2 className="text-left text-black text-3xl font-semibold mb-10">
          Impact / Valeurs
        </h2>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Section Impact */}
          <div className="flex flex-col items-center">
          <img 
               src="image(1).png" 
              alt="Impact d'Artitech"
               className="w-[90%] md:w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />

            <p className="mt-4  text-lg font-normal  text-left" >
              Chez Artitech, nous croyons que la technologie doit être un moteur de transformation et de progrès pour les entreprises. Notre impact se mesure à travers :
              <br /><br />
              <strong>L’Automatisation des processus :</strong> Automatiser les processus pour améliorer l’efficacité des entreprises. <br />
              <strong>L’Accessibilité à l’IA :</strong> Démocratiser l’intelligence artificielle pour toutes les organisations. <br />
              <strong>La Sécurisation des infrastructures digitales :</strong> Protection contre les cybermenaces. <br />
              <strong>L’Innovation au service de la croissance :</strong> Accélérer la transformation numérique avec des solutions innovantes. <br />
              <strong>La Formation et l’Accompagnement :</strong> Optimiser la productivité grâce à des technologies avancées.
            </p>
          </div>
  
          {/* Section Valeurs */}
          <div className="flex flex-col items-center">
          <img 
             src="/image(2).png" 
             alt="Valeurs d'Artitech"
              className="w-[90%] md:w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />
            <p className="mt-4  text-lg font-normal  text-left" >
              Chez Artitech, nos valeurs définissent notre engagement et notre manière d’innover au service de nos clients. Elles guident chacune de nos actions et décisions. Nos valeurs se mesurent à travers :
              <br /><br />
              <strong>Innovation 💡 :</strong> Nous repoussons sans cesse les limites pour proposer des solutions performantes et disruptives. <br />
              <strong>Excellence 🎯 :</strong> Chaque projet est mené avec rigueur et souci du détail pour offrir une qualité irréprochable. <br />
              <strong>Sécurité 🔒 :</strong> La protection des données et des infrastructures numériques est une priorité absolue. <br />
              <strong>Engagement Client 🤝 :</strong> Des solutions sur mesure adaptées aux besoins des entreprises. <br />
              <strong>Transparence & Éthique ⚖️ :</strong> La transparence et l’éthique sont au cœur de nos actions.
            </p>
          </div>
  
        </div>
      </Container>
    );
  }
  
import Container from '@/components/customs/container';
import Image from 'next/image';


export default function AboutSection() {
  return (
    < Container className="relative flex  justify-between px-12  mt-8">
    
      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-6">Histoire de Artitech</h2>
        <div className=" font-normal flex flex-col text-xl  gap-10  text-left ">
          <p>Tout a commencé avec une vision : celle de mettre la puissance de l’intelligence artificielle et du développement logiciel 
          au service des entreprises. Constatant les défis auxquels les entreprises faisaient face en matière d’automatisation, 
          de cybersécurité et d’innovation digitale, les fondateurs d’Artitech ont décidé de créer une agence capable de transformer 
          ces obstacles en opportunités.
          </p>
          <p>Fondée par une équipe d’experts passionnés par la technologie et l’innovation, Artitech est née de la volonté d’accompagner 
          les entreprises dans leur transformation numérique. Dès ses débuts, l’agence s’est spécialisée dans le développement d’algorithmes 
          intelligents, la création de solutions logicielles sur mesure et la sécurisation des infrastructures numériques.
          </p>
        </div>
      </div>

      
      <div className="w-1/2  opacity-100">
        <Image 
          src="/image.png"  
          alt="Histoire de Artitech"
          width={400} 
          height={400}
          className="w-full h-[500px] object-contain"
          priority 
        />
      </div>
    </Container >
  );
}

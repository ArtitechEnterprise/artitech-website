import React from 'react';
import Container from '@/components/customs/container';
// import SvgWithImage from '@/components/customs/svg-with-image';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import Link from 'next/link';

const services = [
  {
    id: 1,
    name: 'Service 1',
    designation: 'Software Engineer',
    image: '/service-1.png',
  },
  {
    id: 2,
    name: 'Service 2',
    designation: 'Software Engineer',
    image: '/service-2.png',
  },
  {
    id: 3,
    name: 'Service 3',
    designation: 'Software Engineer',
    image: '/service-3.png',
  },
];
const SectionHero = () => {
  return (
    <Container className='py-8  w-full'>
      <div className='min-h-screen relative overflow-hidden'>
        <Image
          src={'/second-image.jpg'}
          alt='Définition de votre projet'
          loading='lazy'
          fill
          className='object-conver rounded-[36px] relative'
        />
        <div className='absolute right-0 z-10 bottom-0 w-[450px] h-[170px]'>
          <Link
            href={'/about'}
            className='w-full justify-end flex items-center p-4 relative'
          >
            <div className='flex items-center relative group before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-primary before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100 gap-1 mr-10 w-fit justify-end '>
              <span className='text-2xl '>A propos de nous</span>
              <ArrowRight className='size-6 group-hover:translate-x-2 transition-transform duration-300' />
            </div>
          </Link>
          <div className='w-full flex items-center  gap-10 py-7 '>
            <div className='flex flex-row items-center justify-center z-1'>
              <AnimatedTooltip items={services} />
            </div>
            <div className='space-y-px'>
              <h2 className='text-3xl font-semibold'>Nos Services</h2>
              <p className='text-base font-medium '>
                Decouver nos differents services
              </p>
            </div>
          </div>
        </div>

        {/* description */}
        <div className='absolute left-0 top-0 flex items-center justify-center h-screen text-white ps-10 '>
          <div className='lg:max-w-[700px] lg:ml-12  lg:space-y-12 '>
            <span className='text-sm font-medium leading-none'>
              Définition de votre projet
            </span>
            <h2 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl py-11 text-balance'>
              Ensemble realisons tous vos projets de digital et
              d&apos;automatisation
            </h2>
            <button className=' bg-[#2DC2E1]/70 py-3 px-7 text-white rounded-full border border-white/50 transition-all duration-300 ease-in-out hover:bg-white/80 hover:-translate-y-1 hover:text-[#2DC2E1] backdrop-blur-sm hover:backdrop-blur-sm '>
              Discutons de votre projet
            </button>
          </div>
          {/* bulls avec les nombres  */}

          <div className='absolute left-10 top-1/2 h-[70%] rounded-sm transform -translate-y-1/2 w-[3px] '>
            <span className='absolute w-[60px] h-[60px] rounded-full bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 flex items-center justify-center text-xl font-semibold text-black border-white'>
              1
            </span>
            <span className='h-[37%] w-[3px] bg-white absolute left-1/2 transform -translate-x-1/2 top-[30px]'></span>
            <span className='absolute w-[60px] h-[60px] top-1/2 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 flex items-center justify-center text-xl text-white font-semibold border-white'>
              2
            </span>
            <span className='h-[37%] w-[3px] bg-white absolute left-1/2 transform -translate-x-1/2 top-[calc(56.5%)]'></span>
            <span className='absolute w-[60px] h-[60px] top-[calc(100%)] rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 flex items-center justify-center text-xl text-white font-semibold border-white'>
              3
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SectionHero;

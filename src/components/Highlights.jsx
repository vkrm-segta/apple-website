import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

function Highlights() {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id='highlights'
      className='w-screen h-full overflow-hidden bg-zinc common-padding'
    >
      <div className='screen-max-width'>
        <div className='w-full md:flex items-end justify-between mb-12'>
          <h1 id='title' className='section-heading'>
            Get the highlights.
          </h1>
          <div className='flex items-end flex-wrap gap-5'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt='watch' className='ml-2' />
            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt='right' className='ml-2' />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}

export default Highlights;

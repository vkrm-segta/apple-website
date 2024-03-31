import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrc);

    return () => {
      window.removeEventListener('resize', handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='w-full h-5/6 flex-center flex-col'>
        <p id='hero' className='hero-title'>
          iPhone 15 Pro
        </p>
        <div className='w-9/12 md:w-10/12'>
          <video
            className='pointer-events-none'
            autoPlay
            loop={true}
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source type='video/mp4' src={videoSrc} />
          </video>
        </div>
      </div>

      <div
        id='cta'
        className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <a href='#highlights' className='btn'>
          Buy
        </a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;

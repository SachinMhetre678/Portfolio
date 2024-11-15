const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
          <h1>Hi, I&apos;m Sachin</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>
              Born in Pune, India <span className='ml-1'>🇮🇳</span>
            </li>
            <li>
              Currently studying in Symbiosis , Pune
              <span className='ml-1.5'>🇮🇳</span>
            </li>
          </ul>
        </div>
      </div>

      <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300'>
      Dynamic Software Engineer and Aspiring Data Scientist with a strong foundation in full-stack development 
      and machine learning. Passionate about crafting user-centric web and mobile applications using modern 
      technologies like React, SvelteKit, and Next.js. I excel at turning complex problems into scalable, 
      efficient solutions while ensuring a seamless user experience. I thrive in collaborative environments, 
      consistently delivering impactful projects that merge innovation and practicality.
      </p>
    </section>
  );
};

export default Introduction;

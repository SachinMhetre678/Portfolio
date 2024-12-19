const Introduction = () => {
  return (
    <section className='relative bg-cover bg-no-repeat py-8'>
      {/* Decorative background elements */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/10 to-transparent dark:via-blue-900/10 -z-10' />
      <div className='space-y-6'>
        {/* Enhanced header section */}
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-3'>
            <h1 className='text-3xl lg:text-4xl font-bold font-sora bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent'>
              Hi, I&apos;m Sachin
            </h1>
            <div className='ml-1 animate-waving-hand text-3xl lg:text-4xl'>👋</div>
          </div>
          <p className='text-lg text-neutral-600 dark:text-neutral-300 font-medium'>
            Tech Explorer & Innovation Enthusiast
          </p>
        </div>

        {/* Location information with enhanced styling */}
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-3 lg:gap-10 text-neutral-700 dark:text-neutral-400'>
            <li className='flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors'>
              <span className='text-xl'>🇮🇳</span>
              <span>Stay in Pune, Maharashtra</span>
            </li>
            <li className='flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors'>
              <span className='text-xl'>🎓</span>
              <span>Studying at Symbiosis, Pune</span>
            </li>
          </ul>
        </div>

        {/* Bio with enhanced typography and layout */}
        <div className='relative'>
          <p className='leading-relaxed text-lg mt-6 text-neutral-800 dark:text-neutral-300 bg-gradient-to-b from-neutral-100/50 to-transparent dark:from-neutral-900/50 rounded-lg p-6 border border-neutral-200 dark:border-neutral-800'>
            Passionate technologist with a keen interest in cloud computing and artificial intelligence. 
            Exploring cloud architectures with <span className='text-blue-600 dark:text-blue-400'>AWS</span> and{' '}
            <span className='text-teal-600 dark:text-teal-400'>Azure</span>, while diving deep into{' '}
            <span className='text-purple-600 dark:text-purple-400'>Machine Learning</span> and{' '}
            <span className='text-orange-600 dark:text-orange-400'>Data Science</span>. 
            Currently focused on leveraging <span className='text-green-600 dark:text-green-400'>Python</span> for 
            data analysis and building predictive models. Experienced in working with{' '}
            <span className='text-pink-600 dark:text-pink-400'>Large Language Models</span> and{' '}
            <span className='text-indigo-600 dark:text-indigo-400'>Data Visualization</span> tools to derive meaningful insights. 
            I thrive on transforming complex datasets into actionable intelligence and building scalable cloud solutions. 
            Always excited to explore new technologies and contribute to innovative projects at the intersection of cloud computing and AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

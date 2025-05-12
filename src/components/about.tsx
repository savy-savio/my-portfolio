'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I am Okwoli Godwin, a frontend and mobile developer with a passion for
          building innovative solutions. With over 4 years of experience in
          software engineering, I’ve developed a strong foundation in
          problem-solving and a keen interest in staying up-to-date with
          industry trends.
        </p>
        <p className="mb-4">
          My expertise lies in React, React Native, TypeScript, and Tailwind
          CSS, and I am always eager to expand my skill set. I have had the
          privilege of working on various projects, from personal initiatives to
          collaborative endeavors, showcasing my adaptability and commitment to
          delivering high-quality results.
        </p>
        <p>
          If you have a suitable opportunity that aligns with my expertise,
          please don&apos;t hesitate to reach out.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};

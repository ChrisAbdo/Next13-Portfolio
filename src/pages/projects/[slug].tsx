import { useRouter } from 'next/router';

import React from 'react';

const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: 'MovieGPT',
    href: '/projects/moviegpt',
    description:
      'An AI movie recommendation platform built with GPT-3 and Next.js.',
  },
  {
    title: 'GrammarScoreAI',
    href: '/projects/grammarscoreai',
    description:
      'An AI writing companion designed to help you improve your writing. Built with Next.js + GPT-3.',
  },
  {
    title: 'SmoothTalker',
    href: '/projects/smoothtalker',
    description: 'An AI pickup line generator built with GPT-3 and Next.js.',
  },
  {
    title: 'C. Elegans ML/AI @ NJIT',
    href: '/projects/njit',
    description:
      'A 6 week research project at NJIT where I built a biomimetic AI navigation system.',
  },
];

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const component = components.find((c) => c.href.endsWith(`/${slug}`));

  return (
    <div>
      {component ? (
        <>
          <h2>Title: {component.title}</h2>
          <p>Description: {component.description}</p>
        </>
      ) : (
        <h1>No component found for slug: {slug}</h1>
      )}
    </div>
  );
};

export default Slug;

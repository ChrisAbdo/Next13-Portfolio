import Image from 'next/image';
import { useRouter } from 'next/router';
import { Github, Radio } from 'lucide-react';
import React from 'react';

const components: {
  title: string;
  href: string;
  description: string;
  image: string;
  stack: string[];
  github: string;
  livedemo: string;
}[] = [
  {
    title: 'MovieGPT',
    href: '/projects/moviegpt',
    description:
      'An AI movie recommendation platform built on top of GPT-3. Built with Next.js + Tailwind CSS.',
    image: '/movie.png',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI', 'Vercel Edge Functions'],
    github: 'https://github.com/ChrisAbdo/MovieGPT',
    livedemo: 'https://moviegpt.vercel.app/',
  },
  {
    title: 'GrammarScoreAI',
    href: '/projects/grammarscoreai',
    description:
      'An AI writing companion designed to help you improve your writing. Built with Next.js + GPT-3.',
    image: '/grammar.png',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI', 'Vercel Edge Functions'],
    github: 'https://github.com/ChrisAbdo/OpenAI-Project-v02',
    livedemo: 'https://chrisabdo-ai.vercel.app/',
  },
  {
    title: 'SmoothTalker',
    href: '/projects/smoothtalker',
    description: 'An AI pickup line generator built with GPT-3 and Next.js.',
    image: '/smoothtalker.png',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI', 'Vercel Edge Functions'],
    github: 'https://github.com/ChrisAbdo/SmoothTalker',
    livedemo: 'https://smoothtalker.vercel.app/',
  },
  {
    title: 'C. Elegans ML/AI @ NJIT',
    href: '/projects/njit',
    description:
      'A 6 week research project at NJIT where I built a biomimetic AI navigation system simulating the C. elegans worm.',
    image: '/njit.png',
    stack: ['Python', 'MATLAB', 'Raspberry Pi'],
    github: '',
    livedemo: '',
  },
  {
    title: 'Soulmates | HackFEVM Grand Prize Winner',
    href: '/projects/soulmates',
    description:
      'A Soulbound Token (SBT) issuance engine, built on the Filecoin Virtual Machine. Built with Next.js + Tailwind CSS.',
    image: '/soulmates.png',
    stack: ['Next.js', 'Tailwind CSS', 'Ethers.js', 'FileCoin', 'IPFS'],
    github: 'https://github.com/rohanagarwal/hack-fevm-submission',
    livedemo: 'https://hackfevm-frontend.vercel.app/',
  },
  {
    title: 'SafeConnect | ETH New York',
    href: '/projects/safeconnect',
    description:
      'A safety protocol built on WalletConnect that alerts users of malicious websites. Built with Next.js + Tailwind CSS.',
    image: '/safeconnect.png',
    stack: ['Next.js', 'Tailwind CSS', 'Ethers.js', 'WalletConnect'],
    github: 'https://github.com/ETH-NYC-Hackathon/safe-connect-frontend',
    livedemo: 'https://github.com/ETH-NYC-Hackathon/safe-connect-frontend',
  },
  {
    title: 'Doodl',
    href: '/projects/doodl',
    description:
      'A decentralized, community-driven art competition, built on Polygon.',

    image: '/doodl.png',
    stack: ['Next.js', 'Tailwind CSS', 'Truffle', 'IPFS', 'Polygon'],
    github: 'https://github.com/ChrisAbdo/Doodl-Official',
    livedemo: 'https://doodl-official.vercel.app/',
  },
  {
    title: 'DeStemr',
    href: '/projects/destemr',
    description:
      'A decentralized music NFT marketplace made for artists to sell stems. Built on Polygon.',

    image: '/destemr.png',
    stack: ['Next.js', 'Tailwind CSS', 'Truffle', 'IPFS', 'Polygon'],
    github: 'https://github.com/ChrisAbdo/ETH-SF-DeStemr',
    livedemo: 'https://eth-sf-destemr.vercel.app',
  },
  {
    title: 'Etherwav',
    href: '/projects/etherwav',
    description:
      'A decentralized, community driven + rewarding web radio station. Built on Polygon.',

    image: '/etherwav.png',
    stack: ['Next.js', 'Tailwind CSS', 'Truffle', 'IPFS', 'Polygon'],
    github: 'https://github.com/ChrisAbdo/Etherwav-Next13',
    livedemo:
      'https://etherwav-next13-5r9qq53cb-chrisjabdo-gmailcom.vercel.app/',
  },
  {
    title: 'Lenspire',
    href: '/projects/lenspire',
    description:
      'A UI/UX design studio built ontop of Polygon and Lens Protocol.',

    image: '/lenspire.png',
    stack: ['Next.js', 'Tailwind CSS', 'Truffle', 'IPFS', 'Polygon'],
    github: 'https://github.com/ChrisAbdo/lenspire',
    livedemo: 'https://lenspire-cx0tqfv8d-chrisjabdo-gmailcom.vercel.app/',
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
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                src={component.image}
                alt={component.title}
                width={400}
                height={400}
                className="rounded-xl min-h-[400px] min-w-[400px]"
              />{' '}
              <div>
                <h1 className="text-5xl font-bold max-w-lg">
                  {component.title}
                </h1>
                <p className="py-6 text-2xl max-w-lg">
                  {component.description}
                </p>
                Built with{' '}
                <div className="flex flex-wrap gap-2">
                  {component.stack.map((s, i) => (
                    <span
                      key={i}
                      className="badge bg-[#DADDE2] dark:bg-black text-black dark:text-white px-2 py-1 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => window.open(component.github)}
                  disabled={!component.github}
                  className="btn bg-[#DADDE2]  hover:bg-[#DADDE2]/80 dark:hover:bg-black/80 dark:bg-black border border-white text-black dark:text-white mt-12 normal-case rounded-xl"
                >
                  <Github /> Check out the GitHub repo!
                </button>
                &nbsp;
                <button
                  onClick={() => window.open(component.livedemo)}
                  disabled={!component.livedemo}
                  className="btn bg-[#DADDE2]  hover:bg-[#DADDE2]/80 dark:hover:bg-black/80 dark:bg-black border border-white text-black dark:text-white mt-12 normal-case rounded-xl"
                >
                  <Radio /> Live Demo
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>No component found for slug: {slug}</h1>
      )}
    </div>
  );
};

export default Slug;

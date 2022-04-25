import Image from 'next/image';
import Container from '../components/Container';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              David Zubal
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Engineer @ <span className="font-semibold">ONE</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Building with React, Node, and Typescript
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="David Zubal"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Build and deploy a modern SaaS application using the most popular
          open-source software. This course is 12 hours long and is completely
          live streamed.
        </p>
      </div>
    </Container>
  );
}

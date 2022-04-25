import Container from 'components/Container';
import Image from 'next/image';

export default function About() {
  return (
    <Container title="About – David Zubal">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="w-[80px] sm:w-[500px] relative mb-8 sm:mb-0 mr-auto justify-center">
          <Image
            alt="David Zubal"
            height={100}
            width={100}
            src="/avatar.jpg"
            className="rounded-full"
          />
        </div>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <p>
            Hey, I'm David. I am a software engineer out of Sacramento, CA. I
            enjoy coffee, climbing, and writing code.
          </p>
          <p>
            I graduated from Sacramento State University with a BS in Computer
            Science.
          </p>
        </div>
      </div>
    </Container>
  );
}

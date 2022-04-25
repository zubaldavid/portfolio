import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Resume
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h3>Bio</h3>
          <p>
            Hey, I'm Lee. I lead Developer Relations at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web. I'm a Next.js contributor and help
            lead our open-source communities. I've passionate about frontend
            development and have created courses on React, Next.js, and web
            development. I'm an advisor and investor in early stage startups.
          </p>
          <h3>Education</h3>
          <p>
            David Zubal graduated from Sacramento State University with a BS in
            Computer Engineering.
          </p>
        </div>
      </div>
    </Container>
  );
}

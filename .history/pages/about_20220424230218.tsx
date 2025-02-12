import Container from 'components/Container';
import Link from 'next/link';

export default function About() {
  return (
    <Container title="About – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/leeerob">@leeerob</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/leerob">@leerob</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://leerob.io">
                <a>https://leerob.io</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/leeerob/">
                https://www.linkedin.com/in/leeerob
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Lee Robinson, Director of Developer Relations at Vercel</p>
          <h3>Long, 3rd Person</h3>
          <p>
            Lee Robinson is the Director of Developer Relations at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web and leads the Next.js community. Prior to that,
            Lee was a Senior Software Engineer focused on the frontend. An
            educator, writer, and speaker, Lee has also created extensive
            courses on React and Next.js.
          </p>
          <h3>Long, 1st Person</h3>
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

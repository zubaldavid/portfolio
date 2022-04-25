import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 classNa.me="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Resume
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h3>ONE</h3>
          <p>
            Building
          </p>
          <h3>Aviate Enterprises, Inc</h3>
          <p>
            David Zubal graduated from Sacramento State University with a BS in
            Computer Engineering.
          </p>
        </div>
      </div>
    </Container>
  );
}

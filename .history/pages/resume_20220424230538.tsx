import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Resume
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <p>TBD</p>
        </div>
      </div>
    </Container>
  );
}

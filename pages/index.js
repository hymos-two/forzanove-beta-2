//components
import Head from 'next/head';
//hooks
import { useWindowSize } from '../src/hooks/useWindowSize';

export default function Home() {
  return (
    <Container title="Forzanove 09">
      <div className="grid grid-cols-8"></div>
    </Container>
  );
}

function Container(props) {
  const size = useWindowSize();

  return (
    <div
      className="font-sans bg-black-100 w-full"
      style={{ height: size.height - 1 }}
    >
      <Head>
        <title>{props.title}</title>
      </Head>

      {props.children}
    </div>
  );
}

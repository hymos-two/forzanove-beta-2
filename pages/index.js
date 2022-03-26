//components
import Head from 'next/head';
import Image from 'next/image';
//hooks
import { useWindowSize } from '../src/hooks/useWindowSize';

export default function Home() {
  return (
    <Container title="Forzanove 09">
      <div className="grid grid-cols-8 h-screen relative bg-[url('../public/img/forzanove-bg.png')] bg-cover bg-center">
        <div className="col-span-3 bg-black-100"></div></div>
        <div className="absolute">
          <Image src={forzanoveLogo} />
        </div>
    </Container>
  );
}

function Container(props) {
  const size = useWindowSize();

  return (
    <div
      className="font-sans text-white bg-black-100 w-full overflow-scroll"
      style={{ height: size.height - 1 }}
    >
      <Head>
        <title>{props.title}</title>
      </Head>

      {props.children}
    </div>
  );
}

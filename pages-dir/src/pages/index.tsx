import Head from "next/head";
import { Suspense } from "react";

const data: number[] = new Array(10_000).fill(0);
export default function Home() {
  const time = Date.now();
  return (
    <>
      <Head>
        <title>pages dir</title>
      </Head>
      <main>
        {/* <Suspense fallback={<div>loading...</div>}> */}
          {data.map((n, i) => (
            <Child key={i * 1000} initialTime={time} position={i} />
          ))}
        {/* </Suspense> */}
      </main>
    </>
  );
}

function Child({
  initialTime,
  position,
}: {
  initialTime: number;
  position: number;
}) {
  return (
    <>
      <div>{Date.now() - initialTime}ms</div>
      <div>{position}</div>
    </>
  );
}

import Head from "next/head";
import { Suspense, useEffect, useState } from "react";

const data: number[] = new Array(10_000).fill(0);
export default function Home() {
  // if we won't do that way we will get hydration error, since that component is runing on the server, and reruning on the client.
  const [time, setTime] = useState(0);
  useEffect(() => {
    setTime(Date.now());
  }, []);
  return (
    <>
      <Head>
        <title>pages dir</title>
      </Head>
      <main>
        {data.map((n, i) => (
          <Child key={i * 1000} initialTime={time} position={i} />
        ))}
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
  // if we won't do that way we will get hydration error, since that component is runing on the server, and reruning on the client.
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    setCurrentTime(Date.now() - initialTime);
  }, [initialTime]);
  return (
    <>
      <div>{currentTime}ms</div>
      <div>{position}</div>
    </>
  );
}

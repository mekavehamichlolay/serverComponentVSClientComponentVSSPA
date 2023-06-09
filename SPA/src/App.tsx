export default function Home() {
  const time = Date.now();
  const data: number[] = new Array(10_000).fill(0);
  return (
    <main>
      {data.map((n, i) => (
        <Child key={i * 1000} initialTime={time} position={i} />
      ))}
    </main>
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

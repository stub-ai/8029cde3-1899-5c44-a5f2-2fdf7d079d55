import CPU from '../components/CPU';

const program = [
  'LOAD 10',
  'ADD 20',
  'STORE',
  'SUB 5',
  'JUMP 0',
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CPU program={program} />
    </main>
  );
}
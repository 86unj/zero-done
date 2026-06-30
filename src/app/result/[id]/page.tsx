import { Header } from "@/components/layout/Header";
import { ResultLoader } from "@/components/game/ResultLoader";

export default async function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-6 max-w-lg mx-auto w-full">
        <ResultLoader id={id} />
      </main>
    </>
  );
}

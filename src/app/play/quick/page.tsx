import { Header } from "@/components/layout/Header";
import { MessageForm } from "@/components/game/MessageForm";
import { QUICK_MODE_PERSONALITY } from "@/lib/personalities";
import { QUICK_SCENARIO } from "@/lib/scenarios";

export default function QuickPlayPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-4 sm:py-5 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <MessageForm
          mode="quick"
          scenario={QUICK_SCENARIO}
          personality={QUICK_MODE_PERSONALITY.id}
        />
      </main>
    </>
  );
}

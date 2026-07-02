import { QrDisplay } from "@/components/qr/QrDisplay";
import { resolveSiteOrigin } from "@/lib/site-url";

export default async function QrPage() {
  const origin = await resolveSiteOrigin();
  const playUrl = `${origin}/play/quick`;

  return <QrDisplay playUrl={playUrl} />;
}

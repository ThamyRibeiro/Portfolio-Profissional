import { Portfolio } from "@/features/portfolio/portfolio";
import { InstallButton, PwaRegistration } from "@/features/pwa/pwa.client";
export default function Home() {
  return (
    <>
      <Portfolio installAction={<InstallButton />} />
      <PwaRegistration />
    </>
  );
}

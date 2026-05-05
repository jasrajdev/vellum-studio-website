import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import Archive from "@/components/Archive";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#F2F0E9]">
      <Hero />
      <div className="px-6 md:px-20">
        <div className="mx-auto my-16 h-[1px] w-full max-w-[1200px] bg-[#2C2C2B]/10 md:my-24" />
      </div>
      <Narrative />
      <div className="px-6 md:px-20">
        <div className="mx-auto my-16 h-[1px] w-full max-w-[1200px] bg-[#2C2C2B]/10 md:my-24" />
      </div>
      <Archive />
    </main>
  );
}

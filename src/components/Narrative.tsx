import Image from "next/image";

const reflections = [
  "We place the idea before the interface, allowing space and rhythm to carry the story with calm precision.",
  "Every phrase is measured, every transition slowed just enough to feel intentional rather than decorative.",
  "Material, light, and type are treated as one language, held together by a restrained brass accent.",
];

export default function Narrative() {
  return (
    <section
      id="philosophy"
      className="overflow-hidden bg-[#F2F0E9] px-6 py-24 md:px-20 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 max-w-sm md:mb-14">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.28em] text-[#A68B5B]">
            Philosophy
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-20">
          <div className="w-full space-y-10 md:flex-1">
            <h2 className="font-serif text-5xl font-light leading-[0.94] text-[#2C2C2B] md:text-7xl">
              Philosophy that
              <br />
              feels editorial.
            </h2>

            <div className="max-w-xl space-y-6">
              {reflections.map((reflection) => (
                <p
                  key={reflection}
                  className="font-sans text-base leading-8 text-[#2C2C2B] md:text-lg md:leading-9"
                >
                  {reflection}
                </p>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-10 md:flex-1 md:items-end md:gap-14">
            <div className="w-full md:w-[62%]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/narrative-detail.jpg"
                  alt="Editorial detail composition"
                  fill
                  sizes="(max-width: 768px) 100vw, 26vw"
                  className="object-cover brightness-95 grayscale opacity-80 transition-all duration-700 ease-out hover:grayscale-0 hover:opacity-100"
                />
              </div>
            </div>

            <div className="w-full md:w-[70%]">
              <div className="relative aspect-[5/6] overflow-hidden rounded-sm">
                <Image
                  src="/images/narrative-studio.jpg"
                  alt="Vellum studio scene"
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover brightness-95 grayscale opacity-80 transition-all duration-700 ease-out hover:grayscale-0 hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

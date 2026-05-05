"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  image: string;
  year: string;
  discipline: string;
  description: string;
  titleClassName: string;
  imageWidthClassName: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "House of Quiet",
    image: "/images/archive-house-of-quiet.jpg",
    year: "2025",
    discipline: "Spatial Identity",
    description:
      "A residence translated into a slower visual cadence, where stone, paper, and silence shaped the system.",
    titleClassName: "md:pr-12",
    imageWidthClassName: "md:w-[64%]",
  },
  {
    id: "02",
    title: "Atlas for Light",
    image: "/images/archive-atlas-for-light.jpg",
    year: "2024",
    discipline: "Editorial System",
    description:
      "A publication language built around tonal restraint, wide margins, and sequencing that feels collected rather than announced.",
    titleClassName: "md:pl-10",
    imageWidthClassName: "md:w-[68%]",
  },
  {
    id: "03",
    title: "Field Notes No. 7",
    image: "/images/archive-field-notes.jpg",
    year: "2023",
    discipline: "Research Object",
    description:
      "A study in observation and tactility, balancing documentary rigor with a softer, more atmospheric surface.",
    titleClassName: "md:pr-8",
    imageWidthClassName: "md:w-[60%]",
  },
];

const archiveNotes = [
  "The archive is arranged as a procession rather than a catalogue, allowing each project to arrive with its own pace.",
  "Titles lead, images breathe beside them, and the atmosphere changes on hover without turning the section into an interface.",
];

export default function Archive() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const activeProject = useMemo(
    () =>
      projects.find((project) => project.id === activeProjectId) ?? projects[0],
    [activeProjectId],
  );

  return (
    <section
      id="work"
      className="overflow-hidden bg-[#F2F0E9] px-6 py-24 md:px-20 md:py-32"
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.09] transition-opacity duration-[800ms] ease-out">
          <div className="absolute inset-[-8%] blur-3xl">
            <Image
              key={activeProject.id}
              src={activeProject.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover brightness-95"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-10 md:flex-row md:gap-20">
          <div className="w-full max-w-sm space-y-6 md:flex-1">
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.28em] text-[#A68B5B]">
              Archive
            </p>

            <h2 className="font-serif text-5xl font-light leading-[0.94] text-[#2C2C2B] md:text-7xl">
              Work held in
              <br />
              quiet succession.
            </h2>
          </div>

          <div className="w-full max-w-xl space-y-6 md:flex-1 md:pt-2">
            {archiveNotes.map((note) => (
              <p
                key={note}
                className="font-sans text-base leading-8 text-[#2C2C2B] md:text-lg md:leading-9"
              >
                {note}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          {projects.map((project, index) => {
            const isActive = project.id === activeProject.id;
            const reverseRow = index % 2 === 1;

            return (
              <article
                key={project.id}
                className={`group flex flex-col gap-10 md:gap-20 ${
                  reverseRow ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                onMouseEnter={() => setActiveProjectId(project.id)}
              >
                <div className="w-full md:flex-1">
                  <div
                    className={`w-full ${project.imageWidthClassName} ${
                      reverseRow ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 34vw"
                        className="object-cover brightness-95 grayscale opacity-80 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>

                <div className={`w-full space-y-5 md:flex-1 ${project.titleClassName}`}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#A68B5B]">
                    <span className="font-sans text-[0.68rem] uppercase tracking-[0.24em]">
                      {project.id}
                    </span>
                    <span className="font-sans text-[0.68rem] uppercase tracking-[0.24em]">
                      {project.discipline}
                    </span>
                    <span className="font-sans text-[0.68rem] uppercase tracking-[0.24em]">
                      {project.year}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`block cursor-pointer text-left font-serif text-5xl font-light text-[#2C2C2B] transition-all duration-700 ease-out hover:opacity-100 md:text-7xl ${
                      isActive ? "opacity-100" : "opacity-80"
                    }`}
                    onFocus={() => setActiveProjectId(project.id)}
                    onClick={() => setActiveProjectId(project.id)}
                  >
                    {project.title}
                  </button>

                  <p className="max-w-xl font-sans text-base leading-8 text-[#2C2C2B] md:text-lg md:leading-9">
                    {project.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

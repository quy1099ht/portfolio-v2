import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "lucide-react";
import { NextSeo } from "next-seo";

import { siteMetadata } from "@/data/siteMetaData.mjs";

type GalleryEvent = {
  title: string;
  image: string;
};

const GALLERY_EVENTS: GalleryEvent[] = [
  {
    title: "KMS Software Year End Party 2022",
    image: "/images/events/kms-software.png",
  },
  {
    title: "Elemica Team Year End Party 2022",
    image: "/images/events/elemica-team-2022.png",
  },
  {
    title: "NCC Team Building 2025",
    image: "/images/events/ncc-teambuilding-2025.png",
  },
  {
    title: "NCC Year End Party 2025",
    image: "/images/events/year-end-party-ncc-2025.png",
  },
];

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);

  return (
    <>
      <NextSeo
        title="Gallery | Quy Dinh Tran"
        description="Photos from events attended by Quy Dinh Tran."
        canonical={`${siteMetadata.siteUrl}/gallery`}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Gallery
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {GALLERY_EVENTS.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md dark:bg-zinc-800"
              >
                <button
                  type="button"
                  aria-label={`View ${event.title} photo`}
                  onClick={() => setSelectedEvent(event)}
                  className="relative block aspect-[2.1/1] w-full cursor-zoom-in"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </button>
                <h2 className="p-4 text-sm font-semibold text-foreground sm:text-base">
                  {event.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Transition show={selectedEvent !== null} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[999999]"
          onClose={() => setSelectedEvent(null)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="ease-in duration-150"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
            >
              <Dialog.Panel className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-lg bg-zinc-950">
                <Dialog.Title className="sr-only">
                  {selectedEvent?.title}
                </Dialog.Title>
                <button
                  type="button"
                  aria-label="Close image"
                  onClick={() => setSelectedEvent(null)}
                  className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
                >
                  <XIcon className="h-6 w-6" />
                </button>
                {selectedEvent && (
                  <div className="relative h-[70vh] w-full">
                    <Image
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

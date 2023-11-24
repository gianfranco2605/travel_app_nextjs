"use client";
import { useState, useRef } from "react";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backGroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backGroundImage,
  title,
  subTitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backGroundImage} bg-cover bg-no-repeat lg:rounded-r-md 2xl:rounded-md`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-md bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>
        <div className="gap-6 flexCenter">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                alt="person"
                key={url}
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const scrollContainerRef = useRef(null);

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg_mb-10 lg:py-20 xl:mb-20">
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex w-full items-start justify-start gap-8 overflow-x-auto h-[340px] lg:h-[400px] xl:h-[640px]"
      >
        <CampSite
          backGroundImage="bg-bg-img-1"
          title="Lineas Nazca"
          subTitle="Nazca, Piura"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backGroundImage="bg-bg-img-2"
          title="Dunas de Usaca"
          subTitle="Distretto di Changuillo"
          peopleJoined="30+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl-rounded-5xl xl:py-20 relative w-full overflow-hidden rounded-md">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;

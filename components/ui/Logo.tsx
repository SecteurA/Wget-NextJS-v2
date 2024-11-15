"use client";

import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="relative w-40 h-12">
      <Image
        src="https://login.wget.ma/Wget-Logo.svg"
        alt="Wget Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};
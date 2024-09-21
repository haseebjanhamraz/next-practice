"use client"

import Image from 'next/image';

export default function BKRCLogo() {
  return (
    <div className={`flex flex-row items-center justify-center leading-none text-white`}>
      <Image src={"/logo.png"} width={70} height={70} alt='BKRC Logo' className='rounded-full' />
    </div>
  );
}
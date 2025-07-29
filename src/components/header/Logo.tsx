'use client'

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block">
                <div className="relative w-40 h-10 sm:w-48 sm:h-12 md:w-56 md:h-14">
                    <Image
                        src="/images/Anglokom_logo.png"
                        alt="Anglokom | Profesjonalne szkolenia językowe"
                        fill
                        className="object-contain object-left"
                        priority
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                    />
                </div>
            </Link>
        </div>
    )
}
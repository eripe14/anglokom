'use client'

import { ChevronDown } from "lucide-react";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/header/DropdownMenu"
import { offerItems, scrollToSection } from './offerData';

export default function OfferDropdown({ t }: { t: (key: string) => string }) {
    const router = useRouter();

    const handleOfferClick = (sectionId: string) => {
        scrollToSection(sectionId, router);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="text-gray-700 hover:text-sky-700 px-3 py-3 text-md font-medium transition-all duration-300 relative group flex items-center focus:outline-none">
                    {t('nav.offer')}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-sky-700 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-80 p-2 bg-white border border-gray-200 shadow-xl rounded-xl mt-2"
                sideOffset={8}
            >
                <div className="space-y-1">
                    {offerItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <DropdownMenuItem
                                key={item.section}
                                asChild
                                className="p-0 focus:bg-transparent"
                            >
                                <button
                                    onClick={() => handleOfferClick(item.section)}
                                    className="w-full text-left p-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-sky-50 transition-all duration-300 group border border-transparent hover:border-cyan-100 hover:shadow-md"
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="h-5 w-5 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-gray-900 font-semibold text-sm group-hover:text-sky-700 transition-colors duration-300">
                                                {item.label}
                                            </div>
                                            <div className="text-gray-500 text-xs mt-1 leading-relaxed">
                                                {item.description}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 mt-2">
                                            <ChevronDown className="h-4 w-4 text-gray-400 rotate-[-90deg] group-hover:text-sky-500 transition-colors duration-300" />
                                        </div>
                                    </div>
                                </button>
                            </DropdownMenuItem>
                        );
                    })}
                </div>

                {/* Footer z głównym linkiem */}
                <div className="border-t border-gray-100 mt-3 pt-3">
                    <Link
                        href="/oferta"
                        className="block w-full text-center py-2.5 px-4 text-sm font-medium text-sky-700 hover:text-sky-800 hover:bg-sky-50 rounded-lg transition-all duration-300"
                    >
                        Zobacz całą ofertę →
                    </Link>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
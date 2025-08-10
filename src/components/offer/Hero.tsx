import React from "react";

export default function Hero() {
    return (
        <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Oferta Szkoleń</h1>
                <p className="text-xl text-sky-100 max-w-4xl mx-auto leading-relaxed text-justify">
                    Kompleksowe szkolenia językowe i biznesowe dostosowane do Twoich potrzeb.
                    Profesjonalne podejście, doświadczeni trenerzy i elastyczne formy nauki.
                </p>
            </div>
            <div
                className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div
                className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        </div>
    );
}
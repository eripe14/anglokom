'use client'

import React, { useEffect, useState } from 'react';
import { ExternalLink, Settings, Database, Users, FileText, Image, Shield } from 'lucide-react';

const StrapiAdminRedirect = () => {
    const [strapiUrl, setStrapiUrl] = useState('http://localhost:1337/admin');
    const [isConnecting, setIsConnecting] = useState(false);
    const [connectionStatus, setConnectionStatus] = useState<'idle' | 'checking' | 'success' | 'error'>('idle');

    const checkStrapiConnection = async (url: string) => {
        setIsConnecting(true);
        setConnectionStatus('checking');

        try {
            await fetch(url.replace('/admin', '/admin/init'), {
                method: 'GET',
                mode: 'no-cors'
            });
            setConnectionStatus('success');
            return true;
        } catch {
            setConnectionStatus('error');
            return false;
        } finally {
            setIsConnecting(false);
        }
    };

    const handleRedirect = () => {
        window.open(strapiUrl, '_blank', 'noopener,noreferrer');
    };

    const handleQuickConnect = async () => {
        const connected = await checkStrapiConnection(strapiUrl);
        if (connected || connectionStatus === 'error') {
            handleRedirect();
        }
    };

    useEffect(() => {
        // Auto-check connection on load
        checkStrapiConnection(strapiUrl);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Settings className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Panel Admina</h1>
                        <p className="text-purple-200">Zarządzaj treścią swojego bloga</p>
                    </div>

                    {/* URL Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-purple-200 mb-2">
                            Adres Strapi Admin
                        </label>
                        <input
                            type="url"
                            value={strapiUrl}
                            onChange={(e) => setStrapiUrl(e.target.value)}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="http://localhost:1337/admin"
                        />
                    </div>

                    {/* Connection Status */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-purple-200">Status połączenia:</span>
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${
                                    connectionStatus === 'success' ? 'bg-green-400' :
                                        connectionStatus === 'error' ? 'bg-red-400' :
                                            connectionStatus === 'checking' ? 'bg-yellow-400 animate-pulse' :
                                                'bg-gray-400'
                                }`}></div>
                                <span className="text-purple-100">
                  {connectionStatus === 'success' ? 'Połączono' :
                      connectionStatus === 'error' ? 'Błąd połączenia' :
                          connectionStatus === 'checking' ? 'Sprawdzanie...' :
                              'Nieznany'}
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 mb-6">
                        <button
                            onClick={handleQuickConnect}
                            disabled={isConnecting}
                            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            {isConnecting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Sprawdzanie połączenia...
                                </>
                            ) : (
                                <>
                                    <ExternalLink className="w-4 h-4" />
                                    Otwórz Panel Admina
                                </>
                            )}
                        </button>

                        <button
                            onClick={handleRedirect}
                            className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-lg transition-colors border border-white/20"
                        >
                            Otwórz bez sprawdzania
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="border-t border-white/20 pt-6">
                        <h3 className="text-sm font-medium text-purple-200 mb-3">Szybkie linki:</h3>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(strapiUrl.replace('/admin', '/admin/content-manager'), '_blank');
                                }}
                                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-200 hover:text-white transition-colors"
                            >
                                <FileText className="w-3 h-3" />
                                Artykuły
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(strapiUrl.replace('/admin', '/admin/content-manager/collection-types/plugin::users-permissions.user'), '_blank');
                                }}
                                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-200 hover:text-white transition-colors"
                            >
                                <Users className="w-3 h-3" />
                                Użytkownicy
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(strapiUrl.replace('/admin', '/admin/plugins/upload'), '_blank');
                                }}
                                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-200 hover:text-white transition-colors"
                            >
                                <Image className="w-3 h-3" />
                                Media
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(strapiUrl.replace('/admin', '/admin/settings'), '_blank');
                                }}
                                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-200 hover:text-white transition-colors"
                            >
                                <Shield className="w-3 h-3" />
                                Ustawienia
                            </a>
                        </div>
                    </div>
                </div>

                {/* Info Card */}
                <div className="mt-4 bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                            <h4 className="text-sm font-medium text-white mb-1">Jak to działa?</h4>
                            <p className="text-xs text-purple-200 leading-relaxed">
                                Ten panel przekierowuje Cię do interfejsu administracyjnego Strapi.
                                Upewnij się, że Strapi jest uruchomione na podanym adresie.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrapiAdminRedirect;
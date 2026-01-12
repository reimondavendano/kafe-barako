'use client';

import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const MESSENGER_LINK_MALOLOS = "https://m.me/103360595563043";
const MESSENGER_LINK_TALISAY = "https://m.me/113017253874491";

type FloatingMessengerProps = {
    branch?: 'malolos' | 'talisay';
};

export function FloatingMessenger({ branch = 'malolos' }: FloatingMessengerProps) {
    const [isVisible, setIsVisible] = useState(false);
    const messengerLink = branch === 'malolos' ? MESSENGER_LINK_MALOLOS : MESSENGER_LINK_TALISAY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            href={messengerLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-[60] p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 flex items-center justify-center group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            aria-label="Chat on Messenger"
        >
            <MessageCircle className="w-8 h-8 fill-current" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Chat with us!
            </span>
        </a>
    );
}

import Link from 'next/link';

type FooterProps = {
    branch: 'malolos' | 'talisay';
};

export default function Footer({ branch }: FooterProps) {
    const branchName = branch === 'malolos' ? 'Malolos Branch' : 'Talisay Branch';
    const address = branch === 'malolos'
        ? 'Malolos City, Bulacan'
        : 'Talisay, Batangas';

    return (
        <footer className="bg-dark text-secondary-light py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-accent">Kape Barako</h3>
                    <p className="mb-2">{branchName}</p>
                    <p className="text-sm opacity-80">
                        Experience the authentic taste of Batangas coffee in a rustic and relaxing ambiance.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-accent transition-colors">Home</Link></li>
                        <li><Link href="#menu" className="hover:text-accent transition-colors">Menu</Link></li>
                        <li><Link href="#packages" className="hover:text-accent transition-colors">Packages</Link></li>
                        <li><Link href="#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-4 text-white">Visit Us</h4>
                    <p className="mb-2">{address}</p>
                    <p className="mb-2">Open Daily: 8:00 AM - 10:00 PM</p>
                    <div className="flex gap-4 mt-4">
                        {/* Social Icons Placeholders */}
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">F</div>
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">I</div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-60">
                &copy; {new Date().getFullYear()} Kape Barako. All rights reserved.
            </div>
        </footer>
    );
}

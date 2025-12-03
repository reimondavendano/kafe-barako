import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
    branch: 'malolos' | 'talisay';
};

export default function Hero({ branch }: HeroProps) {
    const branchName = branch === 'malolos' ? 'Malolos' : 'Talisay';
    // Local hero image
    const heroImage = '/hero/hero_cafe.png';

    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white">
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt={`Kafe Barako ${branchName}`}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg font-[family-name:var(--font-bebas)] tracking-wider">
                    Kafe Barako
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-secondary-light">
                    {branchName} Branch
                </h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                    Experience the bold taste of heritage in every cup.
                </p>
                <Link
                    href="#menu"
                    className="bg-accent hover:bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                    View Menu
                </Link>
            </div>
        </section>
    );
}

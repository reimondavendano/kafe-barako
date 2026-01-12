import Image from 'next/image';

export default function Banner() {
    return (
        <section className="bg-secondary py-4 overflow-hidden relative">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center gap-4 animate-pulse">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">NEW!</span>
                    <p className="text-dark font-medium">
                        Check out our <span className="font-bold text-primary">New Menu Items</span> & Offerings!
                    </p>
                </div>
                <button className="text-primary font-bold hover:underline text-sm">
                    Check Details &rarr;
                </button>
            </div>
        </section>
    );
}

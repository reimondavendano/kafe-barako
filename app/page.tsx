import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#6B4423 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="mb-12">
          {/* Logo or Title */}
          <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <Image
              src="/assets/kape barako.jpg"
              alt="Kape Barako Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-4 tracking-tight">
            Kape Barako
          </h1>
          <p className="text-xl md:text-2xl text-primary font-light italic">
            "Authentic Batangas Coffee Experience"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Malolos Branch Card */}
          <Link href="/kafe-barako-malolos" className="group">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col items-center">
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-accent group-hover:scale-110 transition-transform">
                <Image
                  src="/assets/kape barako.jpg"
                  alt="Malolos Branch"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">Malolos Branch</h2>
              <p className="text-gray-600 mb-6">Visit our cozy spot in the heart of Bulacan.</p>
              <span className="inline-block px-6 py-2 bg-secondary text-dark rounded-full font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                Enter Branch &rarr;
              </span>
            </div>
          </Link>

          {/* Talisay Branch Card */}
          <Link href="/kafe-barako-talisay" className="group">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col items-center">
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-accent group-hover:scale-110 transition-transform">
                <Image
                  src="/assets/kape_talisay.jpg"
                  alt="Talisay Branch"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">Talisay Branch</h2>
              <p className="text-gray-600 mb-6">Enjoy your coffee with a view of Taal Lake.</p>
              <span className="inline-block px-6 py-2 bg-secondary text-dark rounded-full font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                Enter Branch &rarr;
              </span>
            </div>
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Kape Barako Coffee Shop
      </footer>
    </main>
  );
}

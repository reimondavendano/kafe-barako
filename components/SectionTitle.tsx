type SectionTitleProps = {
    children: React.ReactNode;
    subtitle?: string;
};

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
    return (
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">
                {children}
            </h2>
            {/* Decorative line */}
            <div className="flex justify-center mb-6">
                <div className="w-24 h-1 bg-accent"></div>
            </div>
            {subtitle && (
                <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
        </div>
    );
}

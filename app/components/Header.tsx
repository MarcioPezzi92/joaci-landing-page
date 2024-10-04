import Image from 'next/image';

interface HeaderProps {
    logoSrc: string;
    altText: string;
    width: number;
    height: number;
}

function Header({ logoSrc, altText, width, height }: HeaderProps) {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex items-center justify-center py-4">
                <Image
                    src={logoSrc}
                    alt={altText}
                    width={width}
                    height={height}
                />
            </div>
        </header>
    );
}

export default Header;
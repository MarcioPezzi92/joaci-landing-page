import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <Image
          src="https://d335luupugsy2.cloudfront.net/cms/files/254679/1706054975/$o1u6d23jn"
          alt="Logo Argentum Investimentos"
          width={80}
          height={50}
        />
        <p className="text-white text-sm">
          © 2022 | ARGENTUM INVESTIMENTOS. Todos os Direitos Reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
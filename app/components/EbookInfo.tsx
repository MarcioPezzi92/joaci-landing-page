"use client";

function EbookInfo() {
    const handleClick = () => {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="ebook-info bg-white py-20">
            <div className="container w-1/2 mx-auto text-center">
                <h3 className="text-3xl font-bold text-blue-500 mb-8">
                    Descubra as empresas que pagarão os melhores dividendos em 2024
                </h3>
                <p className="text-lg text-justify md:text-xl text-gray-700 mb-12">
                    Aprenda como investir em dividendos e montar uma carteira vencedora com excelentes
                    empresas, sólidas pagadoras de dividendos: empresas com lucro recorrente, bom histórico
                    de distribuição de proventos, setor da economia estável com resultados ao longo dos anos.
                </p>
                <div className="text-left">
                    <p className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Você irá aprender neste E-book:</p>
                    <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 space-y-4">
                        <li>O que são dividendos</li>
                        <li>Como se posicionar para ter direito a receber dividendos</li>
                        <li>Como calcular os dividendos que você terá direito a receber</li>
                        <li>Quais foram as melhores pagadoras de dividendos do último ano</li>
                    </ul>
                </div>
                <button 
                    onClick={handleClick} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-full mt-8"
                >
                    Baixar E-book Grátis
                </button>
            </div>
        </section>
    );
}

export default EbookInfo;
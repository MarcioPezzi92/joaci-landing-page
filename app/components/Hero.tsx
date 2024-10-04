"use client";

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Schema de validação com Yup
const schema = yup.object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
    personal_phone: yup.string().required('O telefone é obrigatório'),
    captcha: yup.string().required('Por favor, preencha o captcha'),
}).required();

function Hero() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        // Aqui você pode enviar os dados do formulário para o RD Station
        console.log(data);
    };

    return (
        <section className="hero bg-black py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="mr-8"> {/* Imagem */}
                    <Image
                        src="https://d335luupugsy2.cloudfront.net/cms/files/254679/1699626063/$a4d5hqrwp6d"
                        alt="Capa do E-book Dividendos 2024"
                        width={400}
                        height={500}
                    />
                </div>
                <div className="max-w-96"> {/* Formulário */}
                    <div className="hero-text text-white text-center md:text-left">
                        <h3 className="text-3xl font-bold mb-6 text-center">Baixe o E-book Grátis:</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                            <div className="form-field relative pb-6">
                                <label htmlFor="name" className="block">Nome *</label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name')}
                                    className={`border-b-2 border-white focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : ''} px-3 py-1 w-full bg-transparent text-white`}
                                />
                                {errors.name && <span className="error text-red-500 absolute bottom-0 left-0">{errors.name.message}</span>}
                            </div>
                            <div className="form-field relative pb-6">
                                <label htmlFor="email" className="block">Email *</label>
                                <input
                                    type="email"
                                    id="email" {...register('email')}
                                    className={`border-b-2 border-white focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : ''} px-3 py-1 w-full bg-transparent text-white`}
                                />
                                {errors.email && <span className="error text-red-500 absolute bottom-0 left-0">{errors.email.message}</span>}
                            </div>
                            <div className="form-field relative pb-6">
                                <label htmlFor="personal_phone" className="block">Telefone *</label>
                                <input
                                    type="tel"
                                    id="personal_phone" {...register('personal_phone')}
                                    className={`border-b-2 border-white focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : ''} px-3 py-1 w-full bg-transparent text-white`}
                                />
                                {errors.personal_phone && <span className="error text-red-500 absolute bottom-0 left-0">{errors.personal_phone.message}</span>}
                            </div>
                            <div className="form-field relative pb-6">
                                <label htmlFor="captcha" className="block">
                                    <span id="math_expression">11 + 4 = ?</span>
                                </label>
                                <input
                                    type="text"
                                    id="captcha" {...register('captcha')}
                                    className={`border-b-2 border-white focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : ''} px-3 py-1 w-full bg-transparent text-white`}
                                />
                                {errors.captcha && <span className="error text-red-500 absolute bottom-0 left-0">{errors.captcha.message}</span>}
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-full mt-2">
                                Baixar E-book Grátis
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
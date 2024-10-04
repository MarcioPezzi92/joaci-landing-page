/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd335luupugsy2.cloudfront.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
    output: 'export',
};

export default nextConfig;

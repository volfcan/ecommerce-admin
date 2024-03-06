/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: '',
            pathname: '/**',
        }
        ]
    }
}
require('dotenv').config();

module.exports = nextConfig

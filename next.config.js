/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

// Refer to bundle analyzer docs if additional
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	pwa: {
		dest: "public"
	}
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
        "mks-frontend-challenge-04811e8151e6.herokuapp.com",
        "mks-sistemas.nyc3.digitaloceanspaces.com",
    ]
},
    compiler: {
        styledComponents: true,
      },
      experimental: {
        css: true,
      },
}

module.exports = nextConfig

const ghpages = true;
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    ghpages: ghpages,
    ghpath: '/p5-Showcase'
  },
  basePath: ghpages?'/p5-Showcase':"",

}

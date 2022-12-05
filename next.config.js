module.exports = () => {
  return {
    rewrites: () => {
      return [
        {
          source: "/sr",
          destination: "https://v-live-kr.kollus.com/sr",
        },
      ];
    },
    reactStrictMode: true,
    images: {
      minimumCacheTTL: 5,
      disableStaticImages: true,
      domains: ['static.live.kr.kollus.com', 'localhost']
    },
  }
};

const { default: VitePluginFonts } = require("vite-plugin-fonts");

module.exports = {
  plugins: [
    VitePluginFonts({
      custom: {
        families: [
          {
            name: "Cyberpunk",
            src: "./assets/Cyberpunk.ttf",
          },
        ],
      },
    }),
  ],
};

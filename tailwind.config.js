module.exports = {
  mode: "jit",

  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cyberpunk"]
  }
}

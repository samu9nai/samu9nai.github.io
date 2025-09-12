/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        // 우선순위: 영문 Nunito → 한글 Pretendard → 일본어 Zen Maru Gothic → 시스템 폴백
        sans: [
          "Nunito",
          "Pretendard",
          "Zen Maru Gothic",
          "Apple SD Gothic Neo",
          "Hiragino Kaku Gothic ProN",
          "Noto Sans CJK KR",
          "Noto Sans CJK JP",
          "Noto Sans KR",
          "Noto Sans JP",
          "system-ui",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

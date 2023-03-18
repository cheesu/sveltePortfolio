/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"], 
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기
      
        nanumb: ["nanumb", "sans-serif"],
        nanum: ["nanum", "sans-serif"],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens:{
        p320: '320px',
        p480:'480px',
        p631:'631px',
        p768:'768px',
        p992:'992px',
        p1024:'1024px',
        p1200:'1200px',
        p1240:'1240px',
        p1440:'1440px',    
      }, 
      colors: {
          'carousel-indicator': '#ff0000', // Основной цвет для индикаторов
          'carousel-indicator-active': '#00ff00'
      
      }
    },
  },
  plugins: [],
}


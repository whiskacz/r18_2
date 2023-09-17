module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}',
    './public/**/*.html'],
    theme: {
        
        extend: { 
                 backgroundImage: {
                 'mainImage' : "url('/src/images/main.jpeg')"
               }  
        },
    },
    plugins: []
}
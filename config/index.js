module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "dsfgkjashgfkajsgdfhksadjf090987ss",
    api: process.env.NODE_ENV === "production" ? "https://api.loja.hernanymotoso.com.br" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja.hernanymotoso.com.br" : "http://localhost:8000",
};
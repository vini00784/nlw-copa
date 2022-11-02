// Import da Fstify de dentro do pacote fastify
import Fastify from 'fastify'

// Primeira função que será executada
async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.listen({ port:3333 })
}

bootstrap()

// O NODE não suporta TypeScript, portanto é preciso rodar o comando "npx tsc"
    // Isso "converte" o código em TS para JS
// No package.json, cria-se um script chamando "dev"
    // Com o comando "tsx src/server.ts"
    // E no terminal se usa "npm run dev", isso é semelhante ao nodemon


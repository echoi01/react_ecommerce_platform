// Creates connection to remote prisma DB and allows queries via JS

const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDef: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false
});

module.exports = db;
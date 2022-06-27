import { Prisma, PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
	log: [{ level: 'query', emit: 'event' }]
})

prisma.$on('query', (e: Prisma.QueryEvent) => {
	// Add query middleware event logging here
})

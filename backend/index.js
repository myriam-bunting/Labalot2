const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// async function main() {
//   const allAnimals = await prisma.animals.findMany();
//   console.log(allAnimals);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

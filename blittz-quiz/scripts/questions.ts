import questions from '../data/cstechQuestions.js';

let questionsPrisma: any;

async function seedQuestions() {
  const { PrismaClient } = await import('@prisma/client');
  

  questionsPrisma = new PrismaClient();

  console.log("Seeding questions...");

  for (const question of questions) {
    const createdQuestion = await questionsPrisma.question.create({
      data: {
        text: question.text,
        quizId: "68bdc9fb29240f4010035c5f",
        options: {
          create: question.options,
        },
        //difficulty: question.difficulty,
      },
    });

    console.log(`Created question: ${createdQuestion.text}`);
  }
  console.log("Seeding questions completed.");
}

seedQuestions()
  .catch((e) => {
    console.log("Error seeding questions: ", e);
  })
  .finally(async () => {
    await questionsPrisma.$disconnect();
  });
// ✅ ESM import instead of require
import { PrismaClient } from '@prisma/client';

// ✅ strongly typed Prisma client
const quizzesPrisma = new PrismaClient();  

const quizzes = [
  {
    title: "Computer Science Basics",
    description: "A quiz about fundamental computer science concepts.",
    categoryId: "676482a0a9fd4923c30ff2d7", // Replace with the actual category ID
  },
  {
    title: "Programming Fundamentals",
    description: "Test your knowledge of basic programming concepts.",
    categoryId: "68bd886c09b44824022aa4b9",
  },
  {
    title: "Data Structures",
    description: "Assess your understanding of data structures.",
    categoryId: "68bd886c09b44824022aa4ba",
  },
  {
    title: "Physics",
    description: "Test your knowledge of physics",
    categoryId: "68bd886c09b44824022aa4b7",
  },
  {
    title: "Biology",
    description: "Test your knowledge of physics",
    categoryId: "68bd886c09b44824022aa4b7",
  },
  {
    title: "Chemistry",
    description: "Test your knowledge of physics",
    categoryId: "68bd886c09b44824022aa4b7",
  },
];

async function seedQuizzes() {

  console.log("Seeding quizzes...");

  for (const quiz of quizzes) {
    const craetedQuiz = await quizzesPrisma.quiz.create({
      data: quiz,
    });

    console.log("Created quiz: ", `${craetedQuiz.title}`);
  }

  console.log("Seeding quizzes completed.");
}

seedQuizzes()
  .catch((e) => {
    console.log("Error seeding quizzes: ", e);
  })
  .finally(async () => {
    await quizzesPrisma.$disconnect();
  });
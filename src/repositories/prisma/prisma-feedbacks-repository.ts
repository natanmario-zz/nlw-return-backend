import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepositories,
} from "../feedbacks-repositories";

export class PrismaFeedbackRepository implements FeedbacksRepositories {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}

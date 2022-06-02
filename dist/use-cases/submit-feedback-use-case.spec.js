"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: async () => { } }, { sendMail: async () => { } });
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "test.png",
        })).resolves.not.toThrow();
    });
});

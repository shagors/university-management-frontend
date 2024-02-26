import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select semester" }),
  year: z.string({ required_error: "Please select semester year" }),
  startMonth: z.string({
    required_error: "Please select semester start month",
  }),
  endMonth: z.string({
    required_error: "Please select semester end month",
  }),
});

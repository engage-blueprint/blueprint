import { z } from "zod";

export default z.object({
  id: z.coerce.number(),
  name: z.string().default("Beginner Ballet"),
  description: z
    .string()
    .default(
      "We would like all registered students to view this following video before the class starts to get a better understanding of basic ballet moves. We look forward to seeing you all soon!"
    ),
  fgcolor: z.string().default("#ffffff"),
  bgcolor: z.string().default("#47096D"),
  logo: z
    .string()
    .default("https://99designs.com/profiles/798132/designs/73509"),
  pincode: z.coerce.number().default(1234),
  email: z.optional(z.string().email()),
  youtubeid: z.string({ regex: /^[a-zA-Z0-9_-]{11}$/ }).default("LNVONpwQi3k"),
});

// https://youtu.be/PHrmoSlfLD0

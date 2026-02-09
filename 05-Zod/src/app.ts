import { z } from "zod";

// type User = {
//   username: string;
// };

const hobbies = ["Programming", "GYM"] as const;

const UserSchema = z.object({
  username: z.string().min(2),
  // age: z.number().gt(0),
  // birthday: z.date(),
  // isProgrammer: z.boolean(),
  // hobbies: z.enum(hobbies),
  friends: z.array(z.string()),
  coords: z.tuple([z.number(), z.number(), z.number()]),
  id: z.number().or(z.string()),
});

type User = z.infer<typeof UserSchema>;

const user = {
  username: "het",
  // age: 20,
  // birthday: new Date(),
  // isProgrammer: true,
  // hobbies: "GYM",
  friends: ["a", "b", "c"],
  coords: [1, 2, 3],
};

console.log(UserSchema.safeParse(user));

// console.log(UserSchema.partial().safeParse(user));
// console.log(UserSchema.shape.age);

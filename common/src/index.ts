import z  from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(6),
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const postInput = z.object({
    title: z.string(),
    content: z.string().optional(),
    published: z.boolean().optional(),
})

export const  postUpdate = z.object({
    title:z.string().optional(),
    content:z.string().optional(),
    published: z.boolean().optional(),
    id:z.string(),
})

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type PostInput = z.infer<typeof postInput>;
export type PostUpdate = z.infer<typeof postUpdate>;
import { z } from "zod";

export const CreateOrderInput = z.object({
	userId: z.string().uuid(),
	items: z
		.array(
			z.object({
				productId: z.string().uuid(),
				quantity: z.number().int().positive(),
				unitPriceCents: z.number().int().nonnegative(),
			}),
		)
		.min(1),
});

export type CreateOrderInput = z.infer<typeof CreateOrderInput>;

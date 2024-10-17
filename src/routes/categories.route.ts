import { Router } from "express";

import { CategoriesController } from "../controllers/categories.controller";
import { ParamsType, validator } from "../middleware/validator.middleware";
import { createCategorySchema } from "../dtos/categories.dto";
import { CategoriesFactory } from "../factories/categories.factory";

export const categoriesRoutes = Router();

const controller = new CategoriesController(
	CategoriesFactory.getServiceInstamce(),
);

categoriesRoutes.get("/", controller.index);

categoriesRoutes.post(
	"/",
	validator({
		schema: createCategorySchema,
		type: ParamsType.BODY,
	}),
	controller.create,
);

import joi from 'joi'
const createProductSchema=joi.object({
    productName:joi.string().required(),
    description:joi.string().required(),
    especificaciones:joi.object({size:joi.number(),peso:joi.number()}),
    productName:joi.string().required(),
    category:joi.string().required(),
    price:joi.number().required(),
    stock:joi.number().required()
})
export default async (req, res, next) => {
    try {
      await createProductSchema.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        msg: 'Error de validacion',
        error
      })
    }
  }
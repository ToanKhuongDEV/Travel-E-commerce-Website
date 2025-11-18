const Joi = require("joi");

module.exports.validateRegisterPost = (req, res, next) => {
	const schema = Joi.object({
		fullName: Joi.string().required().min(5).max(50).messages({
			"string.empty": "Vui lòng nhập họ và tên",
			"string.min": "Họ tên phải có ít nhất 5 kí tự",
			"string.max": "Họ tên không được vượt quá 50 kí tự",
		}),
		email: Joi.string().required().email().messages({
			"string.empty": "Vui lòng nhập email",
			"string.email": "Email Không đúng định dạng",
		}),
		password: Joi.string()
			.required()
			.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/)

			.messages({
				"string.empty": "Vui lòng nhập mật khẩu",
				"string.pattern.base": "Mật khẩu phải có chữ hoa, chữ thường, số và ký tự đặc biệt, dài 8 đến 32 ký tự",
			}),
	});
	const { error } = schema.validate(req.body);
	if (error) {
		res.json({
			code: "error",
			message: error.details[0].message,
		});
		return;
	}
	next();
};

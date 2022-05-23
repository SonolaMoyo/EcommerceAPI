import jwt from "jsonwebtoken";

export const authorise = async(req, res, next) => {
    try {
        const token = req.cookies.authToken;

        if(!token) {
            return res.status(403).json({
                success: false,
                msg: "Accessed denied",
            })
        }

        //verify token
        const verify = jwt.verify(token, process.env.USER_JWT_TOKEN);
        req.user = verify;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            success: 'failed',
            msg: 'Access denied'
        })
    }
}
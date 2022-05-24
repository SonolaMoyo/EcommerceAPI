import jwt from "jsonwebtoken";

export const authorise = async(req, res, next) => {
    try {
        const authHeader = req.headers["authorisation"];

        if(!authHeader) {
            return res.status(401).json({
                success: false,
                msg: "Accessed denied, Sign In",
            })
        }

        const token = authHeader.split(' ')[1];
        //console.log(token);

        //verify token
        const verify = jwt.verify(token, process.env.ACCESS_JWT_TOKEN);
        req.user = verify;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: 'failed',
            msg: 'Access denied'
        })
    }
}
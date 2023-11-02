import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createToken = (payload) => {
    const secret = process.env.JWT_SECRET;

    try {
        const token = jwt.sign(payload, secret, {
            expiresIn: "2h"
        })

        return token;
    }
    catch(err) {
        console.log("Error in creating jwt token");
        throw new Error("Error in creating jwt token");
    }
}
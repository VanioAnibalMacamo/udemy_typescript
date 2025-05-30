import { UnauthorizedError } from "../errors/unauthorized.error.js";
import { getAuth } from "firebase-admin/auth";
import { UserService } from "../services/user.service.js";
import { ForbiddenError } from "../errors/forbidden.error.js";
export const auth = (app) => {
    app.use(async (req, res, next) => {
        if (req.method === "POST" && req.url.startsWith("/auth/login") || req.url.startsWith("/auth/recovery")) {
            return next();
        }
        const token = req.headers.authorization?.split("Bearer ")[1];
        if (token) {
            try {
                const decodedIdToken = await getAuth().verifyIdToken(token, true);
                const user = await new UserService().getById(decodedIdToken.uid);
                if (!user) {
                    return next(new ForbiddenError());
                }
                req.user = user;
                return next();
            }
            catch (error) {
                next(new UnauthorizedError());
            }
        }
        next(new UnauthorizedError());
    });
};
//# sourceMappingURL=auth.middleware.js.map
import { UnauthorizedError } from "../errors/unauthorized.error.js";
import { EmailAlreadyExistsError } from "../errors/email-already-exists.error.js";
import { FirebaseAuthError, getAuth } from "firebase-admin/auth";
import { getAuth as getFireBaseAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
export class AuthService {
    async create(user) {
        return getAuth().createUser({
            email: user.email,
            password: user.password,
            displayName: user.name,
        }).catch((error) => {
            if (error instanceof FirebaseAuthError && error.code === "auth/email-already-exists") {
                throw new EmailAlreadyExistsError();
            }
            throw error;
        });
    }
    async update(id, user) {
        const props = {
            displayName: user.name,
            email: user.email,
        };
        if (user.password) {
            props.password = user.password;
        }
        getAuth().updateUser(id, props);
    }
    async login(email, password) {
        return await signInWithEmailAndPassword(getFireBaseAuth(), email, password)
            .catch((error) => {
            if (error instanceof FirebaseError) {
                if (error.code === "auth/invalid-credential") {
                    throw new UnauthorizedError();
                }
            }
            throw error;
        });
    }
    async delete(id) {
        await getAuth().deleteUser(id);
    }
    async recovery(email) {
        await sendPasswordResetEmail(getFireBaseAuth(), email);
    }
}
//# sourceMappingURL=auth.service.js.map
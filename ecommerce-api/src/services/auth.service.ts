import { UnauthorizedError } from "../errors/unauthorized.error";
import { EmailAlreadyExistsError } from "../errors/email-already-exists.error";
import { User } from "../models/user.model";
import { FirebaseAuthError, getAuth, UserRecord } from "firebase-admin/auth";
import { getAuth as getFireBaseAuth, signInWithEmailAndPassword, UserCredential} from "firebase/auth"
import { FirebaseError } from "firebase/app";
export class AuthService {

   async create(user: User): Promise<UserRecord> {
       return getAuth().createUser({
            email: user.email,
            password: user.password,
            displayName: user.name,
        }).catch((error) => {
           if(error instanceof FirebaseAuthError &&  error.code === "auth/email-already-exists") {
                throw new EmailAlreadyExistsError();
            }
            throw error;
        });
    }

    async login(email: string, password: string): Promise<UserCredential> {
       return await signInWithEmailAndPassword(getFireBaseAuth(), email, password)
       .catch((error) => {
          if(error instanceof FirebaseError) {
             if(error.code === "auth/invalid-credential") {
                throw new UnauthorizedError();
             }
           }
           throw error;
      });
    }
}
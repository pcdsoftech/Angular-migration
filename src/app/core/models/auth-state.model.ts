import {
  AuthLoginModel,
  AuthSignupModel,
} from '../../features/auth/store/auth.model';

export interface AuthStateInterface {
  loggedInUser: AuthLoginModel[] | null;
  signUpUser: AuthSignupModel[] | null;
  error: string | null;
}

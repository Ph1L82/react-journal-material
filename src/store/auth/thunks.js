import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await signInWithGoogle()
        const { ok, errorMessage } = result
        if (!ok) {
            return dispatch(logout({ errorMessage }))
        }
        return dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, displayName, email, photoURL }))
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailPassword({ email, password })

        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, displayName, email, photoURL }))
    }
}
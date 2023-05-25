interface User {
    username: "string"
}

export interface UserSchema {
    authData?: User
    error?: string
}
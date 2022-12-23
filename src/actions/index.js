export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const reset = () => {
    return {
        type: "RESET"
    }
}

export const logIn = () => {
    return {
        type: "LOG_IN"
    }
}

export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export const submit = (data) => {
    return {
        type: "SUBMIT",
        payload: data
    }
}
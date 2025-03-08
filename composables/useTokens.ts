export const useTokens = () => {
    const tokens = ref(100) // Default value, replace with actual token logic

    const getTokens = () => {
        return tokens.value
    }

    return {
        tokens,
        getTokens
    }
}

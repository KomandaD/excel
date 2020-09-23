export function capitalize     


(string) {
    if (typeof !== 'string') {
        return ''
    }
    return string.charAt(0).toUpperCase()
}
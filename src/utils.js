export const getImgUrl = (path) => {
    return new URL(`${path}`, import.meta.url).href
}
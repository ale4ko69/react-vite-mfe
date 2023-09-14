
export function resolveUrl(/* ...urls */) {
    const numUrls = arguments.length;

    if (numUrls === 0) {
        throw new Error("resolveUrl requires at least one argument; got none.")
    }

    const base = document.createElement("base");
    base.href = arguments[0]

    if (numUrls === 1) {
        return base.href
    }

    const head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild)

    const a = document.createElement("a");
    let resolved;

    for (let index = 1; index < numUrls; index++) {
        a.href = arguments[index]
        resolved = a.href
        base.href = resolved
    }

    head.removeChild(base)

    return resolved
}

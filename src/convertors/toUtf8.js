module.exports.toUtf8 = str => {
    const a = []
    for (let i = 0, enc = encodeURIComponent(str); i < enc.length;) {
        if (enc[i] === '%') {
            a.push(parseInt(enc.substr(i + 1, 2), 16))
            i += 3
        } else {
            a.push(enc.charCodeAt(i++))
        }
    }
    return a
}
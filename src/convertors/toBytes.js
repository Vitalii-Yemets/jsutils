const toBytes = str => {
    let ch, st, re = []

    for (let i = 0; i < str.length; i++) {
        ch = str.charCodeAt(i)
        st = []

        do {
            st.push(ch & 0xFF)
            ch = ch >> 8
        } while (ch)

        re = re.concat(st.reverse())
    }

    return re
}

export default toBytes
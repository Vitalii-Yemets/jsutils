const toDate = date => {
    const dt = Date.parse(date)
    return !isNaN(dt) ? new Date(dt) : null
}

export default toDate
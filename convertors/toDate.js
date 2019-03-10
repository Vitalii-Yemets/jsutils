const toDate = date => {
    dt = Date.parse(date)
    return !isNaN(dt) ? new Date(dt) : null
}

export default toDate
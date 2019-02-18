const isWalletAddress = address => /^[0-9a-zA-Z]{34}$/i.test(address)

export default isWalletAddress
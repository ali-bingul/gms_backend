const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

module.exports = { getCurrentYear };
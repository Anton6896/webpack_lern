function createAnalytics() {
    let counter = 0
    let isAlive = true

    let addListener = () => counter++

    document.addEventListener('click', addListener)

    return {
        destroy() {
            isAlive = false
            document.removeEventListener('click', addListener)
        },
        getAnalytics() {
            if (!isAlive) {
                return 'is dead analitics'
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()
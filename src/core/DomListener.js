import {capitalize} from "./capitalize"

export class DomListaner {
    constructor($root, listeners=[]) {
        if (!$root) {
            throw new Error(`No $root provided for DomListaner!`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        // console.log(this.listeners, this.$root)
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                // eslint-disable-next-line max-len
                throw new Error(`Method ${method} is not implemented in ${this.name || ''} Components`)
            }
            this[method] = this[method].bind(this)
            // тоже самое что и addEventListener
            this.$root.on(listener, this[method] )
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            // removeEventListener
            this.$root.off(listener, this[method])
        })
    }
}

// input => onInput
function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}
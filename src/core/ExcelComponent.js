import {DomListaner} from './DomListener';

export class ExcelComponent extends DomListaner {
    constructor($root, options ={}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }
    // возвращает шаблон компонента
    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }
}

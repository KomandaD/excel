import {DomListaner} from './DomListener';

export class ExcelComponent extends DomListaner {
    constructor($root, options ={}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []

        this.prepare()
    }

    // настраиваем наш компонент до init
    prepare() {

    }
    // возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // инициализируем компонент
    // добавляем DOM слушателей
    init() {
        this.initDOMListeners()
    }
    // удаляем компонент
    // чистим слушатели
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}

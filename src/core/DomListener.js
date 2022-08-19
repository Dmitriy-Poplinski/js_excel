export class DomListener {
    constructor($root, listeners=[]) {
        if (!$root) {
            throw new Error('No root provider for DomListener');
        };
        this.$root = $root;
        this.listeners = listeners;
    };

    initDomListeners() {

    };

    removeDomListeners() {

    };
}; 

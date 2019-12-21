const SOURCE_URL = 'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies';

export class Slideshow {
    constructor(root = document.querySelector('body')) {
        this._root = root;
        this._activeSlide = 0;
        this._data = [];
    }

    async init() {
        await this.fetchData();
    }

    async fetchData() {
        const response = await fetch(SOURCE_URL);
        const {list} = await response.json();
        this._data = list;
    }
}
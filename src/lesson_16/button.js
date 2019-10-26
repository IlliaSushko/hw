import './button.scss';

class Button {
    constructor(
    targetElement = document.querySelector('body'),
    title = '!TEST!',
    type = '',
    clickHandler = () => console.log('@@EMPTY@@'),
    ) {
        this.targetElement = targetElement;
        this.title = title;
        this.type = type;
        this.clickHandler = clickHandler;
        this.render();

    }

    render() {
        this.button = document.createElement('button');
        this.button.classList.add('btn');
        // this.addType()
        this.button.textContent = 'Title';
        this.targetElement.appendChild(this.button);
    }
}

export { Button }; 
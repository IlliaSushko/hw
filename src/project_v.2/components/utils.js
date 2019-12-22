export const createNode = (
    type = 'div',
    classNames = [],
    styles = {},
    children
) => {
    const node = document.createElement(type);
    classNames.forEach(className => node.classList.add(className));


    for (let style in styles) {
        node.style[style] = style[styles];
    }

    if (!children) {
        return node;
    }

    if (typeof children === 'string') {
        node.innerHTML = children;
    } else {
        node.appendChild(children);
    }

    return node;
};
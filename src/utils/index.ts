const html = document.querySelector('html');
const classesToToggle : any = []

export const switchTheme = function (theme : string) {
    if (html) html.dataset.theme = `${theme}`;
    for (const classToToggle of classesToToggle) {
        document.querySelectorAll(classToToggle).forEach (el => {
            const element: HTMLElement = <HTMLElement>el
            element.dataset.theme = `${theme}`
        });
    }
}


export const generateUID = () : string => {
    let firstPart: (number|string) = (Math.random() * 46656) | 0;
    let secondPart: (number|string) = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}
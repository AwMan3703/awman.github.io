
//shorthands
const make = (tag) => { return document.createElement(tag) };


//actual functions
let popups = 0;
const makePopup = (title, description, closeCallback = function(e){}) => {
    let popupId = `popup_${popups}`
    let closePopup = () => {
        const e = document.getElementById(popupId)
        e.remove()
        closeCallback(e)
    }

    let popupNode = make('div')
    popupNode.id = popupId
    popupNode.classList = 'popup horizontal glassmorphism'

    let xNode = make('div')
    xNode.classList = 'pointer secondary-text'
    xNode.style.fontFamily = '\'Courier New\', Courier, monospace;';
    xNode.style.fontSize = 'xxx-large';
    xNode.onclick = closePopup;
    xNode.innerText = 'X'

    let bodyNode = make('div')
    bodyNode.classList = 'vertical'

    let titleNode = make('h1')
    titleNode.innerHTML = title;

    let descNode = make('p')
    descNode.classList = 'secondary-text'
    descNode.innerHTML = description;

    bodyNode.appendChild(titleNode)
    bodyNode.appendChild(make('hr'))
    bodyNode.appendChild(descNode)

    let vhr = make('hr')
    vhr.classList = 'vertical'
    vhr.style.height = '170px';

    popupNode.appendChild(xNode)
    popupNode.appendChild(vhr)
    popupNode.appendChild(bodyNode)

    popups += 1;
    return popupNode;
}


window.onload = function() {
    document.getElementById('popupblur').appendChild(makePopup(
        'Work in progress :)',
        'This site is not yet finished, and may not work properly.'+
        '<br>(press/click X to dismiss)'+
        '<hr style="opacity:2%">'+
        '<span style="opacity:15%">For more information, contact me on Discord: Aw Man#3646'+
        '<br>and Twitter (or X, whatever you wanna call it): @Aw_Man3704</span>',
        function(_) {
            const e = document.getElementById('popupblur')
            e.style.opacity = '0%';
            e.remove()
        }
        ))
};




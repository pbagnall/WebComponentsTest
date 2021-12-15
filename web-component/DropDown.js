const dropDownTemplate = document.createElement('template');
dropDownTemplate.innerHTML = `
    <style>
        .field {
            border: 1px solid #cccccc;
            width: 120px;
            height: 20px;
            padding: 2px;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .list {
            z-index: 10;
            border: 1px solid #cccccc;
            position: absolute;
            display: none;
            padding; 4px;
            background-color: white;
        }

        .list div {
            padding: 4px;
        }

        .list div:hover {
            background: #dddddd;
        }
    </style>
    <div class='field'>select a number...</div>
    <slot name='option'></slot>
    <div class='list'></div>
`;

class DropDown extends HTMLElement {
    constructor() {
        super();
        console.log("constructed dropdown");

        this.options = [{ value: null, label: 'no selection'}];

        // Create a shadow root
        this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(dropDownTemplate.content.cloneNode(true));

        this.optionSlot = this.shadowRoot.querySelector('slot[name="option"]');
        this.optionSlot.addEventListener('slotchange', (e) => { this.setOptions(e)});

        this.field = this.shadowRoot.querySelector('div[class="field"]');
        this.field.addEventListener('click', (e) => { this.clicked(e) });
        this.list = this.shadowRoot.querySelector('div[class="list"]');
        this.list.addEventListener('click', (e) => { this.makeSelection(e) });
        this.clickedOff = (e) => { this.clickedOffHandler(e); };

        this.setOptions(null);
    }

    setDataSource(source) {
        // TODO: implement source
    }

    setOptions(event) {
        console.log("settings options");
        console.log(event);
        this.options=[];
        for (let option of this.optionSlot.assignedNodes()) {
            this.options.push({
                value: option.attributes.getNamedItem('value').value,
                label: option.textContent
            });
        }
    }

    clicked(event) {
        if (this.open) {
            this.closeDropDown(event);
        } else {
            this.openDropDown(event);
        }
        event.preventDefault();
    }

    openDropDown(event) {
        window.addEventListener('click', this.clickedOff);

        let rect = this.field.getBoundingClientRect();
        this.list.style.display = 'block';
        this.list.style.top = `${rect.bottom - 1}px`;
        this.list.style.left = `${rect.left}px`;

        while (this.list.hasChildNodes()) {
            this.list.removeChild(this.list.firstChild);
        }

        for (let option of this.options) {
            let div = document.createElement("div");
            div.appendChild(document.createTextNode(option.label));
            this.list.appendChild(div);
        }

        this.open=true;
        event.preventDefault();
    }

    closeDropDown(event) {
        window.removeEventListener('click', this.clickedOff);

        const list = this.shadowRoot.querySelector('div[class="list"]');
        list.style.display = 'none';
        this.open=false;
        event.stopPropagation();
        event.preventDefault();
    }

    clickedOffHandler(event) {
        if (event.target!==this) {
            this.closeDropDown(event);
        }
    }

    makeSelection(event) {
        let option = event.target;
        this.field.innerHTML = option.textContent;
        this.value = option.value;
        this.closeDropDown();
        event.stopPropagation();
        event.preventDefault();
    }
}
window.customElements.define('ul-dropdown', DropDown);
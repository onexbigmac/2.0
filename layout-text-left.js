import { parseSharedSlotsDynamic } from './slotParser.js';

class LayoutTextLeft extends HTMLElement {
  connectedCallback() {
    const $this = $(this);
    const { 
          colour, 
          title, 
          text, 
          img1Tag
    } = parseSharedSlotsDynamic($this);
      
      this.innerHTML = ``
      this.innerHTML = `
      <div class=" macComp ${colour}">
        <div class="row align-items-center section-h">
          <div class="col-12 col-sm-7  me-auto text-start mb-3 ">
             <div class="parallax" data-overflow="true" data-orientation="up"> ${text} </div>
          </div>
           
        </div>
      </div>
    `;
  }
}
customElements.define('layout-text-left', LayoutTextLeft);

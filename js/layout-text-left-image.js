import { parseSharedSlotsDynamic } from './slotParser.js';

class LayoutTextLeftImage extends HTMLElement {
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
          <div class="col-10 col-sm-6   mb-3 ">
            <div class="parallax" data-overflow="true"> ${text}</div>
          </div>
            <div class="col-10 col-sm-6  ms-auto mr-neg mb-3 text-end">
             ${img1Tag}
       
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('layout-text-left-image', LayoutTextLeftImage);

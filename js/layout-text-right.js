import { parseSharedSlotsDynamic } from './slotParser.js';

class LayoutTextRight extends HTMLElement {
  connectedCallback() {
    const $this = $(this);
    const { 
          colour, 
          title, 
          text, 
          bullet1, 
          bullet1content,
          bullet2, 
          bullet2content,
          bullet3, 
          bullet3content,
          bullet4, 
          bullet4content
    } = parseSharedSlotsDynamic($this);
      
      this.innerHTML = ``
      this.innerHTML = `
      <div class=" macComp ${colour}  ">
        <div class="parallax" data-overflow="true" data-orientation="up"  data-scale="2">
            <div class="position-absolute w-100"><img src="./../img/recticle.png" class="position-relative rotating360 opacity-25" style="right: 0%;
    left: 91%;
    width: 320px;"></div>
        </div>
        <div class="row align-items-center section-h">
          <div class="col-7 col-sm-9  ms-auto text-end mb-3 ">
            <div class="parallax" data-overflow="true" data-orientation="right"><slot name="text">${text}</slot></div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('layout-text-right', LayoutTextRight);

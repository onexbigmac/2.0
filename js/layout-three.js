import { parseSharedSlotsDynamic } from './slotParser.js';

class LayoutThree extends HTMLElement {
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
      
    this.innerHTML = `
<div class=" macComp ${colour}">
    <div class="row justify-content-between">
          <div class="col-6 mb-3 col-sm-auto">
            <div class="animate__animated animate__delay-1s animate-on-scroll" data-anim="animate__fadeInUp"> 
                <div class="subHeading mb-2">${bullet1content} </div>
                <div class="h3"> ${bullet1}</div>
            </div>

          </div>
          <div class="col-6 mb-3 col-sm-auto">
            <div class="animate__animated animate__delay-2s animate-on-scroll" data-anim="animate__fadeInUp"> 
                <div class="subHeading mb-2">${bullet2content}</div>
                <div class="h3"> ${bullet2}</div>
            </div>
          </div>
          <div class="col-6 mb-3 col-sm-auto">
            <div class="animate__animated animate__delay-3s animate-on-scroll" data-anim="animate__fadeInUp"> 
            <div class="subHeading mb-2">${bullet3content} </div>
            <div class="h3"> ${bullet3}</div>
</div>
          </div>
          <div class="col-6 mb-3 col-sm-auto">
            <div class="animate__animated animate__delay-4s animate-on-scroll" data-anim="animate__fadeInUp"> 
                <div class="subHeading mb-2">${bullet4content} </div>
                <div class="h3"> ${bullet4}</div>
            </div>
          </div>
    </div>
</div>
    `;
  }
}
customElements.define('layout-three', LayoutThree);

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
    <div class="row justify-content-between h6">
          <div class="col-12 col-sm-6 col-md-4 mb-3 col-sm-auto">
            <div class="animate__animated animate__delay-1s ani mate-on-scroll" data-anim="animate__fadeInUp"> 
                <div class="subHeading mb-2">${bullet1content} </div>
                <div> ${bullet1}</div>
            </div>

          </div>
          <div class="col-12 col-sm-6 col-md-4 mb-3 col-sm-auto">
            <div class="animate__anim ated animate__delay-2s ani mate-on-scroll" data-anim="animate__fadeInUp"> 
                <div class="subHeading mb-2">${bullet2content}</div>
                <div> ${bullet2}</div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 mb-3 col-sm-auto">
            <div class="animate__anima ted animate__delay-3s ani mate-on-scroll" data-anim="animate__fadeInUp"> 
            <div class="subHeading mb-2">${bullet3content} </div>
            <div> ${bullet3}</div>
</div>
          </div>
          <div class="col-6 mb-3 col-sm-auto">
            <div class="animate__anima ted animate__delay-4s ani mate-on-scroll" data-anim="animate__fadeInUp"> 
                <div class="subHeading mb-2">${bullet4content} </div>
                <div> ${bullet4}</div>
            </div>
          </div>
    </div>
</div>
    `;
  }
}
customElements.define('layout-three', LayoutThree);

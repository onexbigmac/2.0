import { parseSharedSlotsDynamic } from '/js/slotParser.js';

class LayoutOne extends HTMLElement {
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
<div class=" macComp ${colour} ">


        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 ">
                <div class="animate__animated animate-on-scroll" data-anim="animate__fadeInUp">${title} </div>
                
          </div>
          <div class="col-md-6 col-lg-3 mb-5 me-auto">
              
              <div class="animate__animated animate__slower animate-on-scroll" data-anim="animate__fadeInRight"> ${text}</div>
          </div>

          <div class="col-12 col-lg-4  col-lg-auto ">
            <div class="row">
              <div class="col-6 mb-5 me-auto">
                <div class="animate__animated animate__delay-1s animate__slow animate-on-scroll" data-anim="animate__fadeInUp"> 
                <div class="subHeading">${bullet1} </div>
                <div class="h3"> ${bullet1content} </div>
              </div>
              </div>
              <div class="col-auto mb-5">
              <div class="animate__animated animate__delay-1s animate__slower animate-on-scroll" data-anim="animate__fadeInUp"> 
                <div class="subHeading">${bullet2}  </div>
                <div class="h3"> ${bullet2content} </div>
              </div>
              </div>
            </div>
          </div>

        </div>

 
</div>


    `;
  }
}


customElements.define('layout-one', LayoutOne);

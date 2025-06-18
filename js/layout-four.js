import { parseSharedSlotsDynamic } from './slotParser.js';

class LayoutFour extends HTMLElement {
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
<div class=" macComp thin ${colour} ">


        <div class="row align-items-center">
        
          <div class="col-10 col-sm-3 me-auto fs-6 lh-sm mb-5">
              <p class=" mb-0 subHeading" >${title} </p>
                <p>${text}</p>
          </div>

          <div class="col-12 col-sm-5 col-auto">
            <div class="row">
              <div class="col-4 me-auto">
                
                <div class="h3 lh-1 mb-1"> ${bullet1content} </div>
                <div class="subHeading mb-2">${bullet1} </div>

              </div>
            <div class="col-4 me-auto">

                <div class="h3 lh-1  mb-1"> ${bullet2content} </div>
                <div class="subHeading mb-2">${bullet2} </div>
              </div>
              <div class="col-auto">

                <div class="h3 lh-1 mb-1"> ${bullet3content} </div>
                <div class="subHeading mb-2">${bullet3}  </div>
              </div>
            </div>
          </div>

        </div>

 
</div>


    `;
  }
}


customElements.define('layout-four', LayoutFour);

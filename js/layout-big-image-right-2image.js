import { parseSharedSlotsDynamic } from '/js/slotParser.js';

class LayoutBigImageRight2Images extends HTMLElement {
  connectedCallback() {
    const $this = $(this);
    const { 
          colour, 
          title, 
          text, 
          img1Tag,
         img2Tag,
        img3Tag
    } = parseSharedSlotsDynamic($this);
      
      this.innerHTML = ``
      this.innerHTML = `

            <div class=" macComp ${colour}">
              <div class="row align-items-center ">

                <div class="col-5 col-sm-5 col-md-6  me-sm-auto ml-neg mb-3"> 


                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 ms-auto mb-3 "> <div class="parallax" data-orientation="up" data-scale="1.3" data-delay="2">${img2Tag} </div></div>
                          <div class="col-12 col-sm-12 col-md-6 ms-auto mb-3 "> <div class="parallax" data-orientation="up" data-scale="1.1" data-delay="4">${img3Tag} </div></div>
                        </div>



              </div>


             <div class="col-11 col-sm-11 col-md-6  mr-neg  text-end mb-3">
                  <div> <div class="parallax" data-orientation="right" data-scale="0.9">${img1Tag} </div></div>
                </div>
            </div>
            </div>

    `;
  }
}
customElements.define('layout-big-image-right-2image', LayoutBigImageRight2Images);

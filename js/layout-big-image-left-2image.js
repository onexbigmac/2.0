import { parseSharedSlotsDynamic } from './slotParser.js';
class LayoutBigImageLeft2Images extends HTMLElement {
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


                <div class="col-12 col-sm-11 col-md-6    mb-3 ml-neg mx-neg-0">
                <div class="imgHolder">
                  <div class="parallax" data-orientation="up" data-scale="1.1" data-delay="10"> ${img1Tag} </div>
                </div>
                </div>


                <div class="col-12 col-sm-5 col-md-6  ms-sm-auto mr-neg mb-3 "> 


                        <div class="row">
                          <div class="col-6 col-sm-12 col-md-6 ms-auto mb-3 ">
                            <div class="imgHolder-sm">
                             <div class="parallax" data-orientation="left" data-scale="1.3" data-delay="2"> ${img2Tag} </div>
                            </div>
                          </div>
                          <div class="col-6 col-sm-12 col-md-6 ms-auto mb-3 "> 
                            <div class="imgHolder-sm">
                             <div class="parallax" data-orientation="right" data-scale="1.3" data-delay="2" > ${img3Tag} </div>
                            </div>
                          </div>
                        </div>



              </div>
            </div>
            </div>

    `;
  }
}
customElements.define('layout-big-image-left-2image', LayoutBigImageLeft2Images);

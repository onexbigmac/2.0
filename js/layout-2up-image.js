import { parseSharedSlotsDynamic } from './slotParser.js';

class Layout2UpImage extends HTMLElement {
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

            <div class=" macComp ${colour} thin">
              <div class="row align-items-center">


                <div class="col-12 col-sm-6   mb-3 ">
                  <div class="parallax" data-orientation="right"> ${img1Tag} </div>
                </div>
                <div class="col-12 col-sm-6   mb-3 ">
                  <div class="parallax" data-orientation="left"> ${img2Tag} </div>
                </div>


                
            </div>
            </div>

    `;
  }
}
customElements.define('layout-2up-image', Layout2UpImage);

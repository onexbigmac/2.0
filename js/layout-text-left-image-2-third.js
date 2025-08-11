import { parseSharedSlotsDynamic } from './slotParser.js';

class LayoutTextLeftImageTwoThird extends HTMLElement {
  connectedCallback() {
    const $this = $(this);
    const { 
          colour, 
          title, 
          text,
          subHeading, 
          img1Tag,
          img2Tag,
          img3Tag
    } = parseSharedSlotsDynamic($this);
      
      this.innerHTML = ``
      this.innerHTML = `
      <div class=" macComp ${colour}">
        <div class="row align-items-center section-h">

            <div class="col-sm-12  col-md-4 align-self-stretch  mb-3 ">
                <div class="row flex-row flex-sm-column justify-content-evenly h-100  ">
                    <div class="col-8"> 

                    <div class="parallax img-fluid " data-orientation="down" data-delay="0" data-scale="0.9">
                        ${img2Tag}</div>
                    </div>

                    <div class="col-8 align-self-end">   ${img3Tag}</div>
                </div>
            </div>

            <div class="col-sm-12 col-md-8  ms-auto mr-neg mb-3 text-end">
                    <div class="parallax img-fluid " data-orientation="down" data-delay="1" data-scale="0.9">   ${img1Tag}</div>
       
            </div>
      </div>
    `;
  }
}
customElements.define('layout-text-left-image-2-third', LayoutTextLeftImageTwoThird);

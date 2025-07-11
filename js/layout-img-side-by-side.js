import { parseSharedSlotsDynamic } from './slotParser.js';


class LayoutImgSideBySide extends HTMLElement {
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
      bullet4content,
      img1Tag,
      img2Tag
    } = parseSharedSlotsDynamic($this);

    this.innerHTML = ``
    this.innerHTML = `

        <div class=" macComp thin ${colour} px-0">

                <div class="row align-items-center text-center g-0">

                  <div class="col-6">
                   
                 
                        <div class="parallax" data-orientation="right" data-scale="0.9">${img1Tag}</div>

                      
                     <div class="subHeading"> ...■ □ ▢ ▢ ▢ ▢ ▢</div>
                    
                  </div>
                  <div class="col-6">
                    

                        <div class="parallax" data-orientation="left" data-scale="0.9">${img2Tag}</div>

                    <div class="subHeading">${text}</div>
                    
                  </div>

                </div>


        </div>

    `;
  }
}


customElements.define('layout-img-side-by-side', LayoutImgSideBySide);

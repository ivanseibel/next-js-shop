import Image from "next/image"
import {useKeenSlider} from "keen-slider/react"

import { styled } from "../styles"
import { HomeContainer, Product } from "../styles/pages/home"
import 'keen-slider/keen-slider.min.css'

import tShirt1 from "../assets/1.png"
import tShirt2 from "../assets/2.png"
import tShirt3 from "../assets/3.png"

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tShirt1} width={520} height={480} alt="" />

        <footer>
          <strong>
            T-Shirt 1
          </strong>
          <span>
            EUR 19,90
          </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirt2} width={520} height={480} alt="" />

        <footer>
          <strong>
            T-Shirt 2
          </strong>
          <span>
            EUR 19,90
          </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirt3} width={520} height={480} alt="" />

        <footer>
          <strong>
            T-Shirt 3
          </strong>
          <span>
            EUR 19,90
          </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirt3} width={520} height={480} alt="" />

        <footer>
          <strong>
            T-Shirt 3
          </strong>
          <span>
            EUR 19,90
          </span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

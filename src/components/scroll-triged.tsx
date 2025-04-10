import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { ImagensProjetos } from './imagensProjetos'
import "@/scroll-triged.css" 

interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      <ImagensProjetos imagem={offset} nomes={offset} />
    </ParallaxLayer>
  </>
)

export default function ParallaxFunc() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
    <div>
      <Parallax className="container" ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="green" onClick={() => scroll(1)} />
        <Page offset={1} gradient="yellow" onClick={() => scroll(2)} />
        <Page offset={2} gradient="blue" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  )
}

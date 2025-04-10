import { useRef } from 'react'
import { ImagensProjetos } from './imagensProjetos'
import "@/scroll-triged.css"

interface PageProps {
  gradient: string
  onClick: () => void
  index: number
}

const Page = ({ gradient, onClick, index }: PageProps) => (
  <div className={`page ${gradient}`} onClick={onClick}>
    <ImagensProjetos imagem={index} nomes={index} />
  </div>
)

export default function ParallaxFunc() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToPage = (pageIndex: number) => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth
      containerRef.current.scrollTo({
        left: width * pageIndex,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div ref={containerRef} className="scroll-container">
      <Page index={0} gradient="green" onClick={() => scrollToPage(1)} />
      <Page index={1} gradient="yellow" onClick={() => scrollToPage(2)} />
      <Page index={2} gradient="blue" onClick={() => scrollToPage(0)} />
    </div>
  )
}

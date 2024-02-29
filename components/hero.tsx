import VideoThumb from '@/public/images/hero-image.svg'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> Descubra o Poder do  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-slate-800">Rastreamento de Pessoas</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Nosso serviço, um projeto open-source, utiliza YOLOv8n para rastrear pessoas em vídeos, fornecendo métricas precisas, como contagem, tempo de permanência e velocidade das pessoas.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">

                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://github.com/nomevini/montion-detective" target='_blank'>Acesse no GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1152}
            thumbHeight={648}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
        </div>

      </div>
    </section>
  )
}
import Image from 'next/image'
import Vinicius from '@/public/images/vinicius.gif'
import Flavio from '@/public/images/flavio.gif'
import Ufpi from '@/public/images/ufpi.png'
import Cnpq from '@/public/images/CNPq.png'

export default function Testimonials() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Não perca tempo</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Aprimore suas estratégias com rastreamento de pessoas em vídeos agora mesmo.</p>
          </div>

          <div className='flex justify-center items-center'>
              <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0" target='_blank'>Começar Agora</a>
          </div>

          {/* Vinicius */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex text-center items-center justify-center border-2 border-gray-200 rounded bg-white">
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image className="relative rounded-full" src={Vinicius} width={96} height={96} alt="Developer 1" />
                </div>
                <a href='http://lattes.cnpq.br/9027054134740820' target='_blank' className="hover:text-blue-700 font-bold text-lg not-italic mb-1">Vinícius de Sousa Carvalho</a>

                <div className="text-gray-600">
                  <span>Graduando em Sistemas de Informação - UFPI</span>
                </div>
                <div className="text-gray-600">
                  <span>Desenvolvedor do Montiondetective</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flavio */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex justify-center items-center border-2 border-gray-200 rounded bg-white">
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image className="relative rounded-full" src={Flavio} width={96} height={96} alt="Developer 2" />
                </div>
               
                <a href='http://lattes.cnpq.br/9403364226017898' target="_blank" className="hover:text-blue-700 font-bold text-lg not-italic mb-1">Flávio Henrique Duarte de Araujo</a>
                <div className="text-gray-600">
                  <span>Professor Efetivo da UFPI - CSHNB</span>
                </div>
                <div className="text-gray-600">
                  <span>Desenvolvedor do Montiondetective</span>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'
import { BookOpenText, ChartLineUp, Coffee, CursorClick, Fingerprint, Intersect, MapPin, PencilSimple } from '@phosphor-icons/react'
import Link from 'next/link'

export default function About() {
  return (
    <main id="about" className="flex flex-col pb-28 items-center justify-between p-8 bg-zinc-100">



      <div className="relative lg:w-[1200px] flex place-items-center mt-32">
        <span className="text-bluemsg text-lg lg:text-4xl text-center">

          Te oferecemos o <span className="font-bold">maior e melhor</span> ecossistema para fazer você crescer, escalar e multiplicar suas vendas no mercado.
        </span>
      </div>


      <h1 className="text-2xl lg:text-5xl text-msg my-16">Vamos escalar seu negócio juntos?</h1>

      <div className="flex flex-col m-2  w-[400px] lg:w-[1200px]  lg:grid mt-10 lg:grid-cols-2 gap-4 ">
        <div className="w-full lg:w-[570px]">
          <li className="text-sm leading-6">
            <figure className=" flex shadow-2xl bg-white rounded-3xl p-10 dark:bg-white dark:highlight-white/5">

              <figcaption className="flex items-start space-x-4">
                <BookOpenText size={54} color='#9B5A9C' />
                <div className="flex-1">
                  <div className="mb-3 text-xl text-purplex font-medium">Suporte na criação de seu infoproduto</div>
                  <p>Acompanhamento e alinhamento para
                    validar seu próprio método, seu próprio
                    curso digital. Seja ebook, vídeo aula...
                    o que você imaginar{':)'}</p>

                </div>
              </figcaption>
            </figure>
          </li>
        </div>
        <div className="w-full lg:w-[570px]">
          <li className="text-sm leading-6">
            <figure className=" flex shadow-2xl bg-white rounded-3xl p-10 dark:bg-white dark:highlight-white/5">

              <figcaption className="flex items-start space-x-4">
                <Fingerprint size={54} color='#2E2B8C' />
                <div className="flex-1 gap-2">
                  <div className="mb-3 text-xl text-bluex font-medium">Seu branding, sua identidade,
                    seu diferencial</div>
                  <p>Cansado de buscar seu lugar nesse mundo
                    digital? Sabemos que se diferenciar exige
                    técnica, criatividade e anos de experiência.
                    Bom, a Growfy te ajuda em tudo isso.</p>

                </div>
              </figcaption>
            </figure>
          </li>
        </div>
        <div className="w-full lg:w-[570px]">
          <li className="text-sm leading-6">
            <figure className="flex shadow-2xl bg-white rounded-3xl p-10 dark:bg-white dark:highlight-white/5">

              <figcaption className="flex items-start space-x-4">
                <Coffee size={54} color='#FD4C5C' />
                <div className="flex-1">
                  <div className="mb-3 text-xl text-orangex font-medium">A atenção que você merece, do seu jeito.</div>
                  <p>Nosso atendimento é B2H (Business to
                    Humans). Sem enrolação ou burocracia.
                    Você estará conectado 24h conosco
                    com o melhor time de relacionamento!</p>

                </div>
              </figcaption>
            </figure>
          </li>
        </div>
        <div className="w-full lg:w-[570px]">
          <li className="text-sm leading-6">
            <figure className="flex shadow-2xl bg-white rounded-3xl p-10 dark:bg-white dark:highlight-white/5">

              <figcaption className="flex items-start space-x-4">
                <CursorClick size={54} color='#6CBFB0' />
                <div className="flex-1">
                  <div className="mb-3 text-xl text-cianox font-medium">Nós clicamos para você. Desde o começo às vendas.</div>
                  <p>Esqueça esse negócio de aprender tráfego
                    pago. Nós temos a elite de gestores de
                    ativos disponíveis para você. Criamos suas
                    campanhas, seus ativos e monitoramos
                    diariamente os números e te entregamos
                    os números através de nossa plataforma.</p>

                </div>
              </figcaption>
            </figure>
          </li>
        </div>
        <div className="w-full lg:w-[570px]">
          <li className="text-sm leading-6">
            <figure className="flex shadow-2xl bg-white rounded-3xl p-10 dark:bg-white dark:highlight-white/5">

              <figcaption className="flex items-start space-x-4">
                <MapPin size={54} color='#ACD97F' />
                <div className="flex-1">
                  <div className="mb-3 text-xl text-greenx font-medium">Fazemos você aparecer no lugar certo.</div>
                  <p>Quer aumentar o alcance da sua marcaem sua cidade e vender muito mais? Nossa gestão inteligente de tráfego foi especialmente desenhada para isso.</p>

                </div>
              </figcaption>
            </figure>
          </li>
        </div>
        <div className="w-full lg:w-[570px]">
          <li className="text-sm leading-6">
            <figure className="flex shadow-2xl bg-white rounded-3xl p-10 dark:bg-white dark:highlight-white/5">

              <figcaption className="flex items-start space-x-4">
                <PencilSimple size={54} color='#E2CB52' />
                <div className="flex-1">
                  <div className="mb-3 text-xl text-yellowx font-medium">Copywriting que fala? Temos! E fazemos ela todinha.</div>
                  <p>Escrever para vender de forma persuasiva
                    exige estratégia e habilidade. É por isso
                    que a Growfy tem um time seleto de
                    copywriters criativos a seu dispor.</p>

                </div>
              </figcaption>
            </figure>
          </li>
        </div>
        <div className="w-full lg:w-[570px]">
          <li className="text-sm leading-6">
            <figure className="flex shadow-2xl bg-white rounded-3xl p-10 dark:bg-white dark:highlight-white/5">

              <figcaption className="flex items-start space-x-4">
                <ChartLineUp size={54} color='#2E2B8C' />
                <div className="flex-1">
                  <div className="mb-3 text-xl text-bluex font-medium">Você acompanha de ponta a
                    ponta cada número.</div>
                  <p>Transparência é algo crucial para nós.
                    Aliás, gostamos muito disso. E é por
                    isso que você tem acesso a todos os
                    números de sua performance conosco.</p>

                </div>
              </figcaption>
            </figure>
          </li>
        </div>
        <div className="w-full lg:w-[570px]">
          <li className="text-sm leading-6">
            <figure className="flex shadow-2xl bg-white rounded-3xl p-10 dark:bg-white dark:highlight-white/5">

              <figcaption className="flex items-start space-x-4">
                <Intersect size={54} color='#9B5A9C' />
                <div className="flex-1">
                  <div className="mb-3 text-xl text-purplex font-medium">Nossa aliança é duradoura e
                    buscamos fidelizar isso</div>
                  <p>Nossas parcerias são seletas, únicas e
                    de extrema importância. Ao se tornar
                    um cliente Growfy, você se tornará nosso
                    centro de resultados e seu sucesso será
                    nossa fiel meta! Avante, growers!</p>

                </div>
              </figcaption>
            </figure>
          </li>
        </div>
      </div>
      <div className="mt-10 lg:mt-10 mb-10 lg:mb-20 space-y-3">
        <h1 className='mt-10 text-2xl lg:text-3xl text-center text-zinc-600'>Agência de marketing digital? Não!</h1>
        <h1 className="font-bold min-h-full text-transparent text-center text-2xl lg:text-5xl bg-clip-text bg-gradient-to-r from-blue-800 to-pink-600"
        >
          Somos a sua aceleradora de vendas!
        </h1>
      </div>
      <div className="w-full lg:w-[1180px] whitespace-pre-wrap">
        Bem-vindo à Growfy - uma gestora de performance digital como nenhuma outra. Não somos uma agência criativa, de lançamento ou de design apenas - somos a solução completa para seus problemas de divulgação no digital. Nós gerenciamos diariamente a performance da sua geração de leads altamente qualificados, ajudando-o a atingir novos resultados em faturamento no seu negócio. Seja ele físico ou digital, seja na venda de serviços, produtos ou infoprodutos.{'\n'}{'\n'}
        Nosso objetivo é tornar sua vida mais fácil. Sabemos que mais de 60% da dedicação e energia de qualquer negócio está na prospecção de clientes, e isso torna qualquer trabalho mais complicado, improdutivo e caro. E este é nosso propósito: Fazer você se dedicar no que realmente importa, na entrega e no relacionamento com seus clientes.
        {'\n'}{'\n'}
        E se você decidisse ter uma equipe interna de marketing? O quão caro e inviável isso seria para você? Tudo pode ser ainda mais simples e barato. Deixa a propaganda e a retenção de novos clientes nas nossas mãos. Nós da Growfy hiper qualificamos seu posicionamento na internet fazendo você atrair realmente seu público ideal. Juntamente com nossa tecnologia e metodologia, ajudamos você a aumentar seu índice de fechamento através das nossas consultorias em encantamento e vendas. Tudo isso acompanhado com a máxima entrega de resultados da nossa equipe. Ao investimento de apenas “um funcionário” entregamos tudo isso para você. E o melhor de tudo, crescemos e escalamos juntos com você, lado a lado. Seja seu negócio físico ou digital, vendendo serviços, produtos ou infoprodutos. Nós temos tudo o que você precisa para que seu próximo mês seja a reviravolta em suas vendas.
        {'\n'}{'\n'}
        Não perca mais tempo e dinheiro tentando fazer tudo sozinho. Deixe a Growfy cuidar de todo o processo para você. Com nossa inteligência e experiência no mercado digital, você pode ter certeza de que está em boas mãos. Agende uma conversa conosco e descubra como podemos ajudá-lo a crescer e alcançar o sucesso digital que você merece.
        <h1 className="text-2xl lg:text-5xl text-center text-msg my-16 whitespace-pre-wrap">Chega de tentar sozinho, né? Está na hora de você focar no que é realmente é bom. Deixa a divulgação com a gente.</h1>
      </div>


      <Link href="https://w.app/growfy"><button className="rounded-full px-8 bg py-3 btn-style-one"><div className="txt">EU QUERO AUMENTAR MINHAS VENDAS</div></button></Link>

    </main>

  )
}
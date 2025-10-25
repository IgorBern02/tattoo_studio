import { CardFaq } from "./CardFaq";

export const Faq = () => {
  return (
    <div className="w-full  text-white flex flex-col justify-center items-center p-4 gap-4">
      <p className="flex flex-row justify-center items-center text-2xl ">
        Perguntas Frequentes
      </p>
      <span className="text-[12px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        voluptatum nesciunt.
      </span>
      <div className="w-full h-auto p-2 flex flex-col gap-5">
        <CardFaq
          ask="Como faço para agendar uma tatuagem?"
          response="Você pode agendar pelo nosso WhatsApp, Instagram ou diretamente no estúdio. Pedimos um sinal para confirmar o horário com o artista."
        />
        <CardFaq
          ask="Qual é o valor mínimo de uma tatuagem?"
          response="Nosso valor mínimo é de R$150, que cobre os custos de material e esterilização. O preço final varia conforme o tamanho, local e estilo da tatuagem."
        />
        <CardFaq
          ask="Posso fazer uma tatuagem com um desenho próprio?"
          response="Sim! Você pode trazer sua arte ou uma referência. O artista fará os ajustes necessários para que o desenho fique perfeito na pele."
        />
        <CardFaq
          ask="Tatuar dói muito?"
          response="A dor depende da região do corpo e da sensibilidade de cada pessoa. Usamos técnicas que tornam o processo o mais confortável possível."
        />
      </div>
    </div>
  );
};

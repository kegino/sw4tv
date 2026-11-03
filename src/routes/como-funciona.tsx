import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Como Funciona o SW4TV — Ativação Descomplicada em Minutos";
const DESCRIPTION =
  "Entenda como funciona o SW4TV: escolha do plano, liberação imediata via WhatsApp, instalação no seu aparelho e suporte técnico pronto para te ajudar.";

const STEPS = [
  { n: "01", t: "Escolha seu plano SW4TV", d: "Selecione a duração ideal para seu perfil (mensal, trimestral, semestral ou anual) com acesso a todo o conteúdo." },
  { n: "02", t: "Fale com o suporte no WhatsApp", d: "Chame nosso atendimento para tirar dúvidas ou receber a chave Pix para ativação expressa." },
  { n: "03", t: "Receba seus dados de acesso", d: "Você recebe na hora o usuário, senha, DNS Xtream Codes ou link de lista M3U completo." },
  { n: "04", t: "Instale o app na sua TV ou celular", d: "Orientamos o aplicativo mais leve e compatível com a sua Smart TV, TV Box, Fire TV Stick ou celular." },
  { n: "05", t: "Acesse e assista em 4K", d: "Insira as credenciais no app e tenha acesso instantâneo a canais ao vivo, filmes e séries em alta definição." },
  { n: "06", t: "Suporte diário sempre disponível", d: "Dúvidas sobre canais, trocas de aparelho ou renovação: nosso time responde no WhatsApp todos os dias." },
];

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/como-funciona" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Como ativar o SW4TV",
        step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })),
      }),
    }],
  }),
  component: ComoFunciona,
});

function ComoFunciona() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Como Funciona" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Como Funciona"
          title={<>Ativação <span className="gradient-text">simples e rápida</span></>}
          description="Do primeiro clique à tela cheia: etapas práticas e transparentes com atendimento humano guiando sua instalação."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="glass-card rounded-2xl p-7">
              <span className="font-display text-4xl font-bold gradient-text">{s.n}</span>
              <h2 className="mt-3 font-display text-xl font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center">
          <WhatsAppButton keyword="Ativação SW4TV" label="Começar Agora" variant="whatsapp" size="lg" />
        </div>
      </section>
    </div>
  );
}

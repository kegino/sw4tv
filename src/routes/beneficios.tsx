import { createFileRoute } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Wifi, MonitorPlay, Globe, Sparkles } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Benefícios do SW4TV — Qualidade 4K sem travar e +35.000 Canais";
const DESCRIPTION =
  "Descubra os benefícios de assinar o SW4TV: transmissão 4K fluida, +35.000 canais ao vivo, filmes, séries, futebol sem delay e suporte humano dedicado.";

const BENEFITS = [
  { icon: Zap, t: "Zero travamento", d: "Servidores H.265 com CDN dedicada no Brasil e balanceamento dinâmico — sinal liso mesmo em transmissões 4K." },
  { icon: Tv, t: "+35.000 canais ao vivo", d: "Grade nacional e internacional completa e renovada diariamente, com EPG atualizado e busca rápida." },
  { icon: Film, t: "Catálogo VOD gigante", d: "Milhares de filmes e séries com lançamentos do cinema, opções dubladas e legendadas atualizadas toda semana." },
  { icon: Trophy, t: "Todos os esportes", d: "Futebol nacional e internacional, UFC, Fórmula 1, NBA, campeonatos estaduais e pay-per-view inclusos." },
  { icon: MonitorPlay, t: "Compatibilidade universal", d: "Funciona perfeitamente em Smart TV (Samsung, LG, TCL, Android TV), Fire Stick, TV Box, celular e PC." },
  { icon: Globe, t: "M3U e Xtream Codes", d: "Compatível com os melhores apps do mercado: XCIPTV, IPTV Smarters Pro, IBO Player, SS IPTV, TiviMate e outros." },
  { icon: Wifi, t: "Estável em horário de pico", d: "Infraestrutura escalável projetada para suportar milhões de conexões simultâneas sem queda de sinal." },
  { icon: ShieldCheck, t: "Ativação segura e rápida", d: "Pagamento instantâneo via Pix com liberação imediata das credenciais pelo WhatsApp." },
  { icon: Headphones, t: "Suporte humanizado", d: "Especialistas reais prontos para ajudar na configuração do seu aparelho todos os dias da semana." },
];

export const Route = createFileRoute("/beneficios")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/beneficios" }),
  component: BeneficiosPage,
});

function BeneficiosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Benefícios" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Benefícios SW4TV"
          title={<>Tudo o que faz do SW4TV a <span className="gradient-text">melhor escolha</span></>}
          description="Mais do que uma lista de canais: infraestrutura robusta, catálogo atualizado e atendimento VIP pensado para quem não abre mão de qualidade."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, t, d }) => (
            <article key={t} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all hover:border-primary/30">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" aria-hidden="true" />
          <div className="relative">
            <Sparkles className="mx-auto size-8 text-primary" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold">Sinta a diferença SW4TV na prática</h2>
            <p className="mt-3 text-muted-foreground">Faça um teste grátis sem compromisso — liberamos o sinal em minutos direto no seu WhatsApp.</p>
            <div className="mt-6"><WhatsAppButton keyword="Teste Grátis SW4TV" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}

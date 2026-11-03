import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Teste SW4TV Grátis — Solicite seu Acesso via WhatsApp";
const DESCRIPTION =
  "Solicite agora um teste grátis do SW4TV e assista a mais de 35.000 canais, filmes, séries e futebol ao vivo em 4K sem travar. Liberação em minutos, sem cartão de crédito.";

const INCLUDES = [
  "Liberação rápida das credenciais em poucos minutos",
  "Acesso completo a mais de 35.000 canais ao vivo em 4K e Full HD",
  "Catálogo completo de filmes e séries dublados e legendados",
  "Futebol nacional e internacional, UFC, F1 e pay-per-view liberados",
  "Compatibilidade total com Smart TV, TV Box, Fire Stick, celular e PC",
  "Suporte técnico humanizado passo a passo pelo WhatsApp",
];

export const Route = createFileRoute("/teste")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/teste" }),
  component: TestePage,
});

function TestePage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Teste Grátis" }]} />
      </div>
      <section className="container-page pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Teste SW4TV"
              title={<>Experimente o SW4TV <span className="gradient-text">sem custo algum</span></>}
              description="Comprove a estabilidade dos nossos servidores CDN e a nitidez da imagem em 4K antes de assinar. Sem burocracia nem cartão de crédito."
              center={false}
            />
            <ul className="mt-8 space-y-3">
              {INCLUDES.map((i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton keyword="Teste Grátis SW4TV" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" />
              <WhatsAppButton keyword="Assinatura SW4TV" label="Assinar Agora" variant="primary" size="lg" />
            </div>
          </div>

          <aside className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Como funciona o teste</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">3 etapas rápidas para começar</h2>
              <ol className="mt-6 space-y-4 text-sm">
                <li><strong className="text-foreground">1.</strong> Toque no botão "Solicitar Teste Grátis" para abrir nossa conversa no WhatsApp.</li>
                <li><strong className="text-foreground">2.</strong> Nossa equipe envia imediatamente o seu usuário, senha, DNS ou lista M3U com tutorial.</li>
                <li><strong className="text-foreground">3.</strong> Acesse o app no seu aparelho e comece a assistir na hora com resolução máxima.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

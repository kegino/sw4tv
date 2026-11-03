import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Clock, Shield } from "lucide-react";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_PHONE } from "@/lib/whatsapp";

const TITLE = "Contato SW4TV — Atendimento Exclusivo no WhatsApp";
const DESCRIPTION =
  "Fale com a equipe do SW4TV. Suporte humanizado no WhatsApp todos os dias para dúvidas, solicitação de teste grátis, contratação, renovação e configuração de aparelhos.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/contato" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${SITE_URL}/contato`,
        mainEntity: {
          "@type": "Organization",
          name: "SW4TV",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${WHATSAPP_PHONE}`,
            contactType: "customer support",
            availableLanguage: ["Portuguese"],
            areaServed: "BR",
          },
        },
      }),
    }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Contato" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Contato"
          title={<>Fale com a <span className="gradient-text">equipe SW4TV</span></>}
          description="Canal direto de atendimento via WhatsApp, com especialistas de verdade respondendo prontamente todos os dias. Selecione o departamento abaixo:"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: MessageCircle, t: "Assinatura e Teste Grátis", d: "Quer experimentar antes de assinar ou conhecer os planos? Peça seu teste pelo WhatsApp.", k: "Assinatura SW4TV" },
            { icon: Clock, t: "Renovação e Pagamento", d: "Próximo do vencimento? Renove sua conta em instantes sem perder seus canais favoritos.", k: "Renovação SW4TV" },
            { icon: Shield, t: "Suporte Técnico", d: "Precisa de ajuda para instalar em um novo aplicativo ou configurar sua Smart TV? Resolvemos juntos.", k: "Suporte SW4TV" },
          ].map(({ icon: Icon, t, d, k }) => (
            <article key={t} className="glass-card rounded-2xl p-7 flex flex-col">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{d}</p>
              <div className="mt-5"><WhatsAppButton keyword={k} label="Abrir WhatsApp" variant="whatsapp" size="sm" /></div>
            </article>
          ))}
        </div>

        <div className="mt-14 glass-card rounded-2xl p-10 text-center">
          <p className="text-sm text-muted-foreground">Atendimento humanizado · Aberto todos os dias</p>
          <p className="mt-2 font-display text-2xl font-bold">WhatsApp: +55 (62) 98265-8713</p>
        </div>
      </section>
    </div>
  );
}

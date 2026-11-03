import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { PlanCard, PLANS } from "@/components/PlanCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Planos SW4TV — Preços a partir de R$35/mês sem fidelidade";
const DESCRIPTION =
  "Conheça os planos SW4TV: mensal R$35, trimestral R$90, semestral R$170 e anual R$280. +35.000 canais, 4K, futebol, filmes e séries sem travamento.";

export const Route = createFileRoute("/planos")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/planos" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Planos SW4TV",
          url: `${SITE_URL}/planos`,
          itemListElement: PLANS.map((p, i) => ({
            "@type": "Offer",
            position: i + 1,
            name: `SW4TV ${p.name}`,
            price: p.price.replace("R$", ""),
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/planos`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Planos", item: `${SITE_URL}/planos` },
          ],
        }),
      },
    ],
  }),
  component: PlanosPage,
});

function PlanosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Planos" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Planos SW4TV"
          title={<>Escolha o plano ideal <span className="gradient-text">e comece hoje</span></>}
          description="O catálogo e a qualidade 4K são idênticos em todos os planos — você escolhe a melhor duração e economiza."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Dúvidas sobre qual plano SW4TV escolher?</h2>
          <p className="mt-3 text-muted-foreground">Chame nossa equipe no WhatsApp para tirar dúvidas, solicitar um teste grátis ou obter suporte.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton keyword="Dúvidas sobre Planos SW4TV" label="Falar com Atendente" variant="whatsapp" />
            <WhatsAppButton keyword="Teste Grátis SW4TV" label="Fazer Teste Grátis" variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
}

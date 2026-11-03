import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FULL_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "FAQ SW4TV — Perguntas Frequentes sobre o Streaming IPTV";
const DESCRIPTION =
  "Tire todas as suas dúvidas sobre o SW4TV: grade de canais, estabilidade em 4K, compatibilidade com Smart TVs e aplicativos, teste grátis e suporte técnico.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/faq" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FULL_FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "FAQ" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="FAQ SW4TV"
          title={<>Perguntas <span className="gradient-text">frequentes</span></>}
          description="Reunimos as respostas para as principais dúvidas de quem busca um IPTV rápido, estável e com suporte de confiança."
        />
        <div className="mt-14">
          <FaqAccordion items={FULL_FAQ} />
        </div>
        <div className="mt-14 text-center">
          <WhatsAppButton keyword="Dúvidas SW4TV" label="Falar com o Suporte SW4TV" variant="whatsapp" size="lg" />
        </div>
      </section>
    </div>
  );
}

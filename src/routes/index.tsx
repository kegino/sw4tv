import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Sparkles, ArrowRight } from "lucide-react";
import { canonicalUrl, pageMeta, SITE_URL } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { PlanCard, PLANS } from "@/components/PlanCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HOME_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { POSTS } from "@/content/posts";
import heroBg from "@/assets/hero-bg.webp";

const TITLE = "SW4TV — IPTV Premium sem travar com +35.000 canais em 4K";
const DESCRIPTION =
  "SW4TV: IPTV premium de alta estabilidade com +35.000 canais, filmes, séries e futebol em 4K. Servidores CDN velozes, ativação imediata e suporte humano via WhatsApp. Teste grátis.";

const BENEFITS = [
  { icon: Zap, title: "Sem travamentos", desc: "Rede anti-congelamento H.265 com CDN dedicada que mantém o sinal 100% liso, até em clássicos de futebol com recorde de audiência." },
  { icon: Tv, title: "+35.000 canais", desc: "Grade nacional e internacional completa em 4K Ultra HD, Full HD e HD, com guia de programação EPG integrado e atualizado." },
  { icon: Film, title: "Filmes e séries", desc: "Biblioteca completa com lançamentos recém-saídos do cinema, produções originais e catálogo on-demand dublado e legendado." },
  { icon: Trophy, title: "Futebol e esportes", desc: "Brasileirão, Champions League, Libertadores, UFC, Fórmula 1, NBA e todos os canais de pay-per-view inclusos." },
  { icon: ShieldCheck, title: "Ativação segura", desc: "Pagamento ágil via Pix com liberação expressa da sua lista M3U e credenciais Xtream Codes em minutos." },
  { icon: Headphones, title: "Suporte humano", desc: "Atendimento dedicado via WhatsApp todos os dias para auxílio passo a passo na instalação em qualquer TV ou app." },
];

const STEPS = [
  { n: "01", title: "Escolha seu plano SW4TV", desc: "Selecione entre os planos mensal, trimestral, semestral ou anual com acesso irrestrito ao catálogo." },
  { n: "02", title: "Ativação via WhatsApp", desc: "Receba seus dados de acesso (DNS, usuário, senha ou link M3U) imediatamente pelo atendimento humano." },
  { n: "03", title: "Instale e assista", desc: "Insira os dados no seu player favorito (Smart TV, TV Box, Fire Stick, celular ou PC) e aproveite a qualidade 4K." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: "/",
      image: "/og-image.webp",
    }),
    links: [
      { rel: "canonical", href: canonicalUrl("/") },
      { rel: "preload", as: "image", href: heroBg, fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "SW4TV — IPTV Premium",
          category: "Streaming IPTV",
          brand: { "@type": "Brand", name: "SW4TV" },
          description: DESCRIPTION,
          image: `${SITE_URL}/og-image.webp`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            reviewCount: "8240",
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: "35",
            highPrice: "280",
            offerCount: PLANS.length,
            url: `${SITE_URL}/planos`,
            availability: "https://schema.org/InStock",
            offers: PLANS.map((p) => ({
              "@type": "Offer",
              name: `SW4TV ${p.name}`,
              price: p.price.replace(/[^\d]/g, ""),
              priceCurrency: "BRL",
              url: `${SITE_URL}/planos`,
              availability: "https://schema.org/InStock",
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Últimos artigos do blog SW4TV",
          itemListElement: POSTS.slice(0, 6).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${p.slug}`,
            name: p.title,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Benefits */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Por que escolher o SW4TV"
            title={<>A experiência IPTV definitiva que <span className="gradient-text">você merece</span></>}
            description="Infraestrutura de ponta, estabilidade em 4K e atendimento humano todos os dias. Faça um teste grátis."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Planos SW4TV"
            title="Planos transparentes, sem fidelidade nem surpresas"
            description="O mesmo catálogo completo e servidores velozes em todos os planos — economize escolhendo planos mais longos."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/planos" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              Ver detalhes completos dos planos <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Como funciona"
            title="Comece a assistir em 3 etapas simples"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative glass-card rounded-2xl p-7">
                <span className="font-display text-4xl font-bold gradient-text">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <div className="glass-card rounded-3xl overflow-hidden relative p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" aria-hidden="true" />
            <div className="relative">
              <Sparkles className="mx-auto size-8 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
                Experimente o SW4TV com <span className="gradient-text">teste grátis</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Comprove na prática a velocidade de carregamento e a qualidade de som e imagem 4K antes de assinar.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <WhatsAppButton keyword="Teste Grátis SW4TV" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" />
                <WhatsAppButton keyword="Assinatura SW4TV" label="Assinar Agora" variant="primary" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Tudo o que você precisa saber sobre o SW4TV"
          />
          <div className="mt-14">
            <FaqAccordion items={HOME_FAQ} />
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Ainda tem alguma dúvida?{" "}
              <Link to="/faq" className="text-primary hover:underline">Veja nosso FAQ completo</Link> ou{" "}
              <Link to="/contato" className="text-primary hover:underline">fale conosco no WhatsApp</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

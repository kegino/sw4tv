import { Star, ShieldCheck, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="SW4TV — Streaming IPTV premium de alta potência com filmes, séries e canais em 4K sem travar"
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      {/* Overlays para contraste perfeito dos botões e textos */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/60 to-background" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/70 via-transparent to-background/70" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-black/25" aria-hidden="true" />

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md shadow-sm">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          Servidores 2026 Online — Teste do SW4TV Liberado
        </div>

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          SW4TV — <span className="gradient-text">IPTV sem travar</span>
          <span className="block text-foreground mt-1">+35.000 Canais em 4K</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl font-normal leading-relaxed">
          Assista a filmes de cinema, séries completas e futebol ao vivo com alta potência no{" "}
          <strong className="text-white font-semibold">SW4TV</strong>. Compatível com Smart TV, TV Box, TV Stick, celular e computador.
        </p>

        {/* Botões com destaque visual máximo e alto contraste */}
        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:gap-4 w-full max-w-md justify-center">
          <WhatsAppButton
            keyword="Teste Grátis SW4TV"
            label="Solicitar Teste Grátis"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto text-base font-extrabold"
          />
          <WhatsAppButton
            keyword="Assinatura SW4TV"
            label="Ver Planos e Assinar"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-base font-extrabold"
          />
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1" aria-label="Avaliação 4,9 de 5 estrelas">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
            <span className="ml-2 font-bold text-white">4,9/5</span>
          </div>
          <p className="text-sm text-slate-400">
            Mais de <strong className="text-white">8.800 clientes</strong> conectados assistindo pelo SW4TV sem atrasos
          </p>
        </div>

        {/* Micro-features rápidas */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-6 text-xs text-slate-300">
          <div className="flex items-center justify-center gap-1.5 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5">
            <Zap className="size-4 text-amber-400" />
            <span>Buffer Zero Anti-Freeze</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5">
            <ShieldCheck className="size-4 text-amber-400" />
            <span>Suporte WhatsApp 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}

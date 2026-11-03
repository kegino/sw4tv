import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Política de Privacidade — SW4TV";
const DESCRIPTION = "Política de Privacidade do SW4TV: saiba com total transparência como tratamos seus dados pessoais em conformidade com a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/politica-de-privacidade" }),
  component: PoliticaPage,
});

function PoliticaPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]} />
      </div>
      <article className="container-page pb-20 prose-content mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: Novembro de 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Informações que coletamos</h2>
            <p className="mt-2">Coletamos exclusivamente os dados necessários para a liberação do serviço de streaming: número de contato no WhatsApp, nome para identificação e dados de transação fornecidos pelo gateway de pagamento. Dados de cartão de crédito nunca são armazenados por nós.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Uso das informações</h2>
            <p className="mt-2">As informações coletadas são utilizadas para envio das credenciais de acesso, avisos de renovação e suporte técnico ao cliente SW4TV. Em hipótese alguma vendemos, compartilhamos ou repassamos seus dados a terceiros.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Armazenamento e Segurança</h2>
            <p className="mt-2">Adotamos práticas modernas de criptografia e proteção de dados para garantir que suas informações de contato permaneçam seguras contra qualquer acesso não autorizado.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Direitos do Usuário (LGPD)</h2>
            <p className="mt-2">Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode solicitar a qualquer momento a visualização, atualização ou exclusão definitiva dos seus dados dos nossos registros de suporte.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Atendimento de Privacidade</h2>
            <p className="mt-2">Para qualquer esclarecimento sobre o tratamento de dados pessoais, entre em contato direto pelo WhatsApp oficial: +55 (62) 98265-8713.</p>
          </section>
        </div>
      </article>
    </div>
  );
}

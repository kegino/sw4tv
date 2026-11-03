import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Termos de Uso — SW4TV";
const DESCRIPTION = "Termos de Uso do serviço de streaming SW4TV: condições de contratação, regras de utilização e suporte ao cliente.";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/termos-de-uso" }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Termos de Uso" }]} />
      </div>
      <article className="container-page pb-20 mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Termos de Uso</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: Novembro de 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Aceitação dos Termos</h2>
            <p className="mt-2">Ao solicitar um teste grátis ou assinar qualquer plano do SW4TV, você concorda com estes termos e com as diretrizes de uso responsável do serviço.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Prestação do Serviço</h2>
            <p className="mt-2">O SW4TV fornece credenciais de acesso temporário a servidores de streaming de alta velocidade durante o período contratado (mensal, trimestral, semestral ou anual), sem renovação automática forçada nem multas de fidelidade.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Utilização e Conexões Simultâneas</h2>
            <p className="mt-2">Cada plano dá direito ao uso simultâneo acordado no momento da ativação. O compartilhamento indevido ou revenda de credenciais não autorizada pode resultar no bloqueio da linha pelo sistema de segurança.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Pagamentos e Reativações</h2>
            <p className="mt-2">A liberação do login é processada assim que o pagamento for confirmado via Pix ou método acordado. Para renovar, o usuário só precisa solicitar a extensão no suporte via WhatsApp.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Suporte Técnico e Estabilidade</h2>
            <p className="mt-2">Nossa equipe presta suporte diário via WhatsApp para auxílio na instalação de players e resolução de dúvidas de conexão.</p>
          </section>
        </div>
      </article>
    </div>
  );
}

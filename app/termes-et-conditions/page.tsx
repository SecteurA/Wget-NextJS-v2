import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#003B73] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">Termes et Conditions</h1>
          <p className="text-gray-200 text-lg">
            Conditions générales d&apos;utilisation des services WGET
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">1. Champ d&apos;application et conclusion du contrat</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  WGET est un service et une marque déposée de la société Arcanes Technologies.
                </p>
                <p>
                  Ces conditions générales régissent les prestations de services proposées par WGET sur son site web www.wget.ma. Les offres présentées sont sans engagement. En acceptant une offre, qu&apos;elle soit formalisée par écrit ou par voie électronique, ou en utilisant les services proposés, le client (ci-après dénommé &quot;le client&quot;) adhère à ces conditions générales, y compris toutes les annexes (notamment les tarifs et conditions de paiement).
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">2. Prestations et droits de WGET</h2>
              <div className="space-y-4 text-gray-600">
                <div className="pl-4 border-l-4 border-[#003B73]/10">
                  <p className="mb-4">2.1. WGET propose des services d&apos;hébergement Internet et d&apos;enregistrement de noms de domaine selon la formule choisie par le client. Ces prestations sont fournies dans les limites des infrastructures disponibles. WGET se réserve le droit de collaborer avec des tiers pour la mise en œuvre de ses services.</p>
                  <p className="mb-4">2.2. Les prestations peuvent être modifiées pour des raisons techniques ou organisationnelles. Toute modification sera communiquée au client par un moyen approprié (email, courrier, etc.). Les clients acceptent les modifications en continuant d&apos;utiliser le service.</p>
                  <p className="mb-4">2.3. Si une utilisation illégale des services de WGET est constatée ou suspectée (par une autorité compétente ou un tiers), WGET se réserve le droit de suspendre ou résilier immédiatement le contrat, sans indemnité.</p>
                  <p className="mb-4">2.4. Toute infraction aux conditions d&apos;utilisation peut entraîner la désactivation immédiate des services.</p>
                  <p>2.5. WGET se réserve le droit de refuser ou d&apos;interrompre un service à tout moment.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">3. Responsabilité et obligations du client</h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-4">
                    <li>3.1. Le client est responsable des contenus qu&apos;il héberge ou diffuse via les services de WGET. Cela inclut les textes, images, sons, vidéos, programmes, et autres données, ainsi que les liens vers ces contenus.</li>
                    <li>3.2. Les contenus illégaux sont strictement interdits, notamment ceux incitant à la violence, à la haine, ou à des activités illicites (pornographie, fraude, spam, etc.).</li>
                    <li>3.3. Le client doit respecter les lois marocaines et internationales ainsi que les bonnes pratiques sur Internet (netiquette).</li>
                    <li>3.4. Le client est responsable de la sécurité de ses identifiants (nom d&apos;utilisateur et mot de passe) et doit empêcher tout accès non autorisé.</li>
                    <li>3.5. L&apos;installation de réseaux IRC ou IRC Bots sur les serveurs mutualisés de WGET est interdite.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">4. Facturation et conditions de paiement</h2>
              <div className="space-y-4 text-gray-600">
                <div className="pl-4 border-l-4 border-[#003B73]/10">
                  <p className="mb-4">4.1. Les services WGET sont prépayés. Le règlement doit être effectué avant l&apos;activation.</p>
                  <p className="mb-4">4.2. Les moyens de paiement acceptés incluent le virement bancaire, les cartes bancaires, et PayPal.</p>
                  <p className="mb-4">4.3. Le client garantit disposer des autorisations nécessaires pour le mode de paiement choisi.</p>
                  <p className="mb-4">4.4. En cas de retard ou d&apos;impayé, WGET se réserve le droit de suspendre les services ou de résilier le contrat sans compensation.</p>
                  <p>4.5. WGET peut ajuster ses tarifs avec un préavis de 30 jours.</p>
                </div>
              </div>
            </section>

            {/* Sections 5-9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">5. Garanties et limitations de responsabilité</h2>
              <div className="space-y-4 text-gray-600">
                <p>5.1. WGET ne garantit pas un fonctionnement sans interruption ou sans défaut de ses services.</p>
                <p>5.2. WGET décline toute responsabilité en cas de perte de données, d&apos;interruptions de service, ou de tout dommage causé par l&apos;utilisation des services.</p>
                <p>5.3. WGET n&apos;est pas responsable des problèmes liés aux infrastructures tierces (réseaux, Internet, etc.).</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">6. Protection et sécurité des données</h2>
              <div className="space-y-4 text-gray-600">
                <p>6.1. Les données personnelles sont collectées et traitées conformément à la loi marocaine n°09-08.</p>
                <p>6.2. WGET prend des mesures techniques et organisationnelles pour protéger les données des utilisateurs.</p>
                <p>6.3. Le client peut demander à consulter, corriger ou supprimer ses données personnelles en contactant WGET.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">7. Confidentialité</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Toutes les informations échangées dans le cadre du contrat sont confidentielles et ne peuvent être divulguées sans accord préalable des parties.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">8. Durée et résiliation du contrat</h2>
              <div className="space-y-4 text-gray-600">
                <p>8.1. Le contrat peut être résilié avec un préavis de 7 jours avant la fin de sa durée.</p>
                <p>8.2. WGET peut résilier immédiatement le contrat en cas de non-respect des conditions d&apos;utilisation ou d&apos;insolvabilité du client.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">9. Litiges</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Les présentes conditions sont régies par le droit marocain. En cas de litige, les parties s&apos;engagent à rechercher une solution amiable avant toute action judiciaire. À défaut, le tribunal de commerce de Casablanca sera compétent.
                </p>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Tous droits réservés – Reproduction interdite sans autorisation.
                <br />
                © {new Date().getFullYear()} WGET SARL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
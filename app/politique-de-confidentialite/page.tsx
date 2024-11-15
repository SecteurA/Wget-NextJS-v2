import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-gray-200 text-lg">
            Conditions générales de vente et d&apos;utilisation des services WGET SARL
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">1. Objet</h2>
              <div className="space-y-4 text-gray-600">
                <p>1.1. La société WGET SARL fournit des services d&apos;hébergement Web et/ou de noms de domaine.</p>
                <p>1.2. Le présent document définit les conditions techniques et financières dans lesquelles la société WGET SARL et le client s&apos;engagent mutuellement.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">2. Accès au serveur et infogérance</h2>
              <div className="space-y-6 text-gray-600">
                <div>
                  <p className="mb-4">2.1. WGET SARL s&apos;engage à tout mettre en œuvre pour garantir la continuité, la permanence et la qualité de ses services.</p>
                  <p className="mb-4">2.2. La société se réserve le droit de suspendre temporairement et brièvement l&apos;accès aux serveurs pour effectuer des interventions de maintenance ou améliorer ses prestations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#003B73] mb-4">2.3. Infogérance des serveurs dédiés et VPS/Cloud</h3>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">Infogérance ponctuelle :</h4>
                    <p className="mb-4">Facturation horaire pour des missions spécifiques. Une estimation préalable de la durée de l&apos;intervention sera communiquée.</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Installation et mise à jour du système d&apos;exploitation</li>
                      <li>Installation ou mise à jour de logiciels, serveurs ou applications métiers</li>
                      <li>Configuration des modules Apache ou d&apos;autres services</li>
                      <li>Sécurisation des serveurs avec installation de pare-feu</li>
                      <li>Gestion des incidents techniques</li>
                      <li>Mise en place de politiques de sauvegarde et configuration de comptes</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-4">Infogérance sous contrat mensuel :</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Installation du système d&apos;exploitation et des logiciels nécessaires</li>
                      <li>Monitoring du serveur et des services hébergés</li>
                      <li>Mise en place de sauvegardes et d&apos;un pare-feu</li>
                      <li>Support technique par tickets ou téléphone</li>
                      <li>Mise à jour régulière des logiciels et correctifs de sécurité</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Sections 3-10 following the same pattern */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">3. Assistance</h2>
              <p className="text-gray-600">
                WGET SARL fournit une assistance technique accessible par email, téléphone et chat en direct.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">4. Tarifs, facturation et paiements</h2>
              <div className="space-y-4 text-gray-600">
                <p>4.1. Les prix des services sont indiqués sur le site web www.wget.ma. Ils sont exprimés hors taxes et payables en dirhams marocains, euros ou dollars, selon la fréquence choisie.</p>
                <p>4.2. Les factures doivent être réglées à l&apos;avance, via virement bancaire, carte bancaire, espèces, ou tout autre moyen de paiement proposé par WGET SARL.</p>
                <p>4.3. En cas de retard de paiement, WGET SARL peut suspendre immédiatement les services et/ou résilier le contrat sans compensation.</p>
                <p>4.4. Les comptes et serveurs non réglés à échéance seront considérés comme abandonnés et supprimés.</p>
              </div>
            </section>

            {/* Continue with remaining sections... */}
            
            {/* Footer Note */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Tous droits réservés – Reproduction interdite sans autorisation préalable.
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
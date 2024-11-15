import { ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AntiAbusePolicy() {
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
          <h1 className="text-4xl font-bold mb-4">Politique Anti-abus</h1>
          <p className="text-gray-200 text-lg">
            Charte de bonne conduite et procédures de signalement
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Contact Alert */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <p className="text-blue-700 m-0">
                  Toute activité non conforme aux règles concernant un site ou un nom de domaine hébergé ou géré par wGet doit être signalée à :{' '}
                  <a href="mailto:contact@wget.ma" className="font-semibold hover:text-blue-600">
                    contact@wget.ma
                  </a>
                </p>
              </div>
            </div>

            {/* Engagement Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">Engagement de sécurité</h2>
              <p className="text-gray-600">
                Chez wGet, nous accordons une grande importance à la sécurité de nos utilisateurs et à la qualité de nos services. Cette charte vise à maintenir un espace en ligne sain et respectueux pour tous. Elle s&apos;applique à l&apos;ensemble des plateformes et des outils que nous proposons.
              </p>
            </section>

            {/* Comportements non tolérés */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">Comportements non tolérés</h2>
              <p className="text-gray-600 mb-4">
                Afin de garantir un environnement agréable, les comportements suivants sont formellement interdits :
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Envois massifs ou indésirables :</strong> L&apos;utilisation de nos services pour envoyer des messages ou courriels non sollicités, notamment à des fins commerciales.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Menaces ou intimidations :</strong> Tout comportement visant à nuire à autrui, qu&apos;il s&apos;agisse de propos, d&apos;actes ou de pressions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Propos haineux ou discriminatoires :</strong> Les discours incitant à la violence, à la haine ou à l&apos;exclusion sous toutes leurs formes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Contenus illicites :</strong> Diffusion de matériels contraires à la loi ou inappropriés, y compris tout contenu choquant ou nuisible.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Falsifications ou arnaques :</strong> Usurpation d&apos;identité, tromperie ou toute tentative de fraude.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Cyberattaques :</strong> Intrusions, perturbations ou tentatives de dégradation de nos systèmes ou de ceux de nos utilisateurs.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Signalement Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">Comment signaler un abus ?</h2>
              <p className="text-gray-600">
                Si vous êtes témoin d&apos;une infraction à cette charte, nous vous invitons à nous en informer via l&apos;adresse{' '}
                <a href="mailto:contact@wget.ma" className="text-[#F26522] hover:underline">
                  contact@wget.ma
                </a>{' '}
                en détaillant le plus possible les faits observés.
              </p>
            </section>

            {/* Réactions face aux abus */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">Réactions face aux abus</h2>
              <p className="text-gray-600 mb-4">En cas de non-respect de ces règles, plusieurs mesures peuvent être envisagées :</p>
              <div className="space-y-4 text-gray-600">
                <div className="pl-4 border-l-4 border-[#003B73]/10">
                  <p className="mb-2"><strong>Rappel des règles :</strong> Envoi d&apos;un avertissement pour sensibiliser la personne concernée.</p>
                  <p className="mb-2"><strong>Suspension des services :</strong> Blocage temporaire ou permanent du compte en question.</p>
                  <p><strong>Signalement officiel :</strong> Transmission des informations pertinentes aux autorités compétentes si une infraction légale est constatée.</p>
                </div>
              </div>
            </section>

            {/* Mise à jour des règles */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">Mise à jour des règles</h2>
              <p className="text-gray-600">
                Cette charte pourra être modifiée à tout moment pour s&apos;adapter à de nouvelles situations ou obligations légales. Les utilisateurs seront informés des changements via nos canaux officiels.
              </p>
            </section>

            {/* Votre rôle */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">Votre rôle en tant qu&apos;utilisateur</h2>
              <p className="text-gray-600 mb-4">Pour contribuer à maintenir un espace sûr, chaque utilisateur s&apos;engage à :</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                <li>Respecter les principes énoncés dans cette charte.</li>
                <li>Signaler tout comportement ou contenu suspect.</li>
                <li>Utiliser nos services avec intégrité et respect envers les autres.</li>
              </ul>
            </section>

            {/* Collaboration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">Collaboration avec les autorités</h2>
              <p className="text-gray-600">
                Nous sommes prêts à collaborer avec les institutions compétentes dans le cadre d&apos;enquêtes ou d&apos;actions liées à des abus signalés, dans le respect des lois et de la confidentialité des données.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#003B73] mb-6">Contactez-nous</h2>
              <p className="text-gray-600">
                Pour toute question ou signalement, veuillez écrire à{' '}
                <a href="mailto:contact@wget.ma" className="text-[#F26522] hover:underline">
                  contact@wget.ma
                </a>
              </p>
            </section>

            {/* Footer Note */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Merci de contribuer à faire de nos services un espace agréable et sécurisé pour tous.
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
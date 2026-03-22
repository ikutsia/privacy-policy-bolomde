import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { POLICY_META, translations } from '../content/privacyPolicyStrings';
import './PrivacyPolicyPage.css';

export default function PrivacyPolicyPage() {
  const { pathname } = useLocation();
  const locale = pathname.replace(/\/$/, '') === '/ka' ? 'ka' : 'en';
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.documentTitle;
  }, [t.htmlLang, t.documentTitle]);

  const { effectiveDate, contactEmail, policyUrl } = POLICY_META;

  return (
    <div className="pp-wrap" data-lang={locale}>
      <header className="pp-hero">
        <div className="pp-hero-top">
          <div className="pp-hero-main">
            <div className="pp-kicker">
              <span className="pp-dot" aria-hidden="true" />
              {t.kicker}
            </div>
            <h1 className="pp-title">{t.title}</h1>
            <p className="pp-sub">
              {t.effectiveLabel} {effectiveDate}
            </p>
          </div>
          <nav className="pp-lang" aria-label={t.langNavLabel}>
            <NavLink
              className={({ isActive }) =>
                `pp-lang-btn${isActive ? ' pp-lang-btn--active' : ''}`
              }
              end
              to="/"
            >
              English
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `pp-lang-btn${isActive ? ' pp-lang-btn--active' : ''}`
              }
              to="/ka"
            >
              ქართული
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="pp-main" role="main">
        {t.sections.map((section) => {
          if (section.id === 'contact') {
            return (
              <section key={section.id} className="pp-section">
                <h2 className="pp-h2">{section.title}</h2>
                <p>{t.contactLead}</p>
                <p>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </p>
              </section>
            );
          }

          if (section.changes) {
            return (
              <section key={section.id} className="pp-section">
                <h2 className="pp-h2">{section.title}</h2>
                <p>
                  {section.changes.before}
                  <a href={policyUrl} rel="noopener noreferrer">
                    {policyUrl}
                  </a>
                  {section.changes.after}
                </p>
              </section>
            );
          }

          return (
            <section key={section.id} className="pp-section">
              <h2 className="pp-h2">{section.title}</h2>
              {section.paragraphs?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {section.listItems && (
                <ul className="pp-list">
                  {section.listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}

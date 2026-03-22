import './PrivacyPolicyPage.css';

const EFFECTIVE_DATE = '22.03.2026';
const CONTACT_EMAIL = 'ikutsia@gmail.com';
const POLICY_URL = 'https://privacy-bolomde.netlify.app/';

export default function PrivacyPolicyPage() {
  return (
    <div className="pp-wrap">
      <header className="pp-hero">
        <div className="pp-kicker">
          <span className="pp-dot" aria-hidden="true" />
          Privacy Policy
        </div>
        <h1 className="pp-title">Privacy Policy for Bolomde!</h1>
        <p className="pp-sub">
          Effective Date: {EFFECTIVE_DATE}
        </p>
      </header>

      <main className="pp-main" role="main">
        <section className="pp-section">
          <h2 className="pp-h2">1. Introduction</h2>
          <p>
            Bolomde! (“we”, “our”, or “the App”) is committed to protecting the privacy and
            security of our users. This Privacy Policy explains how information is handled when you
            use the App.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2">2. Information We Collect</h2>
          <p>
            Our App does not collect, store, or share any personal information. All affirmations
            and content are stored locally on your device and are accessible offline.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2">3. Data Usage</h2>
          <ul className="pp-list">
            <li>The App does not transmit data to any servers or third parties.</li>
            <li>No analytics, tracking, advertising, or monitoring is performed.</li>
            <li>All content remains private and fully on your device.</li>
          </ul>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2">4. Security</h2>
          <p>
            We have designed the App to ensure that your data remains completely private. Since
            all data is stored locally and no personal information is collected, there is no risk
            of privacy breaches from the App.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2">5. Third-Party Services</h2>
          <p>
            The App does not use any third-party services, SDKs, or external libraries that could
            access or share user information.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2">6. Children’s Privacy</h2>
          <p>
            Our App does not target children and does not knowingly collect any data from users
            under the age of 13.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted within the
            App or at{' '}
            <a href={POLICY_URL} rel="noopener noreferrer">
              {POLICY_URL}
            </a>
            .
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </section>
      </main>
    </div>
  );
}

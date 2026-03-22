export const POLICY_META = {
  effectiveDate: '22.03.2026',
  contactEmail: 'ikutsia@gmail.com',
  policyUrl: 'https://privacy-b.netlify.app/',
};

/** @typedef {'en' | 'ka'} Locale */

/** @type {Record<Locale, { htmlLang: string; documentTitle: string; langNavLabel: string; kicker: string; title: string; effectiveLabel: string; contactLead: string; sections: Array<{ id: string; title: string; paragraphs?: string[]; listItems?: string[]; changes?: { before: string; after: string } }> }>} */
export const translations = {
  en: {
    htmlLang: 'en',
    documentTitle: 'Privacy Policy — Bolomde!',
    langNavLabel: 'Language',
    kicker: 'Privacy Policy',
    title: 'Privacy Policy for Bolomde!',
    effectiveLabel: 'Effective Date:',
    contactLead: 'If you have any questions about this Privacy Policy, please contact us at:',
    sections: [
      {
        id: 'intro',
        title: '1. Introduction',
        paragraphs: [
          'Bolomde! (“we”, “our”, or “the App”) is committed to protecting the privacy and security of our users. This Privacy Policy explains how information is handled when you use the App.',
        ],
      },
      {
        id: 'collect',
        title: '2. Information We Collect',
        paragraphs: [
          'Our App does not collect, store, or share any personal information. All affirmations and content are stored locally on your device and are accessible offline.',
        ],
      },
      {
        id: 'usage',
        title: '3. Data Usage',
        listItems: [
          'The App does not transmit data to any servers or third parties.',
          'No analytics, tracking, advertising, or monitoring is performed.',
          'All content remains private and fully on your device.',
        ],
      },
      {
        id: 'security',
        title: '4. Security',
        paragraphs: [
          'We have designed the App to ensure that your data remains completely private. Since all data is stored locally and no personal information is collected, there is no risk of privacy breaches from the App.',
        ],
      },
      {
        id: 'third',
        title: '5. Third-Party Services',
        paragraphs: [
          'The App does not use any third-party services, SDKs, or external libraries that could access or share user information.',
        ],
      },
      {
        id: 'children',
        title: '6. Children’s Privacy',
        paragraphs: [
          'Our App does not target children and does not knowingly collect any data from users under the age of 13.',
        ],
      },
      {
        id: 'changes',
        title: '7. Changes to This Privacy Policy',
        changes: {
          before:
            'We may update this Privacy Policy from time to time. Changes will be posted within the App or at ',
          after: '.',
        },
      },
      {
        id: 'contact',
        title: '8. Contact Us',
        paragraphs: [],
      },
    ],
  },
  ka: {
    htmlLang: 'ka',
    documentTitle: 'Bolomde!-ს კონფიდენციალურობის პოლიტიკა',
    langNavLabel: 'ენა',
    kicker: 'კონფიდენციალურობის პოლიტიკა',
    title: 'Bolomde!-ს კონფიდენციალურობის პოლიტიკა',
    effectiveLabel: 'ძალაში შესვლის თარიღი:',
    contactLead:
      'თუ თქვენ გაქვთ რაიმე შეკითხვა ამ კონფიდენციალურობის პოლიტიკასთან დაკავშირებით, გთხოვთ, დაგვიკავშირდეთ შემდეგ მისამართზე:',
    sections: [
      {
        id: 'intro',
        title: '1. შესავალი',
        paragraphs: [
          'Bolomde! („ჩვენ“, „ჩვენი“ ან „აპლიკაცია“) ვალდებულია დაიცვას ჩვენი მომხმარებლების კონფიდენციალურობა და უსაფრთხოება. ეს კონფიდენციალურობის პოლიტიკა განმარტავს, თუ როგორ ხდება ინფორმაციის დამუშავება აპლიკაციის გამოყენებისას.',
        ],
      },
      {
        id: 'collect',
        title: '2. ჩვენს მიერ შეგროვებული ინფორმაცია',
        paragraphs: [
          'ჩვენი აპლიკაცია არ აგროვებს, ინახავს და არ აზიარებს რაიმე პერსონალურ ინფორმაციას. ყველა დადასტურება და კონტენტი ინახება ლოკალურად თქვენს მოწყობილობაზე და ხელმისაწვდომია ოფლაინ რეჟიმში.',
        ],
      },
      {
        id: 'usage',
        title: '3. მონაცემთა გამოყენება',
        listItems: [
          'აპლიკაცია არ გადასცემს მონაცემებს არცერთ სერვერზე ან მესამე მხარეზე.',
          'არ ხორციელდება ანალიტიკა, თვალყურის დევნება, რეკლამა ან მონიტორინგი.',
          'ყველა კონტენტი რჩება კონფიდენციალური და სრულად თქვენს მოწყობილობაზე.',
        ],
      },
      {
        id: 'security',
        title: '4. უსაფრთხოება',
        paragraphs: [
          'ჩვენ შევქმენით აპლიკაცია ისე, რომ უზრუნველვყოთ თქვენი მონაცემების სრული კონფიდენციალურობა. რადგან ყველა მონაცემი ინახება ლოკალურად და არ გროვდება პერსონალური ინფორმაცია, არ არსებობს კონფიდენციალურობის დარღვევის რისკი აპლიკაციიდან.',
        ],
      },
      {
        id: 'third',
        title: '5. მესამე მხარის სერვისები',
        paragraphs: [
          'აპლიკაცია არ იყენებს არცერთ მესამე მხარის სერვისს, SDK-ს ან გარე ბიბლიოთეკას, რომლებსაც შეუძლიათ მომხმარებლის ინფორმაციაზე წვდომა ან გაზიარება.',
        ],
      },
      {
        id: 'children',
        title: '6. ბავშვთა კონფიდენციალურობა',
        paragraphs: [
          'ჩვენი აპლიკაცია არ არის ბავშვებისთვის განკუთვნილი და შესაბამისად არ აგროვებს 13 წლამდე ასაკის მომხმარებლების მონაცემებს.',
        ],
      },
      {
        id: 'changes',
        title: '7. ცვლილებები ამ კონფიდენციალურობის პოლიტიკაში',
        changes: {
          before:
            'ჩვენ შეიძლება დროდადრო განვაახლოთ ეს კონფიდენციალურობის პოლიტიკა. ცვლილებები გამოქვეყნდება აპლიკაციაში ან ',
          after: ' -ზე.',
        },
      },
      {
        id: 'contact',
        title: '8. დაგვიკავშირდით',
        paragraphs: [],
      },
    ],
  },
};

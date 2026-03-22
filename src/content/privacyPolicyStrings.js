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
    documentTitle: 'კონფიდენციალურობის პოლიტიკა — Bolomde!',
    langNavLabel: 'ენა',
    kicker: 'კონფიდენციალურობის პოლიტიკა',
    title: 'Bolomde!-ის კონფიდენციალურობის პოლიტიკა',
    effectiveLabel: 'ამოქმედების თარიღი:',
    contactLead:
      'თუ გაქვთ კითხვები ამ კონფიდენციალურობის პოლიტიკასთან დაკავშირებით, დაგვიკავშირდით მისამართზე:',
    sections: [
      {
        id: 'intro',
        title: '1. შესავალი',
        paragraphs: [
          'Bolomde! („ჩვენ“, „ჩვენი“ ან „აპლიკაცია“) ერთგულად ეცლება თავისი მომხმარებლების პირადულობისა და უსაფრთხოების დაცვას. ამ კონფიდენციალურობის პოლიტიკაში აღწერილია, როგორ ხდება ინფორმაციის დამუშავება აპლიკაციის გამოყენებისას.',
        ],
      },
      {
        id: 'collect',
        title: '2. რა ინფორმაციას ვაგროვებთ',
        paragraphs: [
          'ჩვენი აპლიკაცია არ აგროვებს, არ ინახავს და არ აზიარებს პერსონალურ ინფორმაციას. ყველა აფირმაცია და შინაარსი ინახება თქვენს მოწყობილობაზე ლოკალურად და ხელმისაწვდომია ოფლაინ რეჟიმში.',
        ],
      },
      {
        id: 'usage',
        title: '3. მონაცემების გამოყენება',
        listItems: [
          'აპლიკაცია არ გადასცემს მონაცემებს რაიმე სერვერს ან მესამე პირებს.',
          'არ ხორციელდება ანალიტიკა, ტრეკინგი, რეკლამა ან მონიტორინგი.',
          'ყველა შინაარსი რჩება პირად და მთლიანად თქვენს მოწყობილობაზე.',
        ],
      },
      {
        id: 'security',
        title: '4. უსაფრთხოება',
        paragraphs: [
          'აპლიკაცია ისეა შექმნილი, რომ თქვენი მონაცემები მთლიანად კონფიდენციალური დარჩეს. ვინაიდან ყველა მონაცემი ინახება ლოკალურად და პერსონალური ინფორმაცია არ იგროვება, აპლიკაციიდან პირადულობის დარღვევის რისკი არ არსებობს.',
        ],
      },
      {
        id: 'third',
        title: '5. მესამე მხარის სერვისები',
        paragraphs: [
          'აპლიკაცია არ იყენებს მესამე მხარის სერვისებს, SDK-ებს ან გარე ბიბლიოთეკებს, რომლებსაც შეუძლიათ მომხმარებლის ინფორმაციაზე წვდომა ან გაზიარება.',
        ],
      },
      {
        id: 'children',
        title: '6. ბავშვების პირადულობა',
        paragraphs: [
          'ჩვენი აპლიკაცია არ არის განკუთვნილი ბავშვებისთვის და შეგნებულად არ აგროვებს მონაცემებს 13 წლამდე ასაკის მომხმარებლებისგან.',
        ],
      },
      {
        id: 'changes',
        title: '7. ცვლილებები ამ პოლიტიკაში',
        changes: {
          before:
            'ჩვენ შეგვიძლია დროდადრო განვაახლოთ ეს კონფიდენციალურობის პოლიტიკა. ცვლილებები გამოქვეყნდება აპლიკაციაში ან მისამართზე ',
          after: '.',
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

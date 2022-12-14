var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  styling: {
      theme: ['light', 'bottom', 'left'],
  },
  noAutoLoad: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: false,
  translations: {
      zz: {
          privacyPolicyUrl: '/politica-cookies',
      },
      de: {
          privacyPolicyUrl: '/#datenschutz',
          consentModal: {
              description:
                  'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln. Einträge die als "Beispiel" gekennzeichnet sind dienen lediglich zu Demonstrationszwecken und werden nicht wirklich verwendet.',
          },
          inlineTracker: {
              description: 'Beispiel für ein Inline-Tracking Skript',
          },
          externalTracker: {
              description: 'Beispiel für ein externes Tracking Skript',
          },
          adsense: {
              description: 'Anzeigen von Werbeanzeigen (Beispiel)',
              title: 'Google AdSense Werbezeugs',
          },
          matomo: {
              description: 'Sammeln von Besucherstatistiken',
          },
          camera: {
              description:
                  'Eine Überwachungskamera (nur ein Beispiel zu IMG-Tags)',
          },
          cloudflare: {
              description: 'Schutz gegen DDoS-Angriffe',
          },
          intercom: {
              description:
                  'Chat Widget & Sammeln von Besucherstatistiken (nur ein Beispiel)',
          },
          mouseflow: {
              description: 'Echtzeit-Benutzeranalyse (nur ein Beispiel)',
          },
          googleFonts: {
              description: 'Web-Schriftarten von Google gehostet',
          },
          purposes: {
              analytics: 'Besucher-Statistiken',
              security: 'Sicherheit',
              livechat: 'Live Chat',
              advertising: 'Anzeigen von Werbung',
              styling: 'Styling',
          },
      },
      en: {
          consentModal: {
              title: '<u>test</u>',
              description:
                  'Here you can see and customize the information that we collect about you. Entries marked as "Example" are just for demonstration purposes and are not really used on this website.',
          },
          inlineTracker: {
              description: 'Example of an inline tracking script',
          },
          externalTracker: {
              description: 'Example of an external tracking script',
          },
          adsense: {
              description: 'Displaying of advertisements (just an example)',
              title: 'Google Adsense Advertisement',
          },
          matomo: {
              description: 'Collecting of visitor statistics',
          },
          camera: {
              description:
                  'A surveillance camera (just an example for an IMG tag)',
          },
          cloudflare: {
              description: 'Protection against DDoS attacks',
          },
          intercom: {
              description:
                  'Chat widget & collecting of visitor statistics (just an example)',
          },
          mouseflow: {
              description: 'Real-Time user analytics (just an example)',
          },
          googleFonts: {
              description: 'Web fonts hosted by Google',
          },
          purposes: {
              analytics: 'Analytics',
              security: 'Security',
              livechat: 'Livechat',
              advertising: 'Advertising',
              styling: 'Styling',
          },
      },
  },
  services: [
      {
          name: 'twitter',
          default: false,
          contextualConsentOnly: true,
          purposes: ['marketing'],
      },
      {
          name: 'youtube',
          default: true,
          purposes: ['marketing'],
      },
      {
          name: 'matomo',
          default: true,
          title: 'Matomo/Piwik',
          purposes: ['analytics'],
          cookies: [
              [/^_pk_.*$/, '/', 'klaro.kiprotect.com'], 
              [/^_pk_.*$/, '/', 'localhost'], 
              'piwik_ignore',
          ],
          callback: function(consent, service) {
              console.log(
                  'User consent for service ' + service.name + ': consent=' + consent
              );
          },
          required: false,
          optOut: false,
          onlyOnce: true,
      },
      {
          name: 'inlineTracker',
          title: 'Inline Tracker',
          purposes: ['analytics'],
          cookies: ['inline-tracker'],
          optOut: false,
      },
      {
          name: 'externalTracker',
          title: 'External Tracker',
          purposes: ['analytics', 'security'],
          cookies: ['external-tracker'],
      },
      {
          name: 'intercom',
          title: 'Intercom',
          default: true,
          purposes: ['livechat'],
      },
      {
          name: 'mouseflow',
          title: 'Mouseflow',
          purposes: ['analytics'],
      },
      {
          name: 'adsense',
          purposes: ['advertising'],
      },
      {
          name: 'camera',
          title: 'Surveillance Camera',
          purposes: ['security'],
      },
      {
          name: 'cloudflare',
          title: 'Cloudflare',
          purposes: ['security'],
          required: true,
      },
      {
          name: 'Facebook Ads',
          title: 'Facebook Ads',
          purposes: ['marketing'],
          default: true,
      },
      {
          name: 'Google Ads',
          title: 'Google Ads',
          purposes: ['marketing'],
          default: true
      }, 
      {
          name: 'Google Analytics',
          default: true,
          title: 'Google Analytics',
          purposes: ['analytics'],
          cookie: ['_ga']
      },
  ],
};
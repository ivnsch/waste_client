import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "app_title": "Where with?",
                    "email_missing_item_subject": "Missing item: ",
                    "email_missing_item_body": "Describe item if needed",
                    "lang_modal_title": "Language",
                    "legal_modal_title": "Legal",
                    "legal_tab_about": "About",
                    "legal_tab_terms": "Terms",
                    "legal_tab_privacy": "Privacy",
                    "legal_general_1": "The owner of this site doesn't take any legal responsibility for the authenticity or validity of its contents.",
                    "legal_general_2_contact_link_text": "contact",
                    "legal_general_2_part_1": "Please ",
                    "legal_general_2_part_2": " me if something is wrong. We'll investigate ASAP!",
                    "link_feedback": "Contact",
                    "link_legal": "Legal",
                    "link_lang": "Language",
                    "link_social": "Social",
                    "map_filter_disposal_places": "Disposal",
                    "map_filter_donation_places": "Donation",
                    "map_filter_2hand_places": "2-Hand",
                    "map_filter_retailers": "Retailers",
                    "map_filter_has_pickup": "Pickup",
                    "map_filter_has_in_place": "On-site",
                    "map_open_always": "Always open",
                    "map_open_unknown": "Unknown opening times",
                    "map_currently_closed": "Closed!",
                    "map_currently_open": "Open!",
                    "map_opening_times": "Opening times",
                    "map_your_location": "Your location!",
                    "meta_page_title": "Where with?",
                    "result_distance_linear_tooltip": "Distance (linear)",
                    "result_distance_km": "km",
                    "results_header_categories_plural": "Categories",
                    "results_header_categories_singular": "Category",
                    "results_header_containers": "Container",
                    "results_header_donations": "Donation",
                    "results_header_online_shops": "Online shops",
                    "results_header_pickup": "Pickup",
                    "results_header_retailers": "Retailers",
                    "results_header_second_hand": "Second hand",
                    "results_header_trash_places": "Disposal",
                    "results_header_tips": "Infos",
                    "results_header_public_containers": "Map",
                    "results_phone_icon_title": "Call",
                    "results_email_icon_title": "Email",
                    "results_recipients_show_more" : "Show more",
                    "results_recipient_closed": "Closed",
                    "results_recipient_closed_holiday": "Holiday",
                    "results_recipient_type_title_2hand": "Second hand",
                    "results_recipient_type_title_disposal_place": "Disposal",
                    "results_recipient_type_title_donation": "Donation",
                    "results_recipient_type_title_has_pickup": "Has pickup",
                    "results_recipient_type_title_online_shop": "Online shop",
                    "results_recipient_type_title_retailer": "Retailer",
                    "retailer_name_where_you_bought_it": "Where you bought it",
                    "search_box_placeholder": "Enter item name",
                    "search_empty_result_request_item": "Request item",
                    "social_modal_title": "Social",
                    "search_no_results": "No results for",
                    "social_share_subject": "Find the best way to get rid of your things in Berlin! http://woentsorgen.de",
                    "social_share_with_twitter": "Share on Twitter",
                    "social_follow_on_twitter": "Follow on Twitter",
                    "suggestion_not_found": "Item missing?",
                    "weekday_monday": "Monday",
                    "weekday_tuesday": "Tuesday",
                    "weekday_wednesday": "Wednesday",
                    "weekday_thursday": "Thursday",
                    "weekday_friday": "Friday",
                    "weekday_saturday": "Saturday",
                    "weekday_sunday": "Sunday",
                }
            },
            de: {
                translations: {
                    "app_title": "Wohin mit?",
                    "email_missing_item_subject": "Item fehlt: ",
                    "email_missing_item_body": "Beschreibung, falls nötig",
                    "lang_modal_title": "Sprache",
                    "legal_modal_title": "Rechtliches",
                    "legal_tab_about": "Impressum",
                    "legal_tab_terms": "AGB",
                    "legal_tab_privacy": "Datenschutz",
                    "legal_general_1": "Der Betreiber dieser Seite übernimmt keine rechtliche Verantwortung für die Richtigkeit oder Gültigkeit der angegebenen Daten!",
                    "legal_general_2_contact_link_text": "Verbindung",
                    "legal_general_2_part_1": "Bitte setze Dich in ",
                    "legal_general_2_part_2": " wenn etwas falsch ist. Wir werden es umgehend überprüfen!",
                    "link_feedback": "Kontakt",
                    "link_legal": "Rechtliches",
                    "link_lang": "Sprache",
                    "link_social": "Soziales",
                    "map_filter_disposal_places": "Entsorgung",
                    "map_filter_donation_places": "Spenden",
                    "map_filter_2hand_places": "Verkaufen",
                    "map_filter_retailers": "Händler",
                    "map_filter_has_pickup": "Abholung",
                    "map_filter_has_in_place": "Vor Ort",
                    "map_open_always": "Immer geöffnet!",
                    "map_open_unknown": "Öffnungszeiten unbekannt",
                    "map_currently_closed": "Derzeit geschlossen!",
                    "map_currently_open": "Geöffnet!",
                    "map_opening_times": "Öffnungszeiten",
                    "map_your_location": "Dein Standort!",
                    "meta_page_title": "Wohin mit?",
                    "result_distance_linear_tooltip": "Entfernung (Luftlinie)",
                    "result_distance_km": "Km",
                    "results_header_categories_plural": "Kategorien",
                    "results_header_categories_singular": "Kategorie",
                    "results_header_containers": "Tonne",
                    "results_header_donations": "Spenden",
                    "results_header_online_shops": "Online Shops",
                    "results_header_pickup": "Abholung",
                    "results_header_retailers": "Händler",
                    "results_header_second_hand": "Verkaufen",
                    "results_header_trash_places": "Höfe",
                    "results_header_tips": "Infos",
                    "results_header_public_containers": "Karte",
                    "results_phone_icon_title": "Anrufen",
                    "results_email_icon_title": "Email",
                    "results_recipients_show_more" : "Mehr anzeigen",
                    "results_recipient_closed": "Geschlossen",
                    "results_recipient_closed_holiday": "Feiertag",
                    "results_recipient_type_title_2hand": "Verkaufen",
                    "results_recipient_type_title_disposal_place": "Hof",
                    "results_recipient_type_title_donation": "Spenden",
                    "results_recipient_type_title_has_pickup": "Holt ab",
                    "results_recipient_type_title_online_shop": "Online shop",
                    "results_recipient_type_title_retailer": "Händler",
                    "retailer_name_where_you_bought_it": "Wo es gekauft wurde",
                    "search_box_placeholder": "Gib den Namen des Gegenstandes ein",
                    "search_empty_result_request_item": "Item anfragen",
                    "social_modal_title": "Soziales",
                    "search_no_results": "Keine Ergebnisse für",
                    "social_share_subject": "Finde wie du am besten deine Sachen loswirst in Berlin! http://woentsorgen.de",
                    "social_share_with_twitter": "Teile mit Twitter",
                    "social_follow_on_twitter": "Folge auf Twitter",
                    "suggestion_not_found": "Fehlt etwas?",
                    "weekday_monday": "Montag",
                    "weekday_tuesday": "Dienstag",
                    "weekday_wednesday": "Mittwoch",
                    "weekday_thursday": "Donnerstag",
                    "weekday_friday": "Freitag",
                    "weekday_saturday": "Samstag",
                    "weekday_sunday": "Sonntag",
                }
            }
        },
        fallbackLng: 'en',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',
        load: 'languageOnly',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;

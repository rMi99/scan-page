export const getTemplateData = (t)=>{

    return {
        pdf:{
            company: 'Enterprise Inc.',
            pdftitle: t('pdf.title'),
            directly_show_pdf: "",
            primaryColor: "#57C4D9",
            SecondaryColor: "#FF9865",
            description: t('pdf.description'),
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
            screen: false,
            button: t('pdf.button'),
            pdf: "",
            pdfThumbnail:'',
            website: "#",
            defImg: "/pdf.jpg"
        },
        listOfLinks:{
            list_title: 'Jenny Leslie',
            list_description: t('links.about'),
            font_text: "GT Walsheim Pro",
            font_title: "GT Walsheim Pro",
            linkTextColor: "#FFF",
            linkColor: "#37C1B4",
            primaryColor: "#37C1B4",
            companyLogo: "/images/images/new/avatar2.webp",
            screen: false,
            linkList: [
                {
                    name: t('links.link.About1'),
                    image: "/images/ListOfLinks/makeup.png",
                    link: ""
                },
                {
                    name: 'Instagram ' +  t('links.link.About2'),
                    image: "/images/ListOfLinks/instagram.png",
                    link: ""
                },
                {
                    name: 'TikTok ' +  t('links.link.About3'),
                    image: "/images/ListOfLinks/tiktok.png",
                    link: ""
                },
                {
                    name: t('links.link.About4'),
                    image: "/images/ListOfLinks/youtube.png",
                    link: ""
                },
                {
                    name: t('links.link.About5'),
                    image: "/images/ListOfLinks/demo.png",
                    link: ""
                }
            ],
            socialLinks: [
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: 'X',
                    url: "/images/social/twitter.png"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('links.social.youtube'),
                    url: "/images/social/youtube.svg"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: 'TikTok',
                    url: "/images/ListOfLinks/tiktok.png"
                }
            ]
        },
        vcard:{
            screen: false,
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
            vcard_profession: t('vcard.profession'),
            primaryColor: "#093A32",
            SecondaryColor: "#093A32",
            vcard_first_name: 'John Carlson',
            vcard_last_name: "",
            socialLinks: [
                {
                    name: "",
                    text: t('vcard.social_account'),
                    icon: 'LinkedIn',
                    url: "/images/social/linkedin.png"
                },
                {
                    name: "",
                    text: t('vcard.social_account'),
                    icon: t('vcard.facebook'),
                    url: "/images/social/facebook.png"
                },
                {
                    name: "",
                    text: t('vcard.social_account'),
                    icon: t('vcard.google'),
                    url: "/images/social/google.png"
                },
                {
                    name: "",
                    text: t('vcard.social_account'),
                    icon: t('vcard.instagram'),
                    url: "/images/social/instagram.webp"
                }
            ],
            vcard_website: [
                {
                    title: t('vcard.website'),
                    website: "john-carlson.com"
                }
            ],
            vcard_phone: [
                {
                    label: "",
                    type: "other",
                    number: "555-100-1000"
                }
            ],
            vcard_email: [
                {
                    title: "",
                    email: "John.Carlson@gmail.com"
                }
            ],
            vcard_note: t('vcard.summary'),
            vcard_company: t('vcard.company_name'),
            vcard_social_label: [],
            vcard_social_value: [],
            images: "/images/images/new/avatar.webp",
            offer_street: t('vcard.location_text'),
            offer_number: "",
            offer_postalcode: "",
            offer_city: "",
            offer_state: "",
            offer_country: "",
            offer_url1: "#",
            latitude: "",
            longitude: "",
            vcard_add_contact_at_top: 'falseprev',
            street_number: true
        },
        business:{
            contactMobiles: [
                {
                    title: "",
                    number: "555-100-1000"
                }
            ],
            contactEmails: [
                {
                    title: "",
                    email: "Boulangerie@gmail.com"
                }
            ],
            contactWebsite:[
                {title:'',website:'www.boulangerie.com'}
            ],
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
            socialLinks: [
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('bushiness.facebook'),
                    url: "/images/social/facebook.png"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('bushiness.instagram'),
                    url: "/images/social/instagram.webp"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('bushiness.google'),
                    url: "/images/social/google.png"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: 'LinkedIn',
                    url: "/images/social/linkedin.png"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: 'TikTok',
                    url: "/images/ListOfLinks/tiktok.png"
                }
            ],
            aboutCompany: t('bushiness.about_company_text'),
            weekDays: {
                Monday: [
                    {
                        "from": "10:00",
                        "to": "17:00"
                    }
                ],
                Tuesday: [
                    {
                        "from": "10:00",
                        "to": "17:00"
                    }
                ],
                Wednesday: [
                    {
                        "from": "10:00",
                        "to": "17:00"
                    }
                ],
                Thursday: [
                    {
                        "from": "10:00",
                        "to": "17:00"
                    }
                ],
                Friday: [
                    {
                        "from": "10:00",
                        "to": "17:00"
                    }
                ],
                Saturday: [
                    {
                        "from": "10:00",
                        "to": "17:00"
                    }
                ],
                Sunday: [
                    {
                        "from": "10:00",
                        "to": "05:00"
                    }
                ]
            },
            primaryColor: "#1A97F0",
            SecondaryColor: "#0079FF",
            companyLogo: "/images/images/new/business.webp",
            company: t('bushiness.company'),
            companyTitle: t('bushiness.title'),
            companySubtitle: t('bushiness.subtitle'),
            screen: false,
            contactName: 'Boulangerie Pâtissier',
            businessButtons: t('bushiness.button'),
            businessButtonUrls: "#",
            businessButtonsCreated: "0",
            cardContainer: false,
            ship_address: "",
            offer_street: t('bushiness.location_1'),
            offer_number: "",
            offer_postalcode: "",
            offer_city: t('bushiness.location_2'),
            offer_state: "",
            offer_country: "",
            offer_url1: "#",
            latitude: "",
            longitude: "",
            ficons: [
                "ficon",
                "ficon1",
                "ficon2",
                "ficon3",
                "ficon4",
                "ficon5",
                "ficon6",
                "ficon7",
                "ficon8",
                // "ficon9",
                "ficon10",
                "ficon11",
                "ficon12"
            ],
            street_number: true
        },
        images:{
            primaryColor: "#28C254",
            image_title: t('images.headerTitle'),
            image_description: t('images.headerDescription'),
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
            screen: false,
            website: "#",
            images: [
                "/images/images/new/01.webp",
                "/images/images/new/02.webp"
            ],
            buttons: [
                {
                    text: t('images.viewMoreButton'),
                    url: "#"
                }
            ],
            horizontal: true
        },
        video:{
            videos: [],
            direct_video: false,
            Highlight: false,
            Autoplay: false,
            primaryColor: "#AEE301",
            companyName: "Emily’s Kitchen",
            videoTitle: t('video.title'),
            videoDescription: t('video.description'),
            screen: false,
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
            button_text: t('video.view_more'),
            button_url: "",
            socialLinks: [
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('bushiness.facebook'),
                    url: "/images/social/facebook.png"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('bushiness.instagram'),
                    url: "/images/social/instagram.webp"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('links.social.youtube'),
                    url: "/images/social/youtube.svg"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: 'TikTok',
                    url: "/images/ListOfLinks/tiktok.png"
                }
            ],
        },
        app:{
            screen: false,
            SecondaryColor: "#CA182B",
            primaryColor: "#CA182B",
            app_title: 'Nourish',
            app_description: t('app.description'),
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
            app_website: "#",
            app_company: t('app.base'),
            google: "#",
            apple: "#",
            amazon: "#",
            images: [],
            companyLogo: "/images/images/new/nourish.webp",
        },
        coupon:{
            screen: false,
            ship_address: "",
            company: t('coupon.company'),
            title: t('coupon.salesBadge'),
            description: t('coupon.offerDescription'),
            salesBadge: t('coupon.salesBadge'),
            buttonToSeeCode: t('coupon.offerButton'),
            couponCode: "25%%20OFF",
            validTillDate: "",
            terms: [t('coupon.termsParagraph')],
            buttonText: t('coupon.webButton'),
            buttonUrl: "#",
            primaryColor: "#C12EFE",
            SecondaryColor: "#EDED4F",
            companyLogo: "/images/images/new/sale.webp",
            offerImage: "https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg",
            offer_street: "",
            offer_number: "",
            offer_postalcode: "",
            offer_city: "",
            offer_state: "",
            offer_country: "",
            offer_url1: "#",
            latitude: "",
            longitude: "",
            street_number: false,
            flip: false,
            barCodeTgl: true,
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro"
        },
        mp3:{
            screen: false,
            addDownloadOption: "",
            button_url: "",
            button_text: t('mp3.viewMoreButton'),
            primaryColor: "#7572FF",
            SecondaryColor: "#7572FF",
            mp3_title: 'Night Drive',
            mp3_description: t('mp3.songDescription'),
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
            mp3_website: "#",
            mmp3: [
                "/empty.mp3"
            ],
            images: [],
            image: "/images/images/new/mp3.webp",
            button_created: "0",
            socialLinks: [ 
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('bushiness.facebook'),
                    url: "/images/social/facebook.png"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('bushiness.instagram'),
                    url: "/images/social/instagram.webp"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('links.social.youtube'),
                    url: "/images/social/youtube.svg"
                },
                {
                    name: "",
                    text: t('links.socialAccType'),
                    icon: t('mp3.social.spotify'),
                    url: "/images/social/spotify.svg"
                }
            ],
        },
        menu:{
            sections: [
                {
                    id: "1",
                    name: t('menu.section_1'),
                    description: "",
                    products: [
                        {
                            id: "1",
                            name: t('menu.section_1_product_name'),
                            image: "https://online-qr-generator.com/uploads/menu/645d593b275ff_1_productImages_vegetable-salad.jpeg",
                            translated: "Salat",
                            description: t('menu.section_1_product_desc'),
                            price: "12",
                            allergens: [
                                "cereals",
                                "crustaceans"
                            ]
                        }
                    ]
                },
                {
                    id: "8",
                    name: t('menu.section_2'),
                    description: "",
                    products: [
                        {
                            id: "1",
                            name: t('menu.section_2_product_name'),
                            image: "https://online-qr-generator.com/uploads/menu/645d593b275ff_78_productImages_Orange.jpg",
                            translated: "Orangensaft",
                            description: t('menu.section_2_product_desc'),
                            price: "8",
                            allergens: [
                                "peanuts",
                                "soy"
                            ]
                        }
                    ]
                },
                {
                    id: "78",
                    name: t('menu.section_3'),
                    description: "",
                    products: [
                        {
                            id: "1",
                            name: t('menu.section_3_product_name'),
                            image: "https://online-qr-generator.com/uploads/menu/645d593b275ff_8_productImages_donuts.png",
                            translated: "Glasierter Hefe-Donut",
                            description: t('menu.section_3_product_desc'),
                            price: "6",
                            allergens: [
                                "milk",
                                "fruits"
                            ]
                        }
                    ]
                },
                {
                    id: "139",
                    name: t('menu.section_4'),
                    description: "",
                    products: [
                        {
                            id: "1",
                            name: t('menu.section_4_product_name'),
                            image: "https://online-qr-generator.com/uploads/menu/645d593b275ff_139_productImages_fish.jpg",
                            translated: "Gebratener Lachs mit Walnuss",
                            description: t('menu.section_4_product_desc'),
                            price: "45",
                            allergens: [
                                "eggs",
                                "fish"
                            ]
                        }
                    ]
                }
            ],
            socialLinks: [
                {
                    name: "",
                    text: "",
                    icon: "Facebook",
                    url: "/images/social/facebook.png"
                },
                {
                    name: "",
                    text: "",
                    icon: "Instagram",
                    url: "/images/social/instagram.webp"
                },
                {
                    name: "",
                    text: "",
                    icon: "Google",
                    url: "/images/social/google.png"
                },
                {
                    name: "",
                    text: "",
                    icon: "X",
                    url: "/images/social/twitter.png"
                },
                {
                    name: "",
                    text: "",
                    icon: "TikTok",
                    url: "/images/ListOfLinks/tiktok.png"
                }
            ],
            contactMobiles: [
                {
                    title: "",
                    number: "555-100-1000"
                }
            ],
            contactEmails: [
                {
                    title: "",
                    email: "TastyFood@gmail.com"
                }
            ],
            activeId: "",
            // contactName: t('menu.restaurant_name'),
            contactWebsite:[
                {title:'',website:'www.tastyfood.com'}
            ],
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
            primaryColor: "#FF6228",
            companyLogo: "/images/images/new/tastyfood.webp",
            companyTitle: t('menu.restaurant_name'),
            companyDescription: t('menu.restaurant_desc'),
            screen: false,
            weekDays: {
                Saturday: [
                    {
                        from: "10:00",
                        to: "14:00"
                    },
                    {
                        from: "17:00",
                        to: "23:00"
                    }
                ],
                Sunday: [
                    {
                        from: "10:00",
                        to: "17:00"
                    }
                ],
                Monday: [
                    {
                        from: "10:00",
                        to: "17:00"
                    }
                ],
                Tuesday: [
                    {
                        from: "10:00",
                        to: "17:00"
                    }
                ],
                Wednesday: [
                    {
                        from: "10:00",
                        to: "17:00"
                    }
                ],
                Thursday: [
                    {
                        from: "10:00",
                        to: "17:00"
                    }
                ]
            },
            areAllDaysNull: true
        },
        event:{
            screen: false,
            primaryColor: "#00296B",
            title: "Quantum Tech Conference",
            description: "Join us for an innovative conference combining insightful learning and entertainment.",
            image: "/images/images/new/event.webp",
            viewMoreContent: "View More",
            viewMoreUrl: "#",
            calendarUrl: "#",
            startDay: "Thursday February 8th",
            startTime: "09:00 am",
            endDay: "Friday February 9th",
            endTime: "09:00 am",
            companyDescription: "Dive into the future of tech at our exciting conference! Enjoy insightful sessions and entertaining showcases for valuable learning and unforgettable experiences.",
            offer_street: "49 Gower Street,",
            offer_number: "",
            offer_postalcode: "",
            offer_city: "London, WC1F 2FA, United Kingdom",
            offer_state: "",
            offer_country: "",
            offer_url1: "#",
            latitude: "",
            longitude: "",
            street_number: true,
            ficons: [
                "ficon",
                "ficon1",
                "ficon2",
                "ficon3",
                "ficon4",
                "ficon5",
                "ficon6",
                "ficon7",
            ],
            contactName: "George Birmingham",
            contactWebsite: "#",
            contactMobiles: [
                {
                    title: "",
                    number: "2435243523"
                }
            ],
            contactEmails: [
                {
                    title: "",
                    email: "george.bir@quantech.com"
                }
            ],
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
        },
        facebook:{
            screen: false,
            cover: "/images/images/new/fb_cover.png",
            profileImg: "/images/images/new/fb_pic.webp",
            title: "Designer's world (Ui/Ux)",
            description: "This is Best UI/ UX designer & developer group community, don't hesitate post requests for help on design themes.",
            pageUrl: "#",
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
        },
        social:{
            screen: false,
            primaryColor: "#A8BDE2",
            images: [
                "/images/images/new/social media/1.webp",
                "/images/images/new/social media/2.webp",
                "/images/images/new/social media/3.webp",
            ],
            title: "Ariel Campbell",
            description: "Welcome to my digital hub, where I share insights, creations, and more. Dive in to stay updated and connected with me across the web.",
            socialLinks: [
                {
                    name: "",
                    text: "Social Account",
                    icon: "Facebook",
                    url: "/images/social/facebook.png"
                },
                {
                    name: "",
                    text: "Social Account",
                    icon: "Instagram",
                    url: "/images/social/instagram.webp"
                },
                {
                    name: "",
                    text: "Social Account",
                    icon: "TikTok",
                    url: "/images/social/tiktok.png"
                },
                {
                    name: "",
                    text: "Social Account",
                    icon: "YouTube",
                    url: "/images/social/youtube.png"
                },
            ],
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
        },
        rate:{
            screen: false,
            primaryColor: "#97000F",
            title: "Los Angeles Bus Tour",
            description: "Embark on an adventure, one stop at a time!",
            image: "/images/images/new/rate.webp",
            sendRatingButtonContent: "Send Rating",
            website: "#",
            font_title: "GT Walsheim Pro",
            font_text: "GT Walsheim Pro",
        },
        instagram:{
            username: "Username",
        }
    }
}

/* ==========================================================================
   Aarohan International School - Interactive Functionality & Bilingual System
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Bilingual Translation System
    const translations = {
        en: {
            "page-title": "Aarohan International School | CBSE School Bengaluru",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-principal": "Principal",
            "nav-academics": "Academics",
            "nav-results": "Results",
            "nav-news": "News",
            "nav-facilities": "Facilities",
            "nav-admissions": "Admissions",
            "nav-contact": "Contact",
            "nav-portal": "Portal",
            "hero-badge": "Reimagining Indian Education",
            "hero-title": "Empowering <span class=\"gradient-text\">Minds</span><br>Shaping The <span class=\"gradient-text-alt\">Future</span>",
            "hero-desc": "Aarohan International School merges CBSE academic rigor with IIT-JEE & NEET foundations and cutting-edge STEM training, nurturing global leaders of tomorrow.",
            "hero-cta-enroll": "Enroll Now",
            "hero-cta-explore": "Explore Campus",
            "hero-badge-1-title": "Top CBSE Rank",
            "hero-badge-1-desc": "Academic Excellence",
            "hero-badge-2-title": "JEE/NEET Prep",
            "hero-badge-2-desc": "Integrated Coaching",
            "principal-title": "A Word from the Principal",
            "principal-name": "Dr. Meera Krishnan",
            "principal-role": "Principal, Aarohan International School",
            "principal-quote": "\"At Aarohan, we believe education is not merely the accumulation of facts, but the awakening of character, curiosity, and compassion. Our mission is to guide every child to rise—like the name Aarohan suggests—toward their highest potential while staying rooted in integrity and Indian values.\"",
            "principal-text": "With a dedicated faculty, modern facilities, and a curriculum that balances CBSE excellence with competitive foundations, we invite you to join our community of learners and leaders.",
            "stat-1-label": "Active Scholars",
            "stat-2-label": "Expert Mentors",
            "stat-3-label": "Board Pass Rate",
            "stat-4-label": "Advanced Research Labs",
            "about-title": "Our Identity & Mission",
            "about-subtitle": "Nurturing holistic development in a progressive environment",
            "about-text": "Founded with a vision to redefine progressive schooling, Aarohan International School provides an engaging CBSE curriculum combined with competitive coaching, encouraging students to excel and think critically.",
            "about-val-1-title": "Integrity & Sanskar",
            "about-val-1-desc": "We foster a deep culture of respect, ethical leadership, and social responsibility in every student.",
            "about-val-2-title": "Innovation & Scientific Temper",
            "about-val-2-desc": "Equipping students with modern science kits, coding platforms, and design challenges.",
            "about-val-3-title": "Global Vision, Indian Roots",
            "about-val-3-desc": "Fostering cultural awareness and global competence while staying strongly anchored in our rich heritage.",
            "acad-title": "Academic Framework",
            "acad-desc": "Tailored CBSE curriculum combined with foundation coaching to spark curiosity and competitive excellence.",
            "acad-card-1-title": "Primary Wing",
            "acad-card-1-badge": "Classes I - V",
            "acad-card-1-desc": "Fostering foundational numeracy, language literacy, environmental sciences, and creative arts that trigger curiosity.",
            "acad-card-1-f1": "Experiential Science",
            "acad-card-1-f2": "Art & Music workshops",
            "acad-card-1-f3": "Bilingual proficiency",
            "acad-card-2-title": "Middle Wing",
            "acad-card-2-badge": "Classes VI - VIII",
            "acad-card-2-desc": "Transitioning into independent scientific investigations, analytical math, coding fundamentals, and social sciences.",
            "acad-card-2-f1": "Coding & Robotics",
            "acad-card-2-f2": "Public Speaking & Debates",
            "acad-card-2-f3": "NTSE & Olympiad Prep",
            "acad-card-3-title": "Secondary & Sr. Sec.",
            "acad-card-3-badge": "Classes IX - XII",
            "acad-card-3-desc": "Rigorous board preparation under the CBSE curriculum with integrated IIT-JEE, NEET, and CLAT foundation courses.",
            "acad-card-3-f1": "JEE / NEET / CLAT Prep",
            "acad-card-3-f2": "Special Career Mentoring",
            "acad-card-3-f3": "Practical Lab Research",
            "acad-card-4-title": "STEM & Olympiad",
            "acad-card-4-badge": "Special Program",
            "acad-card-4-desc": "Immersive coaching modules for national/international science Olympiads, hackathons, and electronics design.",
            "acad-card-4-f1": "Olympiad Question banks",
            "acad-card-4-f2": "Circuit prototyping",
            "acad-card-4-f3": "Inter-school hackathons",
            "res-title": "Board Achievements",
            "res-desc": "Celebrating the extraordinary academic standards and perfect CBSE pass rates of Aarohan International School scholars.",
            "res-card-1-class": "Class XII",
            "res-card-1-title": "Senior Secondary Results",
            "res-card-1-board": "Central Board (CBSE AISSCE) Results",
            "res-card-1-s1-label": "School Average",
            "res-card-1-s2-label": "Overall Pass Rate",
            "res-card-1-s3-label": "Scholars > 90%",
            "res-card-1-ach-title": "Class XII Top Achievers",
            "res-card-1-ach1-sub": "Science Stream (Physics, Chemistry, Maths, CS)",
            "res-card-1-ach2-sub": "Commerce Stream (Maths, Accountancy, Economics)",
            "res-card-1-ach3-sub": "Humanities Stream (History, Economics, Pol. Science)",
            "res-card-2-class": "Class X",
            "res-card-2-title": "Secondary School Results",
            "res-card-2-board": "Central Board (CBSE AISSE) Results",
            "res-card-2-s1-label": "School Average",
            "res-card-2-s2-label": "Overall Pass Rate",
            "res-card-2-s3-label": "Scholars > 90%",
            "res-card-2-ach-title": "Class X Top Achievers",
            "res-card-2-ach1-sub": "Science & Mathematics Focus",
            "res-card-2-ach2-sub": "Sanskrit & Science Focus",
            "res-card-2-ach3-sub": "Social Sciences & Robotics Focus",
            "fac-title": "World-Class Campus",
            "fac-desc": "Innovative spaces designed to support research, physical health, and the fine arts.",
            "fac-tab-1-btn": "Tech & Robotics Lab",
            "fac-tab-2-btn": "Sports Complex",
            "fac-tab-3-btn": "Main Campus Hub",
            "fac-pane-1-title": "Tech & Robotics Innovation Center",
            "fac-pane-1-desc": "Our state-of-the-art innovation center is equipped with high-performance workstations, 3D printers, micro-controllers, and laser cutters. Here, students design solutions to real-world problems.",
            "fac-pane-1-f1": "3D Printing & Prototyping Stations",
            "fac-pane-1-f2": "Custom Circuit Assembly Station",
            "fac-pane-1-f3": "AI Model Training Workstations",
            "fac-pane-2-title": "Multi-discipline Athletics Complex",
            "fac-pane-2-desc": "Promoting physical well-being and team camaraderie, the sports complex features indoor courts, professional turf fields, and high-performance gymnastics gear.",
            "fac-pane-2-f1": "Olympic-size indoor training court",
            "fac-pane-2-f2": "Professional outdoor soccer field",
            "fac-pane-2-f3": "Dedicated strength & yoga studios",
            "fac-pane-3-title": "Main Campus & Eco-Common",
            "fac-pane-3-desc": "Our campus is built with modern sustainability principles, incorporating natural lighting, smart energy systems, and ample communal green spaces that encourage dialogue.",
            "fac-pane-3-f1": "Solar-powered modular classrooms",
            "fac-pane-3-f2": "Rooftop botanical laboratory",
            "fac-pane-3-f3": "Open-air student amphitheater",
            "news-title": "News & Announcements",
            "news-desc": "Keep track of the latest happenings, academic alerts, and celebrating key achievements at Aarohan.",
            "news-block-title": "Featured Stories",
            "news-card-1-cat": "Achievements",
            "news-card-1-date": "June 18, 2026",
            "news-card-1-title": "First Prize at National Robotics Olympiad 2026",
            "news-card-1-desc": "Our Middle Wing student inventors designed an autonomous waste-sorting rover that clinched the gold medal in the junior category.",
            "news-card-1-link": "Read Full Story",
            "news-card-2-cat": "Infrastructure",
            "news-card-2-date": "June 10, 2026",
            "news-card-2-title": "Inauguration of Advanced Biotechnology wing",
            "news-card-2-desc": "Aarohan has added a modern molecular biology facility to foster early exposure to genetics, tissue culture, and biochemistry.",
            "news-card-2-link": "Read Full Story",
            "news-card-3-cat": "Campus Life",
            "news-card-3-date": "May 28, 2026",
            "news-card-3-title": "Annual Inter-School Cultural Fest 'Tarang'",
            "news-card-3-desc": "Prepare for an explosive week of creative arts, debate, and music as Aarohan hosts over 25 guest institutions next month.",
            "news-card-3-link": "Read Full Story",
            "notice-board-title": "Notice Board",
            "notice-board-live": "Live",
            "notice-item-1-date": "22 Jun",
            "notice-item-1-tag": "Important",
            "notice-item-1-title": "CBSE Class 10th & 12th Board Registration 2026",
            "notice-item-1-desc": "Forms must be finalized and LOC verification documents submitted to class teachers by June 30th without fail.",
            "notice-item-2-date": "18 Jun",
            "notice-item-2-tag": "PTM",
            "notice-item-2-title": "Parent-Teacher Meeting (PTM) Schedule",
            "notice-item-2-desc": "Interactive feedback session PTM for Classes VI-XII is scheduled on Saturday, June 27th from 8:30 AM to 12:30 PM.",
            "notice-item-3-date": "15 Jun",
            "notice-item-3-tag": "Admissions",
            "notice-item-3-title": "Counseling Slots Open for Session 2026-27",
            "notice-item-3-desc": "Admissions criteria and application guide booklet are available for download. Select counseling timings online.",
            "notice-item-4-date": "08 Jun",
            "notice-item-4-tag": "Coaching",
            "notice-item-4-title": "JEE & NEET Special Crash Courses",
            "notice-item-4-desc": "Secondary wing student diagnostic tests for selection to Special Batch 2027 classes commence on July 5th.",
            "notice-board-btn": "View All Notices",
            "test-title": "Academy Voices",
            "test-desc": "Hear what parents, alumni, and scholars say about their life-changing journey at Aarohan.",
            "test-1-text": "\"Sending our children to Aarohan International was the best decision we've made. The blend of rigorous CBSE maths curriculum with advanced robotics classes matches their interests perfectly.\"",
            "test-1-role": "Parent of Class IX Scholar",
            "test-2-text": "\"The integrated JEE prep track pushed me to develop actual software projects. It gave me the skills and competitive edge that helped me get accepted into IIT Bombay Computer Science.\"",
            "test-2-role": "Class of 2025 Alumni",
            "test-3-text": "\"The teachers here don't just instruct—they mentor. The guidance I received in the biology labs and public speaking classes shaped my career ambitions.\"",
            "test-3-role": "Class XII Student Captain",
            "adm-title": "Admissions Open",
            "adm-subtitle": "Take your first step toward an exceptional future",
            "adm-desc": "We seek students who are eager to learn, innovate, and contribute positively to our community. Our admission process is holistic, looking beyond simple academic grades.",
            "adm-step-1-title": "Submit Inquiry",
            "adm-step-1-desc": "Fill out the online application inquiry form with your academic interest.",
            "adm-step-2-title": "Campus Interaction",
            "adm-step-2-desc": "Schedule an interactive counseling call and visit the campus facilities.",
            "adm-step-3-title": "Enrollment Decisions",
            "adm-step-3-desc": "Admission confirmations are shared within two weeks of parent interactions.",
            "form-title": "Application Inquiry",
            "form-desc": "Provide details below to receive program guides and trigger counselor calls.",
            "form-label-name": "Student Full Name",
            "form-label-email": "Email Address",
            "form-label-grade": "Class Level",
            "form-label-phone": "Phone Number",
            "form-label-interests": "Key Interests & Hobbies",
            "form-btn-submit": "Submit Inquiry",
            "form-opt-primary": "Primary School (Class I-V)",
            "form-opt-middle": "Middle School (Class VI-VIII)",
            "form-opt-high": "Secondary & Sr. Sec (Class IX-XII)",
            "con-title": "Get In Touch",
            "con-desc": "Have queries about CBSE board enrollment, events, or test series? Reach out and we'll reply within 24 hours.",
            "con-loc-title": "Location",
            "con-loc-val": "12, Outer Ring Road, Tech Park, Bellandur, Bengaluru, KA 560103",
            "con-phone-title": "Phone Support",
            "con-email-title": "Registrar Email",
            "con-social-title": "Follow Our Journey",
            "con-form-title": "Send a Message",
            "con-label-name": "Full Name",
            "con-label-email": "Email Address",
            "con-label-message": "Your Message",
            "con-btn-send": "Send Message",
            "foot-brand-desc": "Blending creative thinking with CBSE core science & maths foundation to shape outstanding future leaders.",
            "foot-copyright": "&copy; 2026 Aarohan International School. All rights reserved.",
            "foot-links-title-1": "Quick Access",
            "foot-links-title-2": "Support & Portals",
            "foot-portal-stud": "Student Dashboard",
            "foot-portal-parent": "Parent Portal",
            "foot-portal-staff": "Staff Webmail",
            "foot-careers": "Career Opportunities",
            "foot-privacy": "Privacy Policy",
            "foot-newsletter-title": "Newsletter Subscription",
            "foot-newsletter-desc": "Subscribe to receive event invites and CBSE academic circular summaries.",
            "modal-title": "Aarohan Hub",
            "modal-desc": "Access your assignments, schedules, and grading reports.",
            "modal-label-user": "Student or Parent ID",
            "modal-label-pass": "Password",
            "modal-label-remember": "Remember me",
            "modal-link-forgot": "Forgot password?",
            "modal-btn-submit": "Sign In",
            "modal-footer-text": "New Student? First-time setup credentials are sent via admission email."
        },
        hi: {
            "page-title": "आरोहण इंटरनेशनल स्कूल | सीबीएसई स्कूल बेंगलुरु",
            "nav-home": "मुख्य पृष्ठ",
            "nav-about": "हमारे बारे में",
            "nav-principal": "प्रधानाचार्य",
            "nav-academics": "पाठ्यक्रम",
            "nav-results": "परिणाम",
            "nav-news": "समाचार",
            "nav-facilities": "सुविधाएं",
            "nav-admissions": "प्रवेश",
            "nav-contact": "संपर्क",
            "nav-portal": "पोर्टल",
            "hero-badge": "भारतीय शिक्षा की नई कल्पना",
            "hero-title": "सशक्त <span class=\"gradient-text\">मस्तिष्क</span><br>उज्ज्वल <span class=\"gradient-text-alt\">भविष्य</span>",
            "hero-desc": "आरोहण इंटरनेशनल स्कूल सीबीएसई (CBSE) अकादमिक उत्कृष्टता को आईआईटी-जेईई और नीट (IIT-JEE/NEET) फाउंडेशन और आधुनिक स्टेम (STEM) प्रशिक्षण के साथ जोड़ता है।",
            "hero-cta-enroll": "अभी प्रवेश लें",
            "hero-cta-explore": "परिसर देखें",
            "hero-badge-1-title": "शीर्ष सीबीएसई रैंक",
            "hero-badge-1-desc": "अकादमिक उत्कृष्टता",
            "hero-badge-2-title": "जेईई/नीट तैयारी",
            "hero-badge-2-desc": "एकीकृत कोचिंग",
            "principal-title": "प्रधानाचार्य का संदेश",
            "principal-name": "डॉ. मीरा कृष्णन",
            "principal-role": "प्रधानाचार्य, आरोहण इंटरनेशनल स्कूल",
            "principal-quote": "\"आरोहण में, हम मानते हैं कि शिक्षा केवल तथ्यों का संचय नहीं है, बल्कि चरित्र, जिज्ञासा और करुणा का जागरण है। हमारा उद्देश्य प्रत्येक बच्चे को—जैसे नाम आरोहण का अर्थ है—अपनी सर्वोच्च क्षमता की ओर उठने का मार्गदर्शन करना है, साथ ही सत्यनिष्ठा और भारतीय मूल्यों में जड़ें जमाए रखना।\"",
            "principal-text": "समर्पित शिक्षकों, आधुनिक सुविधाओं और सीबीएसई उत्कृष्टता को प्रतिस्पर्धी आधार के साथ संतुलित करने वाले पाठ्यक्रम के साथ, हम आपको शिक्षार्थियों और नेताओं के हमारे समुदाय में शामिल होने के लिए आमंत्रित करते हैं।",
            "stat-1-label": "सक्रिय छात्र",
            "stat-2-label": "विशेषज्ञ शिक्षक",
            "stat-3-label": "बोर्ड उत्तीर्ण दर",
            "stat-4-label": "उन्नत अनुसंधान लैब्स",
            "about-title": "हमारी पहचान और उद्देश्य",
            "about-subtitle": "प्रगतिशील वातावरण में समग्र विकास को बढ़ावा देना",
            "about-text": "प्रगतिशील शिक्षा को पुनर्परिभाषित करने के दृष्टिकोण से स्थापित, आरोहण इंटरनेशनल स्कूल विश्लेषणात्मक कोचिंग के साथ एक आकर्षक सीबीएसई पाठ्यक्रम प्रदान करता है।",
            "about-val-1-title": "सत्यनिष्ठा और संस्कार",
            "about-val-1-desc": "हम प्रत्येक छात्र में सम्मान, नैतिक नेतृत्व और सामाजिक जिम्मेदारी की गहरी संस्कृति विकसित करते हैं।",
            "about-val-2-title": "नवाचार और वैज्ञानिक दृष्टिकोण",
            "about-val-2-desc": "छात्रों को आधुनिक विज्ञान किट, कोडिंग प्लेटफॉर्म और डिजाइन चुनौतियों से लैस करना।",
            "about-val-3-title": "वैश्विक दृष्टि, भारतीय जड़ें",
            "about-val-3-desc": "हमारी समृद्ध विरासत में दृढ़ता से बने रहते हुए सांस्कृतिक जागरूकता और वैश्विक क्षमता को बढ़ावा देना।",
            "acad-title": "अकादमिक संरचना",
            "acad-desc": "जिज्ञासा और प्रतिस्पर्धी उत्कृष्टता को जगाने के लिए बुनियादी कोचिंग के साथ तैयार किया गया सीबीएसई पाठ्यक्रम।",
            "acad-card-1-title": "प्राथमिक विंग",
            "acad-card-1-badge": "कक्षा I - V",
            "acad-card-1-desc": "आधारभूत संख्यात्मकता, भाषा साक्षरता, पर्यावरण विज्ञान और रचनात्मक कलाओं को बढ़ावा देना जो जिज्ञासा जगाते हैं।",
            "acad-card-1-f1": "प्रायोगिक विज्ञान",
            "acad-card-1-f2": "कला और संगीत कार्यशालाएं",
            "acad-card-1-f3": "द्विभाषी दक्षता",
            "acad-card-2-title": "मध्यम विंग",
            "acad-card-2-badge": "कक्षा VI - VIII",
            "acad-card-2-desc": "स्वतंत्र वैज्ञानिक जांच, विश्लेषणात्मक गणित, कोडिंग मूल बातें और सामाजिक विज्ञान में संक्रमण।",
            "acad-card-2-f1": "कोडिंग और रोबोटिक्स",
            "acad-card-2-f2": "सार्वजनिक भाषण और वाद-विवाद",
            "acad-card-2-f3": "एनटीएसई और ओलंपियाड तैयारी",
            "acad-card-3-title": "माध्यमिक और उच्चतर माध्य.",
            "acad-card-3-badge": "कक्षा IX - XII",
            "acad-card-3-desc": "एकीकृत आईआईटी-जेईई, नीट और क्लैट फाउंडेशन पाठ्यक्रमों के साथ सीबीएसई पाठ्यक्रम के तहत कठोर बोर्ड परीक्षा की तैयारी।",
            "acad-card-3-f1": "जेईई / नीट / क्लैट तैयारी",
            "acad-card-3-f2": "विशेष करियर परामर्श",
            "acad-card-3-f3": "व्यावहारिक प्रयोगशाला अनुसंधान",
            "acad-card-4-title": "स्टेम और ओलंपियाड",
            "acad-card-4-badge": "विशेष कार्यक्रम",
            "acad-card-4-desc": "राष्ट्रीय/अंतर्राष्ट्रीय विज्ञान ओलंपियाड, हैकथॉन और इलेक्ट्रॉनिक्स डिजाइन के लिए गहन कोचिंग मॉड्यूल।",
            "acad-card-4-f1": "ओलंपियाड प्रश्न बैंक",
            "acad-card-4-f2": "सर्किट प्रोटोटाइपिंग",
            "acad-card-4-f3": "स्कूलों के बीच हैकथॉन",
            "res-title": "बोर्ड की उपलब्धियां",
            "res-desc": "आरोहण इंटरनेशनल स्कूल के छात्रों के असाधारण शैक्षणिक मानकों और शत-प्रतिशत सीबीएसई उत्तीर्ण दर का उत्सव।",
            "res-card-1-class": "कक्षा XII",
            "res-card-1-title": "उच्च माध्यमिक परिणाम",
            "res-card-1-board": "केंद्रीय बोर्ड (CBSE AISSCE) परिणाम",
            "res-card-1-s1-label": "विद्यालय औसत",
            "res-card-1-s2-label": "कुल उत्तीर्ण दर",
            "res-card-1-s3-label": "छात्र > 90%",
            "res-card-1-ach-title": "कक्षा XII के सर्वोच्च प्राप्तकर्ता",
            "res-card-1-ach1-sub": "विज्ञान वर्ग (भौतिकी, रसायन विज्ञान, गणित, कंप्यूटर)",
            "res-card-1-ach2-sub": "वाणिज्य वर्ग (गणित, लेखाशास्त्र, अर्थशास्त्र)",
            "res-card-1-ach3-sub": "कला वर्ग (इतिहास, अर्थशास्त्र, राजनीति विज्ञान)",
            "res-card-2-class": "कक्षा X",
            "res-card-2-title": "माध्यमिक विद्यालय परिणाम",
            "res-card-2-board": "केंद्रीय बोर्ड (CBSE AISSE) परिणाम",
            "res-card-2-s1-label": "विद्यालय औसत",
            "res-card-2-s2-label": "कुल उत्तीर्ण दर",
            "res-card-2-s3-label": "छात्र > 90%",
            "res-card-2-ach-title": "कक्षा X के सर्वोच्च प्राप्तकर्ता",
            "res-card-2-ach1-sub": "विज्ञान और गणित विशेष ध्यान",
            "res-card-2-ach2-sub": "संस्कृत और विज्ञान विशेष ध्यान",
            "res-card-2-ach3-sub": "सामाजिक विज्ञान और रोबोटिक्स ध्यान",
            "fac-title": "विश्व स्तरीय परिसर",
            "fac-desc": "अनुसंधान, शारीरिक स्वास्थ्य और ललित कलाओं का समर्थन करने के लिए डिज़ाइन किए गए अभिनव स्थान।",
            "fac-tab-1-btn": "तकनीक और रोबोटिक्स लैब",
            "fac-tab-2-btn": "खेल परिसर",
            "fac-tab-3-btn": "मुख्य परिसर हब",
            "fac-pane-1-title": "तकनीक और रोबोटिक्स नवाचार केंद्र",
            "fac-pane-1-desc": "हमारा अत्याधुनिक नवाचार केंद्र उच्च प्रदर्शन वाले कंप्यूटरों, 3डी प्रिंटर, माइक्रो-कंट्रोलर और लेजर कटर से लैस है। यहाँ छात्र वास्तविक समस्याओं के समाधान तैयार करते हैं।",
            "fac-pane-1-f1": "3डी प्रिंटिंग और प्रोटोटाइपिंग स्टेशन",
            "fac-pane-1-f2": "कस्टम सर्किट असेंबली स्टेशन",
            "fac-pane-1-f3": "एआई मॉडल प्रशिक्षण वर्कस्टेशन",
            "fac-pane-2-title": "बहु-अनुशासनात्मक खेल परिसर",
            "fac-pane-2-desc": "शारीरिक कल्याण और टीम भावना को बढ़ावा देने वाले इस परिसर में इनडोर कोर्ट, पेशेवर मैदान और जिमनास्टिक उपकरण हैं।",
            "fac-pane-2-f1": "ओलंपिक आकार का इनडोर कोर्ट",
            "fac-pane-2-f2": "पेशेवर आउटडोर फुटबॉल मैदान",
            "fac-pane-2-f3": "समर्पित योग और शक्ति स्टूडियो",
            "fac-pane-3-title": "मुख्य परिसर और इको-कॉमन",
            "fac-pane-3-desc": "हमारा परिसर प्राकृतिक प्रकाश, स्मार्ट ऊर्जा प्रणालियों और पर्याप्त हरे-भरे स्थानों को शामिल करते हुए आधुनिक स्थिरता सिद्धांतों पर बनाया गया है।",
            "fac-pane-3-f1": "सौर ऊर्जा संचालित कक्षाएं",
            "fac-pane-3-f2": "छत पर स्थापित वनस्पति विज्ञान लैब",
            "fac-pane-3-f3": "खुले आसमान के नीचे छात्र रंगमंच",
            "news-title": "समाचार और घोषणाएं",
            "news-desc": "आरोहण की नवीनतम गतिविधियों, शैक्षणिक अलर्ट और प्रमुख उपलब्धियों की जानकारी रखें।",
            "news-block-title": "प्रमुख समाचार",
            "news-card-1-cat": "उपलब्धियां",
            "news-card-1-date": "18 जून, 2026",
            "news-card-1-title": "राष्ट्रीय रोबोटिक्स ओलंपियाड 2026 में प्रथम पुरस्कार",
            "news-card-1-desc": "हमारे मध्यम विंग के छात्र अन्वेषकों ने एक स्वायत्त कचरा-छँटाई रोवर तैयार किया जिसने जूनियर श्रेणी में स्वर्ण पदक जीता।",
            "news-card-1-link": "पूरी कहानी पढ़ें",
            "news-card-2-cat": "बुनियादी ढांचा",
            "news-card-2-date": "10 जून, 2026",
            "news-card-2-title": "उन्नत जैव प्रौद्योगिकी विंग का उद्घाटन",
            "news-card-2-desc": "आरोहण ने आनुवंशिकी, ऊतक संवर्धन और जैव रसायन के शुरुआती प्रदर्शन को बढ़ावा देने के लिए एक आधुनिक आणविक जीव विज्ञान प्रयोगशाला जोड़ी है।",
            "news-card-2-link": "पूरी कहानी पढ़ें",
            "news-card-3-cat": "परिसर जीवन",
            "news-card-3-date": "28 मई, 2026",
            "news-card-3-title": "वार्षिक अंतर-विद्यालय सांस्कृतिक उत्सव 'तरंग'",
            "news-card-3-desc": "अगले महीने रचनात्मक कला, वाद-विवाद और संगीत के एक शानदार सप्ताह के लिए तैयार रहें क्योंकि आरोहण 25 से अधिक अतिथि संस्थानों की मेजबानी करेगा।",
            "news-card-3-link": "पूरी कहानी पढ़ें",
            "notice-board-title": "सूचना पट्ट",
            "notice-board-live": "सजीव",
            "notice-item-1-date": "22 जून",
            "notice-item-1-tag": "महत्वपूर्ण",
            "notice-item-1-title": "सीबीएसई कक्षा 10वीं और 12वीं बोर्ड पंजीकरण 2026",
            "notice-item-1-desc": "पंजीकरण फॉर्म को अंतिम रूप दिया जाना चाहिए और एलओसी सत्यापन दस्तावेज 30 जून तक कक्षा अध्यापकों को जमा किए जाने चाहिए।",
            "notice-item-2-date": "18 जून",
            "notice-item-2-tag": "पीटीएम",
            "notice-item-2-title": "अभिभावक-शिक्षक बैठक (PTM) अनुसूची",
            "notice-item-2-desc": "कक्षा VI-XII के लिए इंटरैक्टिव फीडबैक सत्र PTM शनिवार, 27 जून को सुबह 8:30 से दोपहर 12:30 बजे तक निर्धारित है।",
            "notice-item-3-date": "15 जून",
            "notice-item-3-tag": "प्रवेश",
            "notice-item-3-title": "सत्र 2026-27 के लिए प्रवेश परामर्श शुरू",
            "notice-item-3-desc": "प्रवेश मानदंड और आवेदन गाइड पुस्तिका डाउनलोड के लिए उपलब्ध है। ऑनलाइन परामर्श का समय चुनें।",
            "notice-item-4-date": "08 जून",
            "notice-item-4-tag": "कोचिंग",
            "notice-item-4-title": "जेईई और नीट विशेष क्रैश कोर्स",
            "notice-item-4-desc": "स्पेशल बैच 2027 कक्षाओं में चयन के लिए छात्रों के नैदानिक परीक्षण 5 जुलाई से शुरू होंगे।",
            "notice-board-btn": "सभी सूचनाएं देखें",
            "test-title": "संस्थान की आवाज",
            "test-desc": "सुनें कि माता-पिता, पूर्व छात्र और छात्र आरोहण में अपनी जीवन बदलने वाली यात्रा के बारे में क्या कहते हैं।",
            "test-1-text": "\"अपने बच्चों को आरोहण इंटरनेशनल में भेजना हमारा सबसे अच्छा निर्णय था। उन्नत रोबोटिक्स कक्षाओं के साथ कठोर सीबीएसई गणित पाठ्यक्रम का मिश्रण उनकी रुचियों से बिल्कुल मेल खाता है।\"",
            "test-1-role": "कक्षा नौवीं के छात्र के अभिभावक",
            "test-2-text": "\"एकीकृत जेईई तैयारी ट्रैक ने मुझे वास्तविक सॉफ्टवेयर प्रोजेक्ट विकसित करने के लिए प्रेरित किया। इसने मुझे कौशल और प्रतिस्पर्धी बढ़त दी जिससे मुझे आईआईटी बॉम्बे कंप्यूटर साइंस में प्रवेश मिला।\"",
            "test-2-role": "2025 बैच की पूर्व छात्रा",
            "test-3-text": "\"यहाँ के शिक्षक केवल निर्देश नहीं देते—वे मार्गदर्शन करते हैं। जीव विज्ञान प्रयोगशालाओं और सार्वजनिक भाषण कक्षाओं में मुझे मिले मार्गदर्शन ने मेरी करियर महत्वाकांक्षाओं को आकार दिया।\"",
            "test-3-role": "कक्षा XII छात्र कैप्टन",
            "adm-title": "प्रवेश खुले हैं",
            "adm-subtitle": "एक असाधारण भविष्य की ओर अपना पहला कदम उठाएं",
            "adm-desc": "हम उन छात्रों की तलाश करते हैं जो सीखने, नवाचार करने और हमारे समुदाय में सकारात्मक योगदान देने के लिए उत्सुक हैं। हमारी प्रवेश प्रक्रिया समग्र है।",
            "adm-step-1-title": "पूछताछ जमा करें",
            "adm-step-1-desc": "अपनी शैक्षणिक रुचि के साथ ऑनलाइन आवेदन पूछताछ फॉर्म भरें।",
            "adm-step-2-title": "परिसर में बातचीत",
            "adm-step-2-desc": "एक व्यक्तिगत परामर्श कॉल शेड्यूल करें और हमारे परिसर की सुविधाओं का दौरा करें।",
            "adm-step-3-title": "प्रवेश के निर्णय",
            "adm-step-3-desc": "अभिभावकों से बातचीत के दो सप्ताह के भीतर प्रवेश की पुष्टि साझा की जाती है।",
            "form-title": "प्रवेश पूछताछ",
            "form-desc": "कार्यक्रम गाइड प्राप्त करने और परामर्शदाता कॉल शुरू करने के लिए नीचे विवरण प्रदान करें।",
            "form-label-name": "छात्र का पूरा नाम",
            "form-label-email": "ईमेल पता",
            "form-label-grade": "कक्षा स्तर",
            "form-label-phone": "फ़ोन नंबर",
            "form-label-interests": "मुख्य रुचियां और शौक",
            "form-btn-submit": "पूछताछ भेजें",
            "form-opt-primary": "प्राथमिक विद्यालय (कक्षा I-V)",
            "form-opt-middle": "मध्यम विद्यालय (कक्षा VI-VIII)",
            "form-opt-high": "माध्यमिक और उच्चतर माध्य. (कक्षा IX-XII)",
            "con-title": "संपर्क करें",
            "con-desc": "सीबीएसई बोर्ड नामांकन, घटनाओं, या टेस्ट सीरीज के बारे में प्रश्न हैं? संपर्क करें और हम 24 घंटे के भीतर जवाब देंगे।",
            "con-loc-title": "पता",
            "con-loc-val": "12, आउटर रिंग रोड, टेक पार्क, बेलंदूर, बेंगलुरु, कर्नाटक 560103",
            "con-phone-title": "फ़ोन सहायता",
            "con-email-title": "रजिस्ट्रार ईमेल",
            "con-social-title": "हमारी यात्रा का अनुसरण करें",
            "con-form-title": "संदेश भेजें",
            "con-label-name": "पूरा नाम",
            "con-label-email": "ईमेल पता",
            "con-label-message": "आपका संदेश",
            "con-btn-send": "संदेश भेजें",
            "foot-brand-desc": "भविष्य के उत्कृष्ट नेताओं को आकार देने के लिए सीबीएसई मुख्य विज्ञान और गणितीय आधार के साथ रचनात्मक सोच का सम्मिश्रण।",
            "foot-copyright": "&copy; 2026 आरोहण इंटरनेशनल स्कूल। सर्वाधिकार सुरक्षित।",
            "foot-links-title-1": "त्वरित पहुँच",
            "foot-links-title-2": "सहायता और पोर्टल",
            "foot-portal-stud": "छात्र डैशबोर्ड",
            "foot-portal-parent": "अभिभावक पोर्टल",
            "foot-portal-staff": "कर्मचारी वेबमेल",
            "foot-careers": "करियर के अवसर",
            "foot-privacy": "गोपनीयता नीति",
            "foot-newsletter-title": "न्यूज़लेटर सदस्यता",
            "foot-newsletter-desc": "घटनाओं के निमंत्रण और सीबीएसई शैक्षणिक परिपत्रों के सारांश प्राप्त करने के लिए सदस्यता लें।",
            "modal-title": "आरोहण हब",
            "modal-desc": "अपने असाइनमेंट, शेड्यूल और ग्रेडिंग रिपोर्ट तक पहुँचें।",
            "modal-label-user": "छात्र या अभिभावक आईडी",
            "modal-label-pass": "पासवर्ड",
            "modal-label-remember": "मुझे याद रखें",
            "modal-link-forgot": "पासवर्ड भूल गए?",
            "modal-btn-submit": "साइन इन करें",
            "modal-footer-text": "नए छात्र? पहली बार सेटअप क्रेडेंशियल प्रवेश ईमेल के माध्यम से भेजे जाते हैं।"
        }
    };

    let currentLang = localStorage.getItem('schoolLang') || 'en';

    function applyTranslations() {
        const transElements = document.querySelectorAll('[data-translate]');
        
        transElements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[currentLang] && translations[currentLang][key]) {
                // Apply visual transition effect
                el.classList.add('fade-lang');
                
                // Swap text or HTML depending on whether it has child tags
                if (key.includes('title') && (key.includes('hero') || key.includes('about') || key.includes('news') || key.includes('res') || key.includes('fac') || key.includes('test'))) {
                    el.innerHTML = translations[currentLang][key];
                } else {
                    el.innerText = translations[currentLang][key];
                }

                // Remove class after animation finishes
                setTimeout(() => {
                    el.classList.remove('fade-lang');
                }, 450);
            }
        });

        // 1.1 Update HTML Lang attribute for accessibility
        document.documentElement.lang = currentLang;

        // 1.2 Update Document title separately
        document.title = translations[currentLang]["page-title"];

        // 1.3 Update switcher label text (toggles EN and HI based on active selection)
        const langText = document.getElementById('langText');
        if (langText) {
            langText.innerText = currentLang === 'en' ? 'हिंदी' : 'English';
        }
        
        const mobileLangSwitch = document.getElementById('mobileLangSwitch');
        if (mobileLangSwitch) {
            mobileLangSwitch.innerHTML = `<i class="fa-solid fa-language"></i> ${currentLang === 'en' ? 'हिंदी' : 'English'}`;
        }

        // 1.4 Translate input placeholders dynamically
        const newsletterInput = document.getElementById('newsletterEmailInput');
        if (newsletterInput) {
            newsletterInput.placeholder = currentLang === 'en' ? 'Your email address' : 'आपका ईमेल पता';
        }
    }

    // Initialize translations on load
    applyTranslations();

    // Language switcher event listeners
    const langSwitchBtn = document.getElementById('langSwitch');
    const mobileLangSwitchBtn = document.getElementById('mobileLangSwitch');

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'hi' : 'en';
        localStorage.setItem('schoolLang', currentLang);
        applyTranslations();

        // Show feedback toast on language switch
        const successTitle = currentLang === 'en' ? 'Language Changed' : 'भाषा बदली गई';
        const successMsg = currentLang === 'en' ? 'Website content has been translated to English.' : 'वेबसाइट की सामग्री को हिंदी में अनुवादित कर दिया गया है।';
        showToast(successTitle, successMsg, true);
    }

    if (langSwitchBtn) langSwitchBtn.addEventListener('click', toggleLanguage);
    if (mobileLangSwitchBtn) mobileLangSwitchBtn.addEventListener('click', toggleLanguage);


    // 2. Sticky Navigation & Active Link Tracking
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Sticky nav transition
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link highlight
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset navbar height
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }

    function closeMobileMenu() {
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    }

    if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
    if (menuClose) menuClose.addEventListener('click', closeMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // 4. Stats Section Counter Animation (Intersection Observer)
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    function startCounters() {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const increment = target / 80; // control animation speed
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    if (target === 100) {
                        stat.innerText = Math.ceil(current) + '%';
                    } else {
                        stat.innerText = Math.ceil(current) + '+';
                    }
                    setTimeout(updateCounter, 20);
                } else {
                    stat.innerText = target + (target === 100 ? '%' : '+');
                }
            };
            updateCounter();
        });
    }

    if (statsSection && statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    startCounters();
                    countersStarted = true;
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);
    }

    // 5. Campus Facilities Tab Switcher
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');

            // Deactivate all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });

            // Deactivate all panes
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
            });

            // Activate clicked button & corresponding pane
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            
            const targetPane = document.getElementById(targetTabId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // 6. Toast Notification System
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastBody = document.getElementById('toastBody');
    const toastClose = document.getElementById('toastClose');
    let toastTimeout = null;

    function showToast(title, message, isSuccess = true) {
        // Clear active timer
        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }

        toastTitle.innerText = title;
        toastBody.innerText = message;

        // Visual distinction based on success or error state
        if (isSuccess) {
            toast.style.borderLeftColor = 'var(--clr-success)';
            toast.querySelector('.toast-icon').className = 'fa-solid fa-circle-check toast-icon';
            toast.querySelector('.toast-icon').style.color = 'var(--clr-success)';
        } else {
            toast.style.borderLeftColor = 'var(--clr-error)';
            toast.querySelector('.toast-icon').className = 'fa-solid fa-triangle-exclamation toast-icon';
            toast.querySelector('.toast-icon').style.color = 'var(--clr-error)';
        }

        toast.classList.add('active');

        // Autohide toast
        toastTimeout = setTimeout(() => {
            hideToast();
        }, 5000);
    }

    function hideToast() {
        toast.classList.remove('active');
    }

    if (toastClose) {
        toastClose.addEventListener('click', hideToast);
    }

    // 7. Interactive Portal Modal Dialog
    const portalBtn = document.getElementById('portalBtn');
    const mobilePortalBtn = document.getElementById('mobilePortalBtn');
    const footerPortalLink = document.getElementById('footerPortalLink');
    const footerParentLink = document.getElementById('footerParentLink');
    const footerStaffLink = document.getElementById('footerStaffLink');
    const portalModal = document.getElementById('portalModal');
    const modalClose = document.getElementById('modalClose');

    function openModal(e) {
        if (e) e.preventDefault();
        portalModal.classList.add('active');
        portalModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeMobileMenu();
    }

    function closeModal() {
        portalModal.classList.remove('active');
        portalModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (portalBtn) portalBtn.addEventListener('click', openModal);
    if (mobilePortalBtn) mobilePortalBtn.addEventListener('click', openModal);
    if (footerPortalLink) footerPortalLink.addEventListener('click', openModal);
    if (footerParentLink) footerParentLink.addEventListener('click', openModal);
    if (footerStaffLink) footerStaffLink.addEventListener('click', openModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);

    // Close modal by clicking background overlay
    if (portalModal) {
        portalModal.addEventListener('click', (e) => {
            if (e.target === portalModal) {
                closeModal();
            }
        });
    }

    // Close modal on Escape press
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && portalModal.classList.contains('active')) {
            closeModal();
        }
    });

    // 8. Form Handlers & Feedback Mechanics

    // Helper: Simulate submit load state
    function handleFormSubmit(formElement, successTitleEN, successMsgEN, successTitleHI, successMsgHI, callback = null) {
        const submitBtn = formElement.querySelector('button[type="submit"]');
        const originalBtnContent = submitBtn.innerHTML;

        // Set loading state
        submitBtn.disabled = true;
        const processingText = currentLang === 'en' ? 'Processing...' : 'प्रक्रिया जारी है...';
        submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> ${processingText}`;

        setTimeout(() => {
            // Restore button & reset form
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnContent;
            formElement.reset();

            // Display Toast feedback based on current language
            const title = currentLang === 'en' ? successTitleEN : successTitleHI;
            const msg = currentLang === 'en' ? successMsgEN : successMsgHI;
            showToast(title, msg, true);

            if (callback) callback();
        }, 1500); // 1.5 seconds simulate server lag
    }

    // Admissions Form Submit
    const admissionsForm = document.getElementById('admissionsForm');
    if (admissionsForm) {
        admissionsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const studentName = document.getElementById('studentName').value;
            handleFormSubmit(
                admissionsForm,
                "Inquiry Received!",
                `Thank you. A prospectus for ${studentName} has been compiled and emailed to you.`,
                "पूछताछ प्राप्त हुई!",
                `धन्यवाद। ${studentName} के लिए विवरण पुस्तिका ईमेल पर भेज दी गई है।`
            );
        });
    }

    // Contact Message Form Submit
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            handleFormSubmit(
                contactForm,
                "Message Sent!",
                `Hello ${name}, our admissions registrar has received your query and will respond shortly.`,
                "संदेश भेजा गया!",
                `नमस्ते ${name}, हमारे प्रवेश रजिस्ट्रार को आपका प्रश्न प्राप्त हो गया है और वे जल्द ही जवाब देंगे।`
            );
        });
    }

    // Newsletter Subscription Form Submit
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            const submitBtn = newsletterForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`;
                emailInput.value = '';
                
                const title = currentLang === 'en' ? 'Subscribed!' : 'सदस्यता ली गई!';
                const msg = currentLang === 'en' ? `${email} has been added to our newsletter list.` : `${email} को हमारी न्यूज़लेटर सूची में जोड़ दिया गया है।`;
                showToast(title, msg, true);
            }, 1000);
        });
    }

    // Student Portal simulated login
    const portalLoginForm = document.getElementById('portalLoginForm');
    if (portalLoginForm) {
        portalLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userId = document.getElementById('portalUser').value;
            handleFormSubmit(
                portalLoginForm,
                "Login Successful",
                `Redirecting scholar ${userId} to Aarohan Learning Management Dashboard...`,
                "लॉगिन सफल",
                `छात्र ${userId} को आरोहण लर्निंग मैनेजमेंट डैशबोर्ड पर रीडायरेक्ट किया जा रहा है...`,
                () => {
                    closeModal();
                    // Update main portal buttons visually to show logged-in state
                    const portalButton = document.getElementById('portalBtn');
                    if (portalButton) {
                        const dashboardText = currentLang === 'en' ? 'Dashboard' : 'डैशबोर्ड';
                        portalButton.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${dashboardText}`;
                        portalButton.style.border = "1px solid var(--clr-success)";
                        portalButton.style.boxShadow = "0 0 10px rgba(16, 185, 129, 0.3)";
                    }
                }
            );
        });
    }

});

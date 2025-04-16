import React, { useState, useEffect } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(5);
  const [isMarathi, setIsMarathi] = useState(false);

  const content = {
    en: {
      headerTitle: "Healthy Smiles\n Happy Lives!",
      headerDescription: "Providing expert dental care with compassion and precision. You can book your appointment anytime by calling us! For a healthier, brighter smile, contact us today!",
      aboutUs: "About Us",
      callUs: "Call Us",
      treatmentsTitle: "Types of Treatments We Offer",
      exploreTitle: "Explore Our Treatments",
      chatDescription: "If you have any doubts, feel free to chat with us on WhatsApp.",
      chatButton: "Chat With us",
      showMore: "Show More",
      contactTitle: "Contact Us",
      location: "Location: Vadgaon/Ambegaon(BK) Pune, Maharashtra, India",
      whoWeAre: "Who we are?",
      whoWeAreDesc: "<strong>I am Dr. Sachin Gandhi</strong>\n\nWe provide expert dental care with a focus on comfort and precision. From routine check-ups to advanced treatments, your smile is our priority!",
      fasterPrecision: "Get your treatment done Faster with Precision.",
      callAppointment: "📞 Call us anytime to book your appointment!",
      close: "Close",
      contactInfo: "Contact Information",
      anotherNo: "Dr. Sachin :",
      drSachin: "Dr. Sachin :",
      location2: "📍 Location: Natepute Tal-Malshiras Solapur, Maharashtra, India 413109",
      treatments: {
        dentalBridges: {
          title: "Dental Bridges",
          description: "A fixed solution for replacing missing teeth by anchoring to adjacent natural teeth."
        },
        dentalFillings: {
          title: "Dental Fillings",
          description: "Treatment of cavities with tooth-colored composite materials for a natural appearance."
        },
        rootCanal: {
          title: "Root Canal",
          description: "A treatment to repair and save a badly damaged or infected tooth instead of removing it."
        },
        dentalCrowns: {
          title: "Dental Crowns",
          description: "Custom-made caps that restore the shape, size, and strength of damaged teeth."
        },
        braces: {
          title: "Braces & Invisalign",
          description: "Orthodontic treatment to straighten teeth and correct bite issues."
        },
        dentalCheckup: {
          title: "Dental Checkup",
          description: "Comprehensive dental examination and cleaning to maintain oral health."
        },
        wisdomTooth: {
          title: "Wisdom Tooth Extraction",
          description: "Safe and professional removal of impacted or problematic wisdom teeth."
        },
        teethWhitening: {
          title: "Teeth Whitening",
          description: "Professional teeth whitening treatment to brighten your smile and remove stains."
        },
        dentalImplants: {
          title: "Dental Implants",
          description: "Permanent solution for missing teeth that look, feel, and function like natural teeth."
        },
        gumTreatment: {
          title: "Gum Treatment",
          description: "Specialized care for gum diseases including scaling and root planing."
        },
        pediatricDentistry: {
          title: "Pediatric Dentistry",
          description: "Specialized dental care for children, including preventive treatments and education."
        }
      },
      projectTypes: [
        "🦷 General Dentistry",
        "😬 Orthodontics",
        "🪥 Restorative Dentistry",
        "😷 Periodontal (Gum) Treatments",
        "👶 Pediatric Dentistry",
        "😖 Emergency Dental Care",
        "🛠️ Surgical Dental Treatments",
        "Wisdom Tooth Surgery"
      ]
    },
    mr: {
      headerTitle: "निरोगी हसरे\n आनंदी जीवन!",
      headerDescription: "करुणा आणि अचूकतेसह तज्ञ दंतवैद्यकीय सेवा पुरवत आहोत. तुम्ही आम्हाला कधीही कॉल करून तुमची अपॉइंटमेंट बुक करू शकता! निरोगी, चमकदार हसण्यासाठी, आजच आमच्याशी संपर्क साधा!",
      aboutUs: "आमच्याबद्दल",
      callUs: "कॉल करा",
      treatmentsTitle: "आम्ही देत असलेल्या उपचारांचे प्रकार",
      exploreTitle: "आमचे उपचार एक्सप्लोर करा",
      chatDescription: "तुम्हाला काही शंका असल्यास, व्हॉट्सअपवर आमच्याशी चॅट करण्यास मोकळ्या मनाने.",
      chatButton: "आमच्याशी चॅट करा",
      showMore: "अधिक दाखवा",
      contactTitle: "आमच्याशी संपर्क साधा",
      location: "स्थान: वडगाव/अंबेगाव(बीके) पुणे, महाराष्ट्र, भारत",
      whoWeAre: "आम्ही कोण?",
      whoWeAreDesc: "<strong>मी डॉ. सचिन गांधी आहे</strong>\n\nआम्ही आराम आणि अचूकतेवर लक्ष केंद्रित करून तज्ञ दंतवैद्यकीय सेवा पुरवतो. नियमित तपासणीपासून प्रगत उपचारांपर्यंत, तुमचे हसणे आमचे प्राधान्य आहे!",
      fasterPrecision: "वेगवान आणि अचूकतेसह तुमचा उपचार करा.",
      callAppointment: "📞 तुमची अपॉइंटमेंट बुक करण्यासाठी आम्हाला कधीही कॉल करा!",
      close: "बंद करा",
      contactInfo: "संपर्क माहिती",
      anotherNo: "डॉ. सचिन :",
      drSachin: "डॉ.सचिन :",
      location2: "📍 स्थान: नातेपुते ता-माळशिरस सोलापूर, महाराष्ट्र, भारत 413109",
      treatments: {
        dentalBridges: {
          title: "डेंटल ब्रिजेस",
          description: "जवळच्या नैसर्गिक दातांना अँकर करून गहाळ दात बदलण्याचे निश्चित उपाय."
        },
        dentalFillings: {
          title: "डेंटल फिलिंग्स",
          description: "नैसर्गिक दिसण्यासाठी दात-रंगाच्या कंपोझिट सामग्रीसह कॅव्हिटीचा उपचार."
        },
        rootCanal: {
          title: "रूट कॅनाल",
          description: "रूट कॅनाल हा खराब झालेल्या किंवा संसर्गित दाताला काढण्याऐवजी दुरुस्त करण्याचा उपचार आहे."
        },
        dentalCrowns: {
          title: "डेंटल क्राउन्स",
          description: "खराब झालेल्या दातांचा आकार, आकार आणि सामर्थ्य पुनर्संचयित करणारे सानुकूल बनविलेले कॅप्स."
        },
        braces: {
          title: "ब्रेसेस आणि इनव्हिसलाइन",
          description: "दात सरळ करण्यासाठी आणि चावण्याच्या समस्या दुरुस्त करण्यासाठी ऑर्थोडॉन्टिक उपचार."
        },
        dentalCheckup: {
          title: "डेंटल चेकअप",
          description: "मौखिक आरोग्य राखण्यासाठी व्यापक दंत परीक्षा आणि सफाई."
        },
        wisdomTooth: {
          title: "अक्कलदाढ काढणे",
          description: "अडकलेल्या किंवा समस्याग्रस्त ज्ञानदातांचे सुरक्षित आणि व्यावसायिक काढणे."
        },
        teethWhitening: {
          title: "टीथ व्हाइटनिंग",
          description: "तुमचे हसणे उजळ करण्यासाठी आणि डाग काढण्यासाठी व्यावसायिक दात पांढरे करण्याचा उपचार."
        },
        dentalImplants: {
          title: "डेंटल इम्प्लांट्स",
          description: "गहाळ दातांसाठी कायमस्वरूपी उपाय जे नैसर्गिक दातांसारखे दिसतात, वाटतात आणि कार्य करतात."
        },
        gumTreatment: {
          title: "हिरड्यांचा उपचार",
          description: "स्केलिंग आणि रूट प्लॅनिंगसह हिरड्यांच्या रोगांसाठी विशेष देखभाल."
        },
        pediatricDentistry: {
          title: "पीडियाट्रिक डेंटिस्ट्री",
          description: "मुलांसाठी विशेष दंतवैद्यकीय सेवा, ज्यामध्ये निवारक उपचार आणि शिक्षण समाविष्ट आहे."
        }
      },
      projectTypes: [
        "🦷 जनरल डेंटिस्ट्री",
        "😬 ऑर्थोडॉन्टिक्स",
        "🪥 रिस्टोरेटिव्ह डेंटिस्ट्री",
        "😷 पीरियोडॉन्टल (हिरड्यांचे) उपचार",
        "👶 पीडियाट्रिक डेंटिस्ट्री",
        "😖 इमर्जन्सी डेंटल केअर",
        "🛠️ सर्जिकल डेंटल ट्रीटमेंट्स",
        "अक्कलदाढ शस्त्रक्रिया"
      ]
    }
  };

  const projectList = [
    {
      title: isMarathi ? content.mr.treatments.dentalCheckup.title : content.en.treatments.dentalCheckup.title,
      description: isMarathi ? content.mr.treatments.dentalCheckup.description : content.en.treatments.dentalCheckup.description,
      image: "public/assets/dentalcheckup.jpg",
    },
    {
      title: isMarathi ? content.mr.treatments.dentalFillings.title : content.en.treatments.dentalFillings.title,
      description: isMarathi ? content.mr.treatments.dentalFillings.description : content.en.treatments.dentalFillings.description,
      image: "public/assets/dentalfilling.webp",
    },
    {
      title: isMarathi ? content.mr.treatments.rootCanal.title : content.en.treatments.rootCanal.title,
      description: isMarathi ? content.mr.treatments.rootCanal.description : content.en.treatments.rootCanal.description,
      image: "public/assets/root_canal.webp",
    },
    {
      title: isMarathi ? content.mr.treatments.dentalCrowns.title : content.en.treatments.dentalCrowns.title,
      description: isMarathi ? content.mr.treatments.dentalCrowns.description : content.en.treatments.dentalCrowns.description,
      image: "public/assets/dentalcrown.jpg",
    },
    {
      title: isMarathi ? content.mr.treatments.braces.title : content.en.treatments.braces.title,
      description: isMarathi ? content.mr.treatments.braces.description : content.en.treatments.braces.description,
      image: "public/assets/braces.jpeg",
    },
    {
      title: isMarathi ? content.mr.treatments.dentalBridges.title : content.en.treatments.dentalBridges.title,
      description: isMarathi ? content.mr.treatments.dentalBridges.description : content.en.treatments.dentalBridges.description,
      image: "public/assets/dentalbridge.jpg",
    },
    {
      title: isMarathi ? content.mr.treatments.wisdomTooth.title : content.en.treatments.wisdomTooth.title,
      description: isMarathi ? content.mr.treatments.wisdomTooth.description : content.en.treatments.wisdomTooth.description,
      image: "public/assets/toothextact.jpg",
    },
    {
      title: isMarathi ? content.mr.treatments.teethWhitening.title : content.en.treatments.teethWhitening.title,
      description: isMarathi ? content.mr.treatments.teethWhitening.description : content.en.treatments.teethWhitening.description,
      image: "public/assets/dental-cleaning.jpg",
    },
    {
      title: isMarathi ? content.mr.treatments.dentalImplants.title : content.en.treatments.dentalImplants.title,
      description: isMarathi ? content.mr.treatments.dentalImplants.description : content.en.treatments.dentalImplants.description,
      image: "public/assets/dentalimplant.webp",
    },
    {
      title: isMarathi ? content.mr.treatments.gumTreatment.title : content.en.treatments.gumTreatment.title,
      description: isMarathi ? content.mr.treatments.gumTreatment.description : content.en.treatments.gumTreatment.description,
      image: "public/assets/gum.jpeg",
    },
    {
      title: isMarathi ? content.mr.treatments.pediatricDentistry.title : content.en.treatments.pediatricDentistry.title,
      description: isMarathi ? content.mr.treatments.pediatricDentistry.description : content.en.treatments.pediatricDentistry.description,
      image: "public/assets/pd.jpg",
    },
    {
      title: isMarathi ? "आमच्याशी चॅट करा" : "Chat With Us",
      image: "public/assets/whatsapp.jpeg",
      isCustom: true,
    },
  ];
  
  

  const projectTypes = ["🦷 General Dentistry", "😬 Orthodontics", "🪥 Restorative Dentistr", "😷 Periodontal (Gum) Treatments", "👶 Pediatric Dentistry", "😖 Emergency Dental Care" , "🛠️ Surgical Dental Treatments" , "Wisdom Tooth Surgery"];

  // Display popup with animation on page load
  useEffect(() => {
    setShowPopup(true);
    setTimeout(() => {
      setAnimatePopup(true);
    }, 100);  // Delay for animation effect
  }, []);

  // Close popup when clicked outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-wrapper") {
      setAnimatePopup(false);
      setTimeout(() => {
        setShowPopup(false);
      }, 300);  // Delay to complete the closing animation
    }

    if (e.target.id === "contact-popup-wrapper") {
      setShowContactPopup(false);
    }
  };
  const handleWhatsAppRedirect = () => {
    console.log("WhatsApp button clicked");
    
    const phoneNumber = "+918446710321";
    const message = encodeURIComponent("Hello, I want to discuss my doubts about treatment.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const nonCustomProjects = projectList.filter((project) => !project.isCustom);
  const customProjects = projectList.filter((project) => project.isCustom);
  const displayedProjects = [...nonCustomProjects.slice(0, visibleProjects), ...customProjects];

 

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header Section */}
      <header className="bg-slate-700 text-white py-6 md:py-6 relative">

        {/* Logo and Buttons Container */}
        <div className="flex justify-between items-center px-6 md:px-12">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo2.png"
              alt="Logo"
              className="w-16 md:w-24 h-16 md:h-24 rounded-2xl"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setShowPopup(true);
                setTimeout(() => setAnimatePopup(true), 10);
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-6 py-2 rounded-lg transition"
            >
              {isMarathi ? content.mr.aboutUs : content.en.aboutUs}
            </button>

            <button
              onClick={() => setShowContactPopup(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-6 py-2 rounded-lg transition"
            >
              {isMarathi ? content.mr.callUs : content.en.callUs}
            </button>
          </div>
        </div>

        {/* Main Heading and Description */}
        <div className="text-center mt-8 md:mt-5 px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-300">{isMarathi ? content.mr.headerTitle : content.en.headerTitle}</h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            {isMarathi ? content.mr.headerDescription : content.en.headerDescription}
          </p>
          <button
            onClick={() => setIsMarathi(!isMarathi)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            {isMarathi ? "English" : "मराठी"}
          </button>
        </div>
      </header>


      {/* Project Types Section */}
      <section className="bg-blue-100 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          {isMarathi ? content.mr.treatmentsTitle : content.en.treatmentsTitle}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
          {(isMarathi ? content.mr.projectTypes : content.en.projectTypes).map((type, index) => (
            <div
              key={index}
              className="bg-slate-700 text-white px-4 md:px-6 py-2 rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
            >
              <p className="text-md md:text-lg font-semibold">{type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      
      <section className="py-16 px-8 bg-blue-100">
        <h2 className="text-3xl font-semibold text-center mb-12">
          {isMarathi ? content.mr.exploreTitle : content.en.exploreTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.isCustom ? (
                  <>
                    <p className="text-gray-700 mt-2">{isMarathi ? content.mr.chatDescription : content.en.chatDescription}</p>
                    <button onClick={handleWhatsAppRedirect} className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-700 transition">{isMarathi ? content.mr.chatButton : content.en.chatButton}</button>
                  </>
                ) : (
                  <p className="text-gray-700 mt-2">{project.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < nonCustomProjects.length && (
          <div className="text-center mt-6">
            <button onClick={() => setVisibleProjects(visibleProjects + 5)} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">{isMarathi ? content.mr.showMore : content.en.showMore}</button>
          </div>
        )}
      </section>
      {/* Contact Section */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-3xl font-bold">{isMarathi ? content.mr.contactTitle : content.en.contactTitle}</h2>
        <p className="text-lg">
          📱 <a href="tel:+919890298809" className="text-black hover:underline">{isMarathi ? content.mr.anotherNo : content.en.anotherNo} +91 9890298809</a>
        </p>
        <p className="text-lg">
          📱 <a href="tel:+918446710321" className="text-black hover:underline">{isMarathi ? content.mr.drSachin : content.en.drSachin} +91 9890298809</a>
        </p>
        <p className="text-lg">{isMarathi ? content.mr.location2 : content.en.location2}</p>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Dr. S. K. Gandhi</p>
      </footer>

      {/* About Us Popup */}
      {showPopup && (
        <div
          id="popup-wrapper"
          className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div
            className={`bg-gradient-to-r from-pink-200 to-slate-300 text-white rounded-lg shadow-2xl max-w-lg w-full p-8 transition-transform duration-300 ${animatePopup ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-black">{isMarathi ? content.mr.whoWeAre : content.en.whoWeAre}</h2>
            <p className="text-lg text-black whitespace-pre-line" dangerouslySetInnerHTML={{ __html: isMarathi ? content.mr.whoWeAreDesc : content.en.whoWeAreDesc }}></p>
            <p className="text-lg mt-4 text-black">
              {isMarathi ? content.mr.fasterPrecision : content.en.fasterPrecision}
            </p>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => {
                  setAnimatePopup(false);
                  setTimeout(() => setShowPopup(false), 300);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                {isMarathi ? content.mr.close : content.en.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      {showContactPopup && (
        <div
          id="contact-popup-wrapper"
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div className=" text-black bg-gradient-to-r from-pink-200 to-slate-300 rounded-lg shadow-2xl max-w-md w-full p-6 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">{isMarathi ? content.mr.contactInfo : content.en.contactInfo}</h2>
            📱 {isMarathi ? content.mr.anotherNo : content.en.anotherNo}<a href="tel:+919890298809" className="text-black hover:underline"> +91 9890298809</a>
            <br />
            📱 {isMarathi ? content.mr.drSachin : content.en.drSachin}<a href="tel:+919890298809" className="text-black hover:underline"> +91 9890298809</a>
            <br /><br />
            <p className="text-sm">{isMarathi ? content.mr.location2 : content.en.location2}</p>
            <button
              onClick={() => setShowContactPopup(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-700 transition"
            >
              {isMarathi ? content.mr.close : content.en.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import '../styles/Services.css';

const services = [
  {
    title: "Masking",
    description: "Masking dental imperfections.",
    image: "/assets/images/sample.png",
    details: "Masking involves using dental materials to cover and improve the appearance of discolored, damaged, or irregular teeth, providing a more aesthetically pleasing smile."
  },
  {
    title: "Management of Facial Trauma",
    description: "Managing and treating facial trauma.",
    image: "/assets/images/sample.png",
    details: "Our team provides comprehensive care for facial trauma, including fractures, lacerations, and soft tissue injuries, ensuring both functional and aesthetic recovery."
  },
  {
    title: "Braces Installation",
    description: "Installation of braces for orthodontic treatment.",
    image: "/assets/images/sample.png",
    details: "We offer braces installation to correct misaligned teeth and jaws, improving both functionality and appearance. Our orthodontic services are tailored to meet the needs of both children and adults."
  },
  {
    title: "Implants",
    description: "Dental implants to replace missing teeth.",
    image: "/assets/images/sample.png",
    details: "Dental implants provide a permanent solution for missing teeth. They are designed to blend seamlessly with your natural teeth, restoring both function and aesthetics."
  },
  {
    title: "Replacement (Crown & Bridge)",
    description: "Replacement of teeth with crowns and bridges.",
    image: "/assets/images/sample.png",
    details: "We offer crown and bridge replacements to restore damaged or missing teeth. Crowns cover and protect damaged teeth, while bridges fill the gaps left by missing teeth."
  },
  {
    title: "Root Canal Treatment",
    description: "Treatment of root canal infections.",
    image: "/assets/images/sample.png",
    details: "Root canal treatment involves removing infected or damaged tissue from inside the tooth, relieving pain, and preventing further infection while preserving the natural tooth."
  },
  {
    title: "Cleaning (Scaling & Polishing)",
    description: "Professional dental cleaning (scaling and polishing).",
    image: "/assets/images/sample.png",
    details: "Our professional cleaning services include scaling to remove plaque and tartar and polishing to smooth and shine the teeth, promoting oral health and preventing decay."
  },
  {
    title: "Tooth Extraction (Children & Adults)",
    description: "Tooth extraction services for children and adults.",
    image: "/assets/images/sample.png",
    details: "We provide safe and comfortable tooth extraction services for both children and adults, addressing issues such as decay, infection, or overcrowding."
  },
  {
    title: "Full Mouth Examination",
    description: "Comprehensive examination of your oral health.",
    image: "/assets/images/sample.png",
    details: "A full mouth examination involves a thorough assessment of your oral health, including teeth, gums, and mouth tissues, to detect any issues and plan appropriate treatments."
  },
  {
    title: "Tooth Whitening",
    description: "Professional tooth whitening services.",
    image: "/assets/images/sample.png",
    details: "Our tooth whitening services use safe and effective techniques to lighten the color of your teeth, removing stains and enhancing the brightness of your smile."
  },
  {
    title: "Filling (Permanent & Temporary)",
    description: "Dental fillings, both permanent and temporary.",
    image: "/assets/images/sample.png",
    details: "We offer both permanent and temporary fillings to restore teeth damaged by decay. Our fillings are designed to match the natural color of your teeth for a seamless appearance."
  },
  {
    title: "Same Day Emergency",
    description: "Emergency dental services for immediate care.",
    image: "/assets/images/sample.png",
    details: "Our same day emergency services provide immediate care for urgent dental issues, such as severe pain, injury, or infection, ensuring prompt relief and treatment."
  },
  {
    title: "Dental Cleaning",
    description: "Routine dental cleaning services.",
    image: "/assets/images/sample.png",
    details: "Routine dental cleaning helps maintain oral health by removing plaque and tartar buildup, preventing cavities, gum disease, and other dental issues."
  },
  {
    title: "Teeth Replacement",
    description: "Replacement of missing teeth.",
    image: "/assets/images/sample.png",
    details: "Our teeth replacement services include options such as implants, bridges, and dentures, tailored to restore functionality and aesthetics for missing teeth."
  },
  {
    title: "Tooth Alignment",
    description: "Orthodontic treatment for tooth alignment.",
    image: "/assets/images/sample.png",
    details: "We provide orthodontic treatments to correct tooth misalignment, using braces or clear aligners to improve bite and appearance."
  },
  {
    title: "Tooth Jewelry",
    description: "Cosmetic tooth jewelry services.",
    image: "/assets/images/sample.png",
    details: "Our tooth jewelry services add a touch of sparkle to your smile with safe and stylish decorative elements applied to the teeth."
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openPopup = (service) => {
    setSelectedService(service);
    document.body.classList.add('overlay-active');
  };

  const closePopup = () => {
    setSelectedService(null);
    document.body.classList.remove('overlay-active');
  };

  return (
    <div className="services">
    <br/><br/>
      <h1>Our Services</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index} onClick={() => openPopup(service)}>
            <img src={process.env.PUBLIC_URL + service.image} alt={service.title} />
            <hr />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <h2>{selectedService.title}</h2>
            <img src={process.env.PUBLIC_URL + selectedService.image} alt={selectedService.title} />
            <hr />
            <p>{selectedService.description}</p>
            <p>{selectedService.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

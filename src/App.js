import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Sponsers from "./Pages/Sponsers";
import { useLayoutEffect } from "react";
import Awards from "./Pages/Awards"; 
import ContactUs from "./Pages/ContactUs";
import PaymentAcquireroftheYear from "./Pages/PaymentAcquireroftheYear";
import Bank2BankPaymentProcessoroftheYear from "./Pages/Bank2BankPaymentProcessoroftheYear";
import PaymentInnovatoroftheYear from "./Pages/PaymentInnovatoroftheYear";
import BAASInnovatoroftheYear from "./Pages/BAASInnovatoroftheYear";
import StartupoftheYear from "./Pages/StartupoftheYear";
import FinTechoftheYear from "./Pages/FinTechoftheYear";
import WomanEntrepreneurinFinTechtheYear from "./Pages/WomanEntrepreneurinFinTechtheYear";
import PayOutInnovatoroftheYear from "./Pages/Pay-OutInnovatoroftheYear";
import AntiFraudinnovatoroftheYear from "./Pages/AntiFraudinnovatoroftheYear";
import IDScreeningInnovatoroftheYear from "./Pages/IDScreeningInnovatoroftheYear";
import HowToEnter from "./Pages/HowToEnter";
import RegisterNow from "./Pages/RegisterNow";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ComplianceInnovatorMSBoftheYear from "./Pages/ComplianceInnovatorMSBoftheYear";
import BestinCustomerServiceMSBoftheYear from "./Pages/BestinCustomerServiceMSBoftheYear";
import RemittanceInnovatorMSBoftheYear from "./Pages/RemittanceInnovatorMSBoftheYear";
import ProgressiveMoneyExchangerMSBoftheYear from "./Pages/ProgressiveMoneyExchangerMSBoftheYear";
import Judges from "./Pages/Judges";
import Faq from "./Pages/Faq";
import MsbOfTheYear from "./Pages/MsbOfTheYear";
import Msbdisruptoroftheyear from "./Pages/Msbdisruptoroftheyear";
import MsbAppOfTheYear from "./Pages/MsbAppOfTheYear";
import MsbStoreofTheYear from "./Pages/MsbStoreofTheYear";
import VyneSponsorDetails from "./Pages/VyneSponsorDetails";
import OurSponsors from "./Pages/OurSponsors";
import MtbsSponsorsDetails from "./Pages/MtbsSponsorsDetails";
import TravelCashierDetails from "./Pages/TravelCashierDetails";
import JuryJudgeBfa from "./Pages/JuryJudgeBfa";
import VolumeSilverSponsor from "./Pages/VolumeSilverSponsor";
import JurySecondJudgeBfa from "./Pages/JurySecondJudgeBfa";
import ProfileClient from "./Pages/ProfileClient";
import Winner from "./Pages/Winner";
import PhotoGallery from "./Pages/Gallery/PhotoGallery";
import RegisterGalleryComponent from "./Pages/Gallery/RegisterGalleryComponent";
import KeyNotesSpekar from "./Pages/Gallery/KeyNotesSpekar";
import NetworkingGallery from "./Pages/Gallery/NetworkingGallery";
import DiscussionPannelGallery from "./Pages/Gallery/DiscussionPannelGallery";
import AwardsCeremonyGallery from "./Pages/Gallery/AwardsCeremonyGallery";
import DinnerGallery from "./Pages/Gallery/DinnerGallery";
import DownloadPhotosForm from "./Pages/Gallery/DownloadPhotosForm";
import VyneWinnerDetails from "./Pages/WinnerDetails/VyneWinnerDetails";
import VolumeWinnerDetails from "./Pages/WinnerDetails/VolumeWinnerDetails";
import GBGWinnerDetails from "./Pages/WinnerDetails/GBGWinnerDetails";
import MTBSWinnerDetails from "./Pages/WinnerDetails/MTBSWinnerDetails";
import TransferRocketDetails from "./Pages/WinnerDetails/TransferRocketDetails";
import MercuryDanati from "./Pages/WinnerDetails/MercuryDanati";
import BelyftedWinnerDetails from "./Pages/WinnerDetails/BelyftedWinnerDetails";
import BlessedExchangeWinnerDetails from "./Pages/WinnerDetails/BlessedExchangeWinnerDetails";
import OrbitalWinnerDetails from "./Pages/WinnerDetails/OrbitalWinnerDetails";
import MyRemitWinnerDetails from "./Pages/WinnerDetails/MyRemitWinnerDetails";
import SupperTransferWinnerDetails from "./Pages/WinnerDetails/SupperTransferWinnerDetails";
import TeeparamExchangeWinnerDetails from "./Pages/WinnerDetails/TeeparamExchangeWinnerDetails";
import RedSeaWinnerDetails from "./Pages/WinnerDetails/RedSeaWinnerDetails";
import BaazMoneyDetails from "./Pages/WinnerDetails/BaazMoneyDetails";
import SumsubWinnerDetails from "./Pages/WinnerDetails/SumsubWinnerDetails";
import TravelCashierWinnerDetails from "./Pages/WinnerDetails/TravelCashierWinnerDetails";
import KMoneyWinnerDetails from "./Pages/WinnerDetails/KMoneyWinnerDetails";
import VideoGallery from "./Components/VideoGallery";
import SponsorShipTermsAndConditions from "./Pages/2025/SponsorShipTermsAndConditions";
import StartupPage from "./Pages/2025/StartupPage";
// import Chatbot from "./Components/ChatForm";
import MsbGlobalOfTheYear from "./Pages/MsbGlobalOfTheYear";
import FinTechGlobaloftheYear from "./Pages/FinTechGlobaloftheYear";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import FinTechintheUK from "./Pages/Blogs/FinTechintheUK";
import TravelCashierDetails2025 from "./Pages/2025/OurSponsors/TravelCashierDetails2025";
import TruslyPayDetails2025 from "./Pages/2025/OurSponsors/TruslyPayDetails2025";
import MercuryDenatiDetails2025 from "./Pages/2025/OurSponsors/MercuryDenatiDetails2025";
import TicketBookingPage from "./Pages/TicketBookingPage";
import SuccessPage from "./Pages/SuccessPage";
import CancelPage from "./Pages/CancelledPage";
import TeeparamExchangeDetails2025 from "./Pages/2025/OurSponsors/TeeparamExchangeDetails2025";
import VolumePaySponsorDetails2025 from "./Pages/VolumePaySponsorDetails2025";
import ScrollToHashElement from "./Components/SliderBigBan/ScrollToHashElement";
import LeatherbackSponsorDetails from "./Pages/LeatherbackSponsorDetails";
import KeyNoteDetails from "./Pages/KeyNoteDetails";
import AiMsbBlog from "./Pages/Blogs/AiMsbBlog";

function App() {
  const location = useLocation();
  const { pathname, hash } = location;
  
  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Hide Header and Footer on the profile page
  const hideHeaderFooter = location.pathname === "/profile";
  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
         <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsorship-categories" element={<Sponsers />} />
        
        <Route path="/sponsors" element={<Sponsers />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/registerfor-startup-pitch" element={<StartupPage />} />
        <Route path="/dinner-2024" element={<DinnerGallery />} />
        <Route path="/video-gallery-2024" element={<VideoGallery />} />
            <Route path="/ticket-booking" element={<TicketBookingPage />} />
            <Route path="/leatherback-sponsor-details-2025" element={<LeatherbackSponsorDetails />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route
          path="/download-awards-photos-form-2024"
          element={<DownloadPhotosForm />}
        />
        <Route path="/keynote-speaker-2025/:id" element={<KeyNoteDetails />} />
        <Route path="/keynote-speaker-2025/simone-martinelli-volume" element={<KeyNoteDetails />} />
        <Route
          path="/networking-gallery-2024"
          element={<NetworkingGallery />}
        />

         <Route path="/ai-in-the-msb-sector" element={<AiMsbBlog />} />
        <Route path="/key-notes-gallery-2024" element={<KeyNotesSpekar />} />
        <Route path="/sponsorship-terms-and-conditions" element={<SponsorShipTermsAndConditions />} />
        <Route
          path="/discussion-panel-2024"
          element={<DiscussionPannelGallery />}
        />
        <Route
          path="/awards-ceremoney-2024"
          element={<AwardsCeremonyGallery />}
        />
        <Route
          path="/teeparam-exchange-details-2025"
          element={< TeeparamExchangeDetails2025/>}
        />
        <Route path="/photo-gallery-2024" element={<PhotoGallery />} />
        <Route
          path="/register-awards-2024"
          element={<RegisterGalleryComponent />}
        />
        <Route path="/winners-2024" element={<Winner />} />
        <Route path="/award-winners-2024" element={<Winner />} />
        <Route path="/judges/bharat-rai" element={<JurySecondJudgeBfa />} />
        <Route
          path="/volume-payments-sponsor"
          element={<VolumeSilverSponsor />}
        />

        <Route
          path="/Account2Account-Payment-Processor-of-the-Year"
          element={<Bank2BankPaymentProcessoroftheYear />}
        />
        <Route
          path="/Payment-Innovator-of-the-Year"
          element={<PaymentInnovatoroftheYear />}
        />
        <Route
          path="/Pay-Out-Innovator-of-the-Year"
          element={<PayOutInnovatoroftheYear />}
        />
        <Route
          path="/B-A-A-S-Innovator-of-the-Year"
          element={<BAASInnovatoroftheYear />}
        />
        <Route path="/Startup-of-the-Year" element={<StartupoftheYear />} />
        <Route
          path="/Woman-Entrepreneur-in-FinTech-the-Year"
          element={<WomanEntrepreneurinFinTechtheYear />}
        />
        <Route
          path="/Anti-Fraud-Innovator-of-the-Year"
          element={<AntiFraudinnovatoroftheYear />}
        />
        <Route
          path="/ID-Verification-Innovator-of-the-Year"
          element={<IDScreeningInnovatoroftheYear />}
        />
        <Route
          path="/Payment-Acquirer-of-the-Year"
          element={<PaymentAcquireroftheYear />}
        />        
        <Route path="/FinTech-of-the-Year" element={<FinTechoftheYear />} />

        <Route
          path="/Compliance-Innovator"
          element={<ComplianceInnovatorMSBoftheYear />}
        />
        <Route
          path="/Best-in-Customer-Service-MSB"
          element={<BestinCustomerServiceMSBoftheYear />}
        />
        <Route
          path="/Remittance-Innovator-MSB"
          element={<RemittanceInnovatorMSBoftheYear />}
        />
        <Route
          path="/Progressive-Money-Exchanger-MSB"
          element={<ProgressiveMoneyExchangerMSBoftheYear />}
        />
          <Route
          path="/msb-disruptor-of-the-year"
          element={<Msbdisruptoroftheyear />}
        />        
        <Route path="/msb-store-of-the-year" element={<MsbStoreofTheYear />} />
        <Route path="/msb-of-year" element={<MsbOfTheYear />} />
        <Route path="/msb-app-of-the-year" element={<MsbAppOfTheYear />} />
        
        <Route path="/FinTech-global-of-the-Year" element={<FinTechGlobaloftheYear />} />
        <Route path="/msb-global-of-year" element={<MsbGlobalOfTheYear />} />
      

        <Route path="/about" element={<About />} />
        <Route path="/how-to-enter" element={<HowToEnter />} />
     
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/judges" element={<Judges />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/nominate-now" element={<RegisterNow />} />

        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/vyne-gold-sponsor" element={<VyneSponsorDetails />} />
        <Route path="/mtbs-silver-sponsor" element={<MtbsSponsorsDetails />} />
        <Route
          path="/travel-cashier-silver-sponsor"
          element={<TravelCashierDetails />}
        />

           <Route
          path="/travel-cashier-details-2025"
          element={<TravelCashierDetails2025 />}
        />

             <Route
          path="/volume-pay-sponsor-details-2025"
          element={<VolumePaySponsorDetails2025 />}
        />

              <Route
          path="/truslypay-sponsor-details-2025"
          element={<TruslyPayDetails2025 />}
        />
          <Route
          path="/mercury-sponsor-details-2025"
          element={<MercuryDenatiDetails2025 />}
        />
        <Route path="judges/giordano-cortese" element={<JuryJudgeBfa />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/our-sponsors" element={<OurSponsors />} />
        <Route path="/profile" element={<ProfileClient />} />
        <Route path="/chat-bot-form" element={<Chatbot />} />

        <Route path="/award-winners-2024/vyne-technologies-account2account-payment-processor" element={<VyneWinnerDetails />} />
        <Route path="/award-winners-2024/volume-payments-limited-fintech-of-the-year-2024" element={<VolumeWinnerDetails />} />
        <Route path="/award-winners-2024/gbg-plc-id-verification-innovator-of-the-year-2024" element={<GBGWinnerDetails />} />
        <Route path="/award-winners-2024/mtbs-banking-as-a-service-innovator-of-the-year-2024" element={<MTBSWinnerDetails />} />
        <Route path="/award-winners-2024/transfer-rocket-ltd-pay-out-innovator-of-the-year-2024" element={<TransferRocketDetails />} />
        <Route path="/award-winners-2024/mercury-danati-compliance-innovator-of-the-year-2024" element={<MercuryDanati />} />
        <Route path="/award-winners-2024/belyfted-limited-startup-of-the-year-2024" element={<BelyftedWinnerDetails />} />
        <Route path="/award-winners-2024/blessed-exchange-ltd-woman-entrepreneur-in-fintech-2024" element={<BlessedExchangeWinnerDetails />} />
        <Route path="/award-winners-2024/orbital-payment-innovator-of-the-year-2024" element={<OrbitalWinnerDetails />} />
        <Route path="/award-winners-2024/myremit-best-in-customer-service-msb-2024" element={<MyRemitWinnerDetails />} />
        <Route path="/award-winners-2024/super-transfer-uk-ltd-remittance-innovator-msb-2024" element={<SupperTransferWinnerDetails />} />
        <Route path="/award-winners-2024/teeparam-exchange-ltd-msb-of-the-year-2024" element={<TeeparamExchangeWinnerDetails />} />
        <Route path="/award-winners-2024/red-sea-ltd-msb-disruptor-of-the-year-2024" element={<RedSeaWinnerDetails />} />
        <Route path="/award-winners-2024/kmoney-msb-app-of-the-year-2024" element={<KMoneyWinnerDetails />} />
        <Route path="/award-winners-2024/baaz-money-exchange-ltd-msb-store-of-the-year-2024" element={<BaazMoneyDetails />} />
        <Route path="/award-winners-2024/sumsub-anti-fraud-innovator-of-the-year-2024" element={<SumsubWinnerDetails />} />
        <Route path="/award-winners-2024/travel-cashier-ltd-progressive-money-exchanger-msb-of-the-year-2024" element={<TravelCashierWinnerDetails />} />
        
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/fintech-in-the-uk" element={<FinTechintheUK />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;

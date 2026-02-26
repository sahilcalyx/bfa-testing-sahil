import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Sponsers from "./Pages/Sponsers";
import { useLayoutEffect, useEffect } from "react";
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
import Chatbot from "./Components/ChatForm";
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
import VolumePaySponsorDetails2025 from "./Pages/2025/OurSponsors/VolumePaySponsorDetails2025";
import ScrollToHashElement from "./Components/SliderBigBan/ScrollToHashElement";
import LeatherbackSponsorDetails from "./Pages/2025/OurSponsors/LeatherbackSponsorDetails";
import AiMsbBlog from "./Pages/Blogs/AiMsbBlog";
import ClearJunctionDetails2025 from "./Pages/2025/OurSponsors/ClearJunctionDetails2025";
import SimonKeyNoteDetails from "./Pages/2025/Keynotes/SimonKeyNoteDetails";
import OchebhoyaKeyNoteDetails from "./Pages/2025/Keynotes/OchebhoyaKeyNoteDetails";
import LeftoverCurrency2025 from "./Pages/2025/OurSponsors/LeftoverCurrency2025";
import IfePaySponsorDetails from "./Pages/2025/OurSponsors/IfePaySponsorDetails";
import Will_2025_Be_the_Year_of_Stablecoins from "./Pages/Blogs/Will_2025_Be_the_Year_of_Stablecoins";
import FinestPaySponsorDetails from "./Pages/2025/OurSponsors/FinestPaySponsorDetails";
import BelyftedSponsorDetails from "./Pages/2025/OurSponsors/BelyftedSponsorDetails";
import MyremitSponsorDetails from "./Pages/2025/OurSponsors/MyremitSponsorDetails";
import LuminelawSponsorDetails from "./Pages/2025/OurSponsors/LuminelawSponsorDetails";
import BaazMoneySponsorDetails from "./Pages/2025/OurSponsors/BaazMoneySponsorDetails";
import QFRemitSponsorDetails from "./Pages/2025/OurSponsors/QFRemitSponsorDetails";
import EndozDisbuzDetails2025 from "./Pages/2025/OurSponsors/EndozDisbuzDetails2025";
import KmbalSponsorDetails from "./Pages/2025/OurSponsors/KmbalSponsorDetails";
import OurKeyNoteSpeakers from "./Pages/OurKeyNoteSpeakers";
import DiscussionPannelSection from "./Pages/2025/DiscussionPannel/DiscussionPannelSection";
import WayneFosterDPDetails from "./Pages/2025/DiscussionPannel/WayneFosterDPDetails";
import MarioVanPoppelDPDetails from "./Pages/2025/DiscussionPannel/MarioVanPoppelDPDetails";
import RedSeaDetails2025 from "./Pages/2025/OurSponsors/RedSeaDetails2025";
import ChrisboroughDetails2025 from "./Pages/2025/OurSponsors/ChrisboroughDetails2025";
import Awards_as_catalysts_Blog_04 from "./Pages/Blogs/Awards_as_catalysts_Blog_04";
import DenisKalyapinDPDetails from "./Pages/2025/DiscussionPannel/DenisKalyapinDPDetails";
import BharatRaiJudgeDetails2025 from "./Pages/2025/JudgesSection/BharatRaiJudgeDetails2025";
import GiordanoCorteseJudgeDetails2025 from "./Pages/2025/JudgesSection/GiordanoCorteseJudgeDetails2025";
import DavidJudgeDetails2025 from "./Pages/2025/JudgesSection/DavidJudgeDetails2025";
import OurDiscussionPanel from "./Pages/OurDiscussionPanel";
import Beyond_borders_how_brit_fintech from "./Pages/Blogs/Beyond_borders_how_brit_fintech";
import Winner2025 from "./Pages/2025/Winner/Winner2025";
import From_cash_counters_to_super_apps_the_evolution_of_msbs from "./Pages/Blogs/From_cash_counters_to_super_apps_the_evolution_of_msbs";
import NikhilSapreJudgeDetails2025 from "./Pages/2025/JudgesSection/NikhilSapreJudgeDetails2025";
import ECEXSponsorDetails from "./Pages/2025/OurSponsors/ECEXSponsorDetails";
import VolumeWinnerDetails25 from "./Pages/2025/Winner/WinnerDetailsPages/VolumeWinnerDetails25";
import FastTrackWinnerDetails25 from "./Pages/2025/Winner/WinnerDetailsPages/FastTrackWinnerDetails25";
import DisbuzWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/DisbuzWinnerDetails2025";
import LeatherbackWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/LeatherbackWinnerDetails2025";
import EmarchantPayWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/EmarchantPayWinnerDetails2025";
import IfepayWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/IfepayWinnerDetails2025";
import AlonaShevtsovaWinnerDetails from "./Pages/2025/Winner/WinnerDetailsPages/AlonaShevtsovaWinnerDetails";
import SumsubWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/SumsubWinnerDetails2025";
import ShuftiProwinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/ShuftiProwinnerDetails2025";
import KaniPaymentsWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/KaniPaymentsWinnerDetails2025";
import PurseBassSponsorDetails from "./Pages/2025/OurSponsors/PurseBassSponsorDetails";
import GallarySection2025 from "./Pages/2025/GallarySection25/GallarySection2025";
import PhotoGallery2025 from "./Pages/2025/GallarySection25/PhotoGallery2025";
import RegistrationPhotos2025 from "./Pages/2025/GallarySection25/RegistrationPhotos2025";
import ChrisbourghWinnerDetails25 from "./Pages/2025/Winner/WinnerDetailsPages/ChrisbourghWinnerDetails25";
import AyoremitWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/AyoremitWinnerDetails2025";
import KmbalWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/KmbalWinnerDetails2025";
import MyremitWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/MyremitWinnerDetails2025";
import BelyftedWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/BelyftedWinnerDetails2025";
import TravelCashierLtdWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/TravelCashierLtdWinnerDetails2025";
import MercuryDanatiLtdWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/MercuryDanatiLtdWinnerDetails2025";
import TeeparamExchangeLtdWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/TeeparamExchangeLtdWinnerDetails2025";
import LeftoverCurrencyWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/LeftoverCurrencyWinnerDetails2025";
import RedSeaMoneyTransferWinnerDetails2025 from "./Pages/2025/Winner/WinnerDetailsPages/RedSeaMoneyTransferWinnerDetails2025";
import AllTestimonials from "./Pages/AllTestimonials";
import InsidetheBFAExperienceNetworkingEnergyandInnovation from "./Pages/Blogs/InsidetheBFAExperienceNetworkingEnergyandInnovation";
import VideoGallery2025 from "./Pages/2025/VideoGallary25/VideoGallery2025";
import TheBankinYourPocketHowEverydayAppsBecameGlobalBanks from "./Pages/Blogs/TheBankinYourPocketHowEverydayAppsBecameGlobalBanks";
import Awards24 from "./Pages/Awards copy";
import Awards2024 from "./Pages/AwardsCategory";
import AwardsCategory from "./Pages/AwardsCategory";
import Cbdc_Central_bank_digital_currencies from "./Pages/Blogs/Cbdc_Central_bank_digital_currencies";
import HowInstantPaymentsAreChangingConsumerExpectationsGlobally from "./Pages/Blogs/HowInstantPaymentsAreChangingConsumerExpectationsGlobally";
import ManagingFraudRisksinaRealTime from "./Pages/Blogs/ManagingFraudRisksinaRealTime";

function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Dispatch custom event when route changes for SEO updates
  useEffect(() => {
    const event = new CustomEvent('app-route-change', { detail: pathname });
    window.dispatchEvent(event);
  }, [pathname]);

  const location = useLocation();

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
      
        <Route path="/awards-category" element={<AwardsCategory />} />
        <Route path="/registerfor-startup-pitch" element={<StartupPage />} />
        <Route path="/dinner-2024" element={<DinnerGallery />} />
        <Route path="/video-gallery-2024" element={<VideoGallery />} />
        <Route path="/video-gallery-2025" element={<VideoGallery2025 />} />
        <Route path="/ticket-booking" element={<TicketBookingPage />} />

        {/* <Route path="/register-now" element={<RegisterNow />} /> */}
       
        <Route
          path="/leatherback-sponsor-details-2025"
          element={<LeatherbackSponsorDetails />}
        />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route
          path="/download-awards-photos-form-2024"
          element={<DownloadPhotosForm />}
        />
        <Route
          path="/our-keynote-speaker-2025"
          element={<OurKeyNoteSpeakers />}
        />
        <Route
          path="/our-discussion-panel-2025"
          element={<OurDiscussionPanel />}
        />
        <Route
          path="/simone-martinelli-volume"
          element={<SimonKeyNoteDetails />}
        />

        <Route
          path="/ochebhoya-ekpete-leatherback"
          element={<OchebhoyaKeyNoteDetails />}
        />
        <Route
          path="/our-discussion-panel-2025"
          element={<DiscussionPannelSection />}
        />
        <Route
          path="/wayne-foster-discussion-panel-2025"
          element={<WayneFosterDPDetails />}
        />
        <Route
          path="/mario-van-poppel-discussion-panel-2025"
          element={<MarioVanPoppelDPDetails />}
        />
        <Route
          path="/denis-kalyapin-discussion-panel-2025"
          element={<DenisKalyapinDPDetails />}
        />

        <Route
          path="/leftover-currency-sponsor-details-2025"
          element={<LeftoverCurrency2025 />}
        />
        <Route
          path="/networking-gallery-2024"
          element={<NetworkingGallery />}
        />

        <Route path="/ai-in-the-msb-sector" element={<AiMsbBlog />} />
        <Route path="/key-notes-gallery-2024" element={<KeyNotesSpekar />} />
        <Route
          path="/sponsorship-terms-and-conditions"
          element={<SponsorShipTermsAndConditions />}
        />
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
          element={<TeeparamExchangeDetails2025 />}
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

        <Route
          path="/FinTech-global-of-the-Year"
          element={<FinTechGlobaloftheYear />}
        />
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
          path="/cbdc-central-bank-digital-currencies-and-their-impact-on-msbs-and-fintech-markets"
          element={<Cbdc_Central_bank_digital_currencies />}
        />
        <Route
          path="/how-instant-payments-are-changing-consumer-expectations-globally"
          element={<HowInstantPaymentsAreChangingConsumerExpectationsGlobally />}
        />
        <Route
          path="/managing-fraud-risks-in-a-real-time-payments-world"
          element={<ManagingFraudRisksinaRealTime />}
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
          path="/fast-track-money-sponsor-details-2025"
          element={<TruslyPayDetails2025 />}
        />

        <Route
          path="/mercury-sponsor-details-2025"
          element={<MercuryDenatiDetails2025 />}
        />
        <Route
          path="/clear-junction-sponsor-details-2025"
          element={<ClearJunctionDetails2025 />}
        />
        <Route
          path="/ifepay-sponsor-details-2025"
          element={<IfePaySponsorDetails />}
        />
        <Route
          path="/finestpay-sponsor-details-2025"
          element={<FinestPaySponsorDetails />}
        />
        <Route
          path="/belyfted-sponsor-details-2025"
          element={<BelyftedSponsorDetails />}
        />
        <Route
          path="/myremit-sponsor-details-2025"
          element={<MyremitSponsorDetails />}
        />
        <Route
          path="/lumine-solicitors-sponsor-details-2025"
          element={<LuminelawSponsorDetails />}
        />
        <Route
          path="/baazmoney-sponsor-details-2025"
          element={<BaazMoneySponsorDetails />}
        />
        <Route
          path="/qfremit-sponsor-details-2025"
          element={<QFRemitSponsorDetails />}
        />
        <Route
          path="/endoz-disbuz-sponsor-details-2025"
          element={<EndozDisbuzDetails2025 />}
        />
        <Route
          path="/kmbal-sponsor-details-2025"
          element={<KmbalSponsorDetails />}
        />
        <Route
          path="/red-sea-sponsor-details-2025"
          element={<RedSeaDetails2025 />}
        />
        <Route
          path="/chrisborough-sponsor-details-2025"
          element={<ChrisboroughDetails2025 />}
        />
        <Route
          path="/ecex-sponsor-details-2025"
          element={<ECEXSponsorDetails />}
        />
        <Route
          path="/purse-baas-sponsor-details-2025"
          element={<PurseBassSponsorDetails />}
        />
        <Route
          path="/from-cash-counters-to-super-apps-the-evolution-of-msbs"
          element={<From_cash_counters_to_super_apps_the_evolution_of_msbs />}
        />

        <Route path="judges/giordano-cortese" element={<JuryJudgeBfa />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/our-sponsors" element={<OurSponsors />} />
        <Route path="/profile" element={<ProfileClient />} />
        <Route path="/chat-bot-form" element={<Chatbot />} />

        <Route
          path="/award-winners-2024/vyne-technologies-account2account-payment-processor"
          element={<VyneWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/volume-payments-limited-fintech-of-the-year-2024"
          element={<VolumeWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/gbg-plc-id-verification-innovator-of-the-year-2024"
          element={<GBGWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/mtbs-banking-as-a-service-innovator-of-the-year-2024"
          element={<MTBSWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/transfer-rocket-ltd-pay-out-innovator-of-the-year-2024"
          element={<TransferRocketDetails />}
        />
        <Route
          path="/award-winners-2024/mercury-danati-compliance-innovator-of-the-year-2024"
          element={<MercuryDanati />}
        />
        <Route
          path="/award-winners-2024/belyfted-limited-startup-of-the-year-2024"
          element={<BelyftedWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/blessed-exchange-ltd-woman-entrepreneur-in-fintech-2024"
          element={<BlessedExchangeWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/orbital-payment-innovator-of-the-year-2024"
          element={<OrbitalWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/myremit-best-in-customer-service-msb-2024"
          element={<MyRemitWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/super-transfer-uk-ltd-remittance-innovator-msb-2024"
          element={<SupperTransferWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/teeparam-exchange-ltd-msb-of-the-year-2024"
          element={<TeeparamExchangeWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/red-sea-ltd-msb-disruptor-of-the-year-2024"
          element={<RedSeaWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/kmoney-msb-app-of-the-year-2024"
          element={<KMoneyWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/baaz-money-exchange-ltd-msb-store-of-the-year-2024"
          element={<BaazMoneyDetails />}
        />
        <Route
          path="/award-winners-2024/sumsub-anti-fraud-innovator-of-the-year-2024"
          element={<SumsubWinnerDetails />}
        />
        <Route
          path="/award-winners-2024/travel-cashier-ltd-progressive-money-exchanger-msb-of-the-year-2024"
          element={<TravelCashierWinnerDetails />}
        />

        {/* Start Winner 2025 Details Pages */}

        <Route path="/award-winners-2025" element={<Winner2025 />} />
        <Route
          path="/award-winners-2025/volume-account2account-payment-processor-2025"
          element={<VolumeWinnerDetails25 />}
        />
        <Route
          path="/award-winners-2025/fast-track-payment-innovator-2025"
          element={<FastTrackWinnerDetails25 />}
        />
        <Route
          path="/award-winners-2025/disbuz-pay-out-innovator-2025"
          element={<DisbuzWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/Leatherback-B-A-A-S-innovator-2025"
          element={<LeatherbackWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/emarchantPay-payment-acquirer-2025"
          element={<EmarchantPayWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/emerchantpay-payment-acquirer-2025"
          element={<EmarchantPayWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/ifepay-startup-of-the-year-2025"
          element={<IfepayWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/alona-shevtsova-woman-entrepreneur-in-finTech-2025"
          element={<AlonaShevtsovaWinnerDetails />}
        />
        <Route
          path="/award-winners-2025/sumsub-anti-fraud-innovator-2025"
          element={<SumsubWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/shufti-pro-id-verification-innovator-2025"
          element={<ShuftiProwinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/kani-payments-finTech-of-the-year-2025"
          element={<KaniPaymentsWinnerDetails2025 />}
        />
          <Route
          path="/award-winners-2025/kmbal-compliance-innovator-of-the-year-2025"
          element={<KmbalWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/myremit-best-in-customer-service-msb-2025"
          element={<MyremitWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/belyfted-remittance-innovator-msb-2025"
          element={<BelyftedWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/travel-cashier-ltd-money-exchanger-msb-of-the-year-2025"
          element={<TravelCashierLtdWinnerDetails2025 />}
        />

        <Route
          path="/award-winners-2025/leftover-msb-disruptor-of-the-year-2025"
          element={<LeftoverCurrencyWinnerDetails2025 />}
        />
         <Route
          path="/award-winners-2025/mercury-danati-ltd-msb-store-of-the-year-2025"
          element={<MercuryDanatiLtdWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/red-sea-money-transfer-msb-app-of-the-year-2025"
          element={<RedSeaMoneyTransferWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/teeparam-exchange-ltd-msb-of-the-year-2025"
          element={<TeeparamExchangeLtdWinnerDetails2025 />}
        />
        <Route
          path="/award-winners-2025/chrisborough-fintech-of-the-year-2025"
          element={<ChrisbourghWinnerDetails25 />}
        />
        <Route
          path="/award-winners-2025/ayoremit-msb-of-the-year-2025"
          element={<AyoremitWinnerDetails2025 />}
        />
        
        {/* End Winner 2025 Details Pages */}



        {/* Gallary 2025 Pages Start */}

        <Route path="/" element={<GallarySection2025 />} />
        <Route path="/photo-gallery-2025" element={<PhotoGallery2025 />} />
        <Route path="/registration-photo-gallery-2025" element={<RegistrationPhotos2025 />} />


        {/* Gallary 2025 Pages End */}
         <Route path="/all-testimonials" element={<AllTestimonials />} />

        

        <Route path="/blogs" element={<Blogs />} />
         <Route
          path="/inside-the-bfa-experience-networking-energy-innovation"
          element={<InsidetheBFAExperienceNetworkingEnergyandInnovation />}
        />
        <Route
          path="/will-2025-be-the-year-of-stablecoins"
          element={<Will_2025_Be_the_Year_of_Stablecoins />}
        />
        <Route
          path="/awards-as-catalysts-transforming-recognition-into-real-impact"
          element={<Awards_as_catalysts_Blog_04 />}
        />
        <Route
          path="/the-banking-in-your-pocket-how-everyday-apps-became-global-banks"
          element={<TheBankinYourPocketHowEverydayAppsBecameGlobalBanks />}
        />

        <Route
          path="/bharat-rai-judge-details-2025"
          element={<BharatRaiJudgeDetails2025 />}
        />
        <Route
          path="/giordano-cortese-judge-details-2025"
          element={<GiordanoCorteseJudgeDetails2025 />}
        />
        <Route
          path="/david-podesta-judge-details-2025"
          element={<DavidJudgeDetails2025 />}
        />
        <Route
          path="/nikhil-sapre-judge-details-2025"
          element={<NikhilSapreJudgeDetails2025 />}
        />
        <Route
          path="/beyond-borders-brit-fintech-awards"
          element={<Beyond_borders_how_brit_fintech />}
        />

        <Route path="/fintech-in-the-uk" element={<FinTechintheUK />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
const About = lazy(() => import("./Pages/About"));
import Footer from "./Components/Footer";
const Sponsers = lazy(() => import("./Pages/Sponsers"));
import React, { useLayoutEffect, useEffect, Suspense, lazy } from "react";
const Awards = lazy(() => import("./Pages/Awards"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const PaymentAcquireroftheYear = lazy(() => import("./Pages/PaymentAcquireroftheYear"));
const Bank2BankPaymentProcessoroftheYear = lazy(() => import("./Pages/Bank2BankPaymentProcessoroftheYear"));
const PaymentInnovatoroftheYear = lazy(() => import("./Pages/PaymentInnovatoroftheYear"));
const BAASInnovatoroftheYear = lazy(() => import("./Pages/BAASInnovatoroftheYear"));
const StartupoftheYear = lazy(() => import("./Pages/StartupoftheYear"));
const FinTechoftheYear = lazy(() => import("./Pages/FinTechoftheYear"));
const WomanEntrepreneurinFinTechtheYear = lazy(() => import("./Pages/WomanEntrepreneurinFinTechtheYear"));
const PayOutInnovatoroftheYear = lazy(() => import("./Pages/Pay-OutInnovatoroftheYear"));
const AntiFraudinnovatoroftheYear = lazy(() => import("./Pages/AntiFraudinnovatoroftheYear"));
const IDScreeningInnovatoroftheYear = lazy(() => import("./Pages/IDScreeningInnovatoroftheYear"));
const HowToEnter = lazy(() => import("./Pages/HowToEnter"));
const RegisterNow = lazy(() => import("./Pages/RegisterNow"));
const TermsAndConditions = lazy(() => import("./Pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const ComplianceInnovatorMSBoftheYear = lazy(() => import("./Pages/ComplianceInnovatorMSBoftheYear"));
const BestinCustomerServiceMSBoftheYear = lazy(() => import("./Pages/BestinCustomerServiceMSBoftheYear"));
const RemittanceInnovatorMSBoftheYear = lazy(() => import("./Pages/RemittanceInnovatorMSBoftheYear"));
const ProgressiveMoneyExchangerMSBoftheYear = lazy(() => import("./Pages/ProgressiveMoneyExchangerMSBoftheYear"));
const Judges = lazy(() => import("./Pages/Judges"));
const Faq = lazy(() => import("./Pages/Faq"));
const MsbOfTheYear = lazy(() => import("./Pages/MsbOfTheYear"));
const Msbdisruptoroftheyear = lazy(() => import("./Pages/Msbdisruptoroftheyear"));
const MsbAppOfTheYear = lazy(() => import("./Pages/MsbAppOfTheYear"));
const MsbStoreofTheYear = lazy(() => import("./Pages/MsbStoreofTheYear"));
const VyneSponsorDetails = lazy(() => import("./Pages/VyneSponsorDetails"));
const OurSponsors = lazy(() => import("./Pages/OurSponsors"));
const MtbsSponsorsDetails = lazy(() => import("./Pages/MtbsSponsorsDetails"));
const TravelCashierDetails = lazy(() => import("./Pages/TravelCashierDetails"));
const JuryJudgeBfa = lazy(() => import("./Pages/JuryJudgeBfa"));
const VolumeSilverSponsor = lazy(() => import("./Pages/VolumeSilverSponsor"));
const JurySecondJudgeBfa = lazy(() => import("./Pages/JurySecondJudgeBfa"));
const ProfileClient = lazy(() => import("./Pages/ProfileClient"));
const Winner = lazy(() => import("./Pages/Winner"));
const PhotoGallery = lazy(() => import("./Pages/Gallery/PhotoGallery"));
const RegisterGalleryComponent = lazy(() => import("./Pages/Gallery/RegisterGalleryComponent"));
const KeyNotesSpekar = lazy(() => import("./Pages/Gallery/KeyNotesSpekar"));
const NetworkingGallery = lazy(() => import("./Pages/Gallery/NetworkingGallery"));
const DiscussionPannelGallery = lazy(() => import("./Pages/Gallery/DiscussionPannelGallery"));
const AwardsCeremonyGallery = lazy(() => import("./Pages/Gallery/AwardsCeremonyGallery"));
const DinnerGallery = lazy(() => import("./Pages/Gallery/DinnerGallery"));
const DownloadPhotosForm = lazy(() => import("./Pages/Gallery/DownloadPhotosForm"));
const VyneWinnerDetails = lazy(() => import("./Pages/WinnerDetails/VyneWinnerDetails"));
const VolumeWinnerDetails = lazy(() => import("./Pages/WinnerDetails/VolumeWinnerDetails"));
const GBGWinnerDetails = lazy(() => import("./Pages/WinnerDetails/GBGWinnerDetails"));
const MTBSWinnerDetails = lazy(() => import("./Pages/WinnerDetails/MTBSWinnerDetails"));
const TransferRocketDetails = lazy(() => import("./Pages/WinnerDetails/TransferRocketDetails"));
const MercuryDanati = lazy(() => import("./Pages/WinnerDetails/MercuryDanati"));
const BelyftedWinnerDetails = lazy(() => import("./Pages/WinnerDetails/BelyftedWinnerDetails"));
const BlessedExchangeWinnerDetails = lazy(() => import("./Pages/WinnerDetails/BlessedExchangeWinnerDetails"));
const OrbitalWinnerDetails = lazy(() => import("./Pages/WinnerDetails/OrbitalWinnerDetails"));
const MyRemitWinnerDetails = lazy(() => import("./Pages/WinnerDetails/MyRemitWinnerDetails"));
const SupperTransferWinnerDetails = lazy(() => import("./Pages/WinnerDetails/SupperTransferWinnerDetails"));
const TeeparamExchangeWinnerDetails = lazy(() => import("./Pages/WinnerDetails/TeeparamExchangeWinnerDetails"));
const RedSeaWinnerDetails = lazy(() => import("./Pages/WinnerDetails/RedSeaWinnerDetails"));
const BaazMoneyDetails = lazy(() => import("./Pages/WinnerDetails/BaazMoneyDetails"));
const SumsubWinnerDetails = lazy(() => import("./Pages/WinnerDetails/SumsubWinnerDetails"));
const TravelCashierWinnerDetails = lazy(() => import("./Pages/WinnerDetails/TravelCashierWinnerDetails"));
const KMoneyWinnerDetails = lazy(() => import("./Pages/WinnerDetails/KMoneyWinnerDetails"));
const VideoGallery = lazy(() => import("./Components/VideoGallery"));
const SponsorShipTermsAndConditions = lazy(() => import("./Pages/2025/SponsorShipTermsAndConditions"));
const StartupPage = lazy(() => import("./Pages/2025/StartupPage"));
const Chatbot = lazy(() => import("./Components/ChatForm"));
const MsbGlobalOfTheYear = lazy(() => import("./Pages/MsbGlobalOfTheYear"));
const FinTechGlobaloftheYear = lazy(() => import("./Pages/FinTechGlobaloftheYear"));
const Blogs = lazy(() => import("./Pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("./Pages/Blogs/BlogDetails"));
const FinTechintheUK = lazy(() => import("./Pages/Blogs/FinTechintheUK"));
const TravelCashierDetails2025 = lazy(() => import("./Pages/2025/OurSponsors/TravelCashierDetails2025"));
const TruslyPayDetails2025 = lazy(() => import("./Pages/2025/OurSponsors/TruslyPayDetails2025"));
const MercuryDenatiDetails2025 = lazy(() => import("./Pages/2025/OurSponsors/MercuryDenatiDetails2025"));
const TicketBookingPage = lazy(() => import("./Pages/TicketBookingPage"));
const SuccessPage = lazy(() => import("./Pages/SuccessPage"));
const CancelPage = lazy(() => import("./Pages/CancelledPage"));
const TeeparamExchangeDetails2025 = lazy(() => import("./Pages/2025/OurSponsors/TeeparamExchangeDetails2025"));
const VolumePaySponsorDetails2025 = lazy(() => import("./Pages/2025/OurSponsors/VolumePaySponsorDetails2025"));
import ScrollToHashElement from "./Components/SliderBigBan/ScrollToHashElement";
const LeatherbackSponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/LeatherbackSponsorDetails"));
const AiMsbBlog = lazy(() => import("./Pages/Blogs/AiMsbBlog"));
const ClearJunctionDetails2025 = lazy(() => import("./Pages/2025/OurSponsors/ClearJunctionDetails2025"));
const SimonKeyNoteDetails = lazy(() => import("./Pages/2025/Keynotes/SimonKeyNoteDetails"));
const OchebhoyaKeyNoteDetails = lazy(() => import("./Pages/2025/Keynotes/OchebhoyaKeyNoteDetails"));
const LeftoverCurrency2025 = lazy(() => import("./Pages/2025/OurSponsors/LeftoverCurrency2025"));
const IfePaySponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/IfePaySponsorDetails"));
const Will_2025_Be_the_Year_of_Stablecoins = lazy(() => import("./Pages/Blogs/Will_2025_Be_the_Year_of_Stablecoins"));
const FinestPaySponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/FinestPaySponsorDetails"));
const BelyftedSponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/BelyftedSponsorDetails"));
const MyremitSponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/MyremitSponsorDetails"));
const LuminelawSponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/LuminelawSponsorDetails"));
const BaazMoneySponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/BaazMoneySponsorDetails"));
const QFRemitSponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/QFRemitSponsorDetails"));
const EndozDisbuzDetails2025 = lazy(() => import("./Pages/2025/OurSponsors/EndozDisbuzDetails2025"));
const KmbalSponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/KmbalSponsorDetails"));
const OurKeyNoteSpeakers = lazy(() => import("./Pages/OurKeyNoteSpeakers"));
const DiscussionPannelSection = lazy(() => import("./Pages/2025/DiscussionPannel/DiscussionPannelSection"));
const WayneFosterDPDetails = lazy(() => import("./Pages/2025/DiscussionPannel/WayneFosterDPDetails"));
const MarioVanPoppelDPDetails = lazy(() => import("./Pages/2025/DiscussionPannel/MarioVanPoppelDPDetails"));
const RedSeaDetails2025 = lazy(() => import("./Pages/2025/OurSponsors/RedSeaDetails2025"));
const ChrisboroughDetails2025 = lazy(() => import("./Pages/2025/OurSponsors/ChrisboroughDetails2025"));
const Awards_as_catalysts_Blog_04 = lazy(() => import("./Pages/Blogs/Awards_as_catalysts_Blog_04"));
const DenisKalyapinDPDetails = lazy(() => import("./Pages/2025/DiscussionPannel/DenisKalyapinDPDetails"));
const BharatRaiJudgeDetails2025 = lazy(() => import("./Pages/2025/JudgesSection/BharatRaiJudgeDetails2025"));
const GiordanoCorteseJudgeDetails2025 = lazy(() => import("./Pages/2025/JudgesSection/GiordanoCorteseJudgeDetails2025"));
const DavidJudgeDetails2025 = lazy(() => import("./Pages/2025/JudgesSection/DavidJudgeDetails2025"));
const OurDiscussionPanel = lazy(() => import("./Pages/OurDiscussionPanel"));
const Beyond_borders_how_brit_fintech = lazy(() => import("./Pages/Blogs/Beyond_borders_how_brit_fintech"));
const Winner2025 = lazy(() => import("./Pages/2025/Winner/Winner2025"));
const From_cash_counters_to_super_apps_the_evolution_of_msbs = lazy(() => import("./Pages/Blogs/From_cash_counters_to_super_apps_the_evolution_of_msbs"));
const NikhilSapreJudgeDetails2025 = lazy(() => import("./Pages/2025/JudgesSection/NikhilSapreJudgeDetails2025"));
const ECEXSponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/ECEXSponsorDetails"));
const VolumeWinnerDetails25 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/VolumeWinnerDetails25"));
const FastTrackWinnerDetails25 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/FastTrackWinnerDetails25"));
const DisbuzWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/DisbuzWinnerDetails2025"));
const LeatherbackWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/LeatherbackWinnerDetails2025"));
const EmarchantPayWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/EmarchantPayWinnerDetails2025"));
const IfepayWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/IfepayWinnerDetails2025"));
const AlonaShevtsovaWinnerDetails = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/AlonaShevtsovaWinnerDetails"));
const SumsubWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/SumsubWinnerDetails2025"));
const ShuftiProwinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/ShuftiProwinnerDetails2025"));
const KaniPaymentsWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/KaniPaymentsWinnerDetails2025"));
const PurseBassSponsorDetails = lazy(() => import("./Pages/2025/OurSponsors/PurseBassSponsorDetails"));
const GallarySection2025 = lazy(() => import("./Pages/2025/GallarySection25/GallarySection2025"));
const PhotoGallery2025 = lazy(() => import("./Pages/2025/GallarySection25/PhotoGallery2025"));
const RegistrationPhotos2025 = lazy(() => import("./Pages/2025/GallarySection25/RegistrationPhotos2025"));
const ChrisbourghWinnerDetails25 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/ChrisbourghWinnerDetails25"));
const AyoremitWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/AyoremitWinnerDetails2025"));
const KmbalWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/KmbalWinnerDetails2025"));
const MyremitWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/MyremitWinnerDetails2025"));
const BelyftedWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/BelyftedWinnerDetails2025"));
const TravelCashierLtdWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/TravelCashierLtdWinnerDetails2025"));
const MercuryDanatiLtdWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/MercuryDanatiLtdWinnerDetails2025"));
const TeeparamExchangeLtdWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/TeeparamExchangeLtdWinnerDetails2025"));
const LeftoverCurrencyWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/LeftoverCurrencyWinnerDetails2025"));
const RedSeaMoneyTransferWinnerDetails2025 = lazy(() => import("./Pages/2025/Winner/WinnerDetailsPages/RedSeaMoneyTransferWinnerDetails2025"));
const AllTestimonials = lazy(() => import("./Pages/AllTestimonials"));
const InsidetheBFAExperienceNetworkingEnergyandInnovation = lazy(() => import("./Pages/Blogs/InsidetheBFAExperienceNetworkingEnergyandInnovation"));
const VideoGallery2025 = lazy(() => import("./Pages/2025/VideoGallary25/VideoGallery2025"));
const TheBankinYourPocketHowEverydayAppsBecameGlobalBanks = lazy(() => import("./Pages/Blogs/TheBankinYourPocketHowEverydayAppsBecameGlobalBanks"));
const Awards24 = lazy(() => import("./Pages/Awards copy"));
const Awards2024 = lazy(() => import("./Pages/AwardsCategory"));
const AwardsCategory = lazy(() => import("./Pages/AwardsCategory"));
const Cbdc_Central_bank_digital_currencies = lazy(() => import("./Pages/Blogs/Cbdc_Central_bank_digital_currencies"));
const HowInstantPaymentsAreChangingConsumerExpectationsGlobally = lazy(() => import("./Pages/Blogs/HowInstantPaymentsAreChangingConsumerExpectationsGlobally"));
const ManagingFraudRisksinaRealTime = lazy(() => import("./Pages/Blogs/ManagingFraudRisksinaRealTime"));
const DigitalWallets = lazy(() => import("./Pages/Blogs/DigitalWallets"));
const AiPoweredRiskCompliance = lazy(() => import("./Pages/Blogs/AiPoweredRiskCompliance"));
const InvisibleFinancialBridge = lazy(() => import("./Pages/Blogs/InvisibleFinancialBridge"));
const FinancialInclusionUK = lazy(() => import("./Pages/Blogs/FinancialInclusionUK"));


function App() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

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
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsorship-categories" element={<Sponsers />} />
        <Route path="/sponsors" element={<Sponsers />} />
        <Route path="/awards" element={<Awards />} />
      
        {/* <Route path="/awards-category" element={<AwardsCategory />} /> */}
        <Route path="/awards-category" element={<Awards />} />
        <Route path="/registerfor-startup-pitch" element={<StartupPage />} />
        <Route path="/dinner-2024" element={<DinnerGallery />} />
        <Route path="/video-gallery-2024" element={<VideoGallery />} />
        <Route path="/video-gallery-2025" element={<VideoGallery2025 />} />
        <Route path="/ticket-booking" element={<TicketBookingPage />} />
        <Route path="/ticket-booking-test" element={<TicketBookingPage />} />

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
          path="/digital-wallets-the-gateway-to-the-future-of-financial-services"
          element={<DigitalWallets />}
        />
        <Route
          path="/ai-powered-risk-compliance-the-next-frontier-for-msbs-and-fintechs"
          element={<AiPoweredRiskCompliance />}
        />
        <Route
          path="/the-invisible-financial-bridge-how-msbs-power-migrant-and-cross-border-communities"
          element={<InvisibleFinancialBridge />}
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
        <Route
          path="/financial-inclusion-in-the-uk-how-fintech-is-bridging-the-gap-for-the-underbanked"
          element={<FinancialInclusionUK />}
        />
      </Routes>
      </Suspense>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;

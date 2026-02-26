import React from 'react';
import styled from 'styled-components';

import BrochureModal from './BrochureModal';

const BFA26Section = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <SectionWrapper>
      {/* Strip / Banner */}
      <Strip>
        <StripContent>
          <StripText>LOOKING AHEAD TO 2026</StripText>
        </StripContent>
      </Strip>

      {/* About Us Section */}
      <AboutContainer>
        <AboutContent>
          <AboutTextColumn>
            <Heading>Why attend BFA 2026?</Heading>
            <p>
              The Brit Fintech Awards 2026 is set to raise the bar once again—bringing together the innovators, disruptors, and industry shapers driving the next chapter of financial services. As the UK’s leading platform for recognising MSB and fintech excellence, the awards highlight the exceptional achievements of MSBs, startups, and established players across the sector.
            </p>
            <p>
              This year’s event introduces enhanced opportunities for engagement, including <strong>1-2-1 meetings, dedicated exhibit space</strong>, and expanded <strong>networking sessions</strong> designed to spark collaboration.
            </p>
            <p>
              Sponsors and participants gain access to strategic <strong>lead generation</strong>, premium <strong> brand-building</strong> and <strong>thought-leadership </strong>opportunities.
            </p>
            <p>
              Be part of an unforgettable evening where recognition meets opportunity - celebrating the innovation that will shape the future of finance.
            </p>

            {/* <DownloadButton onClick={() => setIsModalOpen(true)}>
              Download Brochure 2026
            </DownloadButton> */}
          </AboutTextColumn>
          <AboutImageColumn>
            <ImagePlaceholder>
              <img src="../assets/img/event-conference/About26Section.png" alt="BFA 2026" />
            </ImagePlaceholder>
          </AboutImageColumn>
        </AboutContent>
      </AboutContainer>

      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </SectionWrapper>
  );
};

const DownloadButton = styled.button`
  background: linear-gradient(90deg, #c8102e 0%, #680014 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin-top: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(200, 16, 46, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(200, 16, 46, 0.3);
    background: linear-gradient(90deg, #680014 0%, #c8102e 100%);
  }
`;

// Styled Components

const SectionWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 60px;
`;

const Strip = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #c8102e 0%, #680014 100%);
  padding: 20px 0;
  margin-bottom: 60px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const StripContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const StripText = styled.h2`
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 24px;
  letter-spacing: 2px;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const AboutTextColumn = styled.div`
  flex: 1;
`;

const AboutImageColumn = styled.div`
  flex: 1;
  width: 100%;
`;

const Heading = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 36px;
  color: #333333;
  margin-bottom: 25px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #666666;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const ImagePlaceholder = styled.div`
  width: 600px;
  height: 600px;
  
  border-radius: 20px;
  overflow: hidden;
  // box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 400px;
    width: 100%;
  }
`;

export default BFA26Section;


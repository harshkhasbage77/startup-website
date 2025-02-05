import { Theme, Button, Text, Heading, Box, Flex, Container, Section } from '@radix-ui/themes';
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

import NavigationMenuDemo from './components/NavigationMenu';

import './App.css';

const Navigation = () => (
  <NavigationMenu className="NavigationMenuRoot">
    <Box px="5" py="3">
      <Flex justify="center" align="center" gap="5" direction="row">
        <Flex align="center" gap="3">
          <Heading size="6">Material Innovators</Heading>
        </Flex>
      </Flex>
        <NavigationMenuDemo />
    </Box>
  </NavigationMenu>
);

const HeroSection = () => (
  <Section size="3" py="9">
    <Flex direction="column" align="center" gap="5">
      <Heading size="9" align="center">
        Next-Generation Material Solutions
      </Heading>
      <Text size="5" color="gray" align="center">
        Bridging innovation between nanotechnology and traditional industries
      </Text>
      <Button size="3" variant="solid">
        Explore Partnership Opportunities
      </Button>
    </Flex>
  </Section>
);

const SectionSection = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <Section id={id} size="3" py="9">
    <Flex direction="column" gap="5">
      <Heading size="8" mb="5">{title}</Heading>
      {children}
    </Flex>
  </Section>
);

const PartnerCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <Box p="5" style={{ 
    background: 'var(--color-panel-solid)', 
    borderRadius: 'var(--radius-4)', 
    flex: '1 1 300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <Heading size="5" mb="4">{title}</Heading>
    {children}
  </Box>
);

const ContactSection = () => (
  <Section id="contact" size="3" py="9">
    <Flex direction="column" gap="5" align="center">
      <Heading size="8">Get In Touch</Heading>
      
      <Flex gap="4" mt="3">
        <Button variant="solid" size="3">
          <EnvelopeClosedIcon />
          Email Us
        </Button>
        
        <Button variant="outline" size="3">
          <GitHubLogoIcon />
          GitHub
        </Button>
        
        <Button variant="outline" size="3">
          <LinkedInLogoIcon />
          LinkedIn
        </Button>
      </Flex>
      
      <Text size="2" color="gray" mt="5">
        © {new Date().getFullYear()} Material Innovators. All rights reserved.
      </Text>
    </Flex>
  </Section>
);

export default function App() {
  return (
    <Theme appearance="dark" accentColor="purple" grayColor="gray" panelBackground='translucent'>
      <Navigation />
      
      <Container size="4">
        <HeroSection />
        
        <SectionSection id="purpose" title="Our Purpose">
          <Text size="5">
            We're revolutionizing material science through sustainable innovation, 
            bridging cutting-edge technology with traditional manufacturing sectors.
          </Text>
        </SectionSection>
    
        <SectionSection id="technology" title="Our Technology">
          <Flex gap="4" direction="column">
            <Text size="5">Core Stack:</Text>
            <ul>
              <li><Text>Advanced nanotechnology platforms</Text></li>
              <li><Text>AI-driven material simulation</Text></li>
              <li><Text>Green chemistry processes</Text></li>
            </ul>
          </Flex>
        </SectionSection>

        <SectionSection id="partnerships" title="Partnership Opportunities">
          <Flex gap="4" wrap="wrap">
            <PartnerCard title="Target Industries">
              <ul>
                <li>Paints & Coatings</li>
                <li>Textile Manufacturing</li>
                <li>Industrial Materials</li>
              </ul>
            </PartnerCard>
            
            <PartnerCard title="Collaboration Models">
              <ul>
                <li>Technology Licensing</li>
                <li>Joint R&D Projects</li>
                <li>Custom Solutions</li>
              </ul>
            </PartnerCard>
          </Flex>
        </SectionSection>

        <ContactSection /> 
      </Container>
    </Theme>
  );
}



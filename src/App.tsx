import React from 'react';
import { Theme, Button, Text, Heading, Box, Flex, Container, Section } from '@radix-ui/themes';
import { NavigationMenu,NavigationMenuList,NavigationMenuItem,NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';

// import NavigationMenuDemo from './components/NavigationMenu';

import './App.css';

// const Navigation = () => (
//   <NavigationMenu className="NavigationMenuRoot">
//     <Box px="5" py="3" >
//       <Flex justify="end" align="stretch" gap="5" direction="row">
//         <Flex align="center" gap="3">
//           <Heading size="6">Material Innovators</Heading>
//         </Flex>

//         <NavigationMenuList className="NavigationMenuList">
//           <NavigationMenuItem>
//             <NavigationMenuLink className='NavigationMenuLink' href="#purpose">
//               <Button variant="surface">Purpose</Button>
//             </NavigationMenuLink>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuLink className='NavigationMenuLink' href="#technology">
//               <Button variant="surface">Technology</Button>
//             </NavigationMenuLink>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuLink className='NavigationMenuLink' href="#partnerships">
//               <Button variant="surface">Partnerships</Button>
//             </NavigationMenuLink>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuLink className='NavigationMenuLink' href="#contact">
//               <Button variant="classic">Contact</Button>
//             </NavigationMenuLink>
//           </NavigationMenuItem>
//         </NavigationMenuList>

//       </Flex>



//         {/* <NavigationMenuDemo /> */}
//     </Box>
//   </NavigationMenu>
// );


const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const toggleMobileMenu = () => {
  setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
  <NavigationMenu className="NavigationMenuRoot">
    <Box px={{ initial: '3', md: '5' }} py="3">
      <Flex direction="row" align="center" justify="between">

      {/* <NavigationMenuLink className='NavigationMenuLink' href="/"> */}
        <Heading size={{ initial: '5', md: '6' }}>Material Innovators</Heading>
      {/* </NavigationMenuLink> */}
      <Flex justify="between" align="center" gap="5" direction="row">

        {/* Desktop Menu */}
        <NavigationMenuList className="NavigationMenuList DesktopMenu">
          <NavigationMenuItem>
            <NavigationMenuLink className='NavigationMenuLink' href="#purpose">
              <Button variant="surface" size={{ initial: '2', md: '3' }}>Purpose</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className='NavigationMenuLink' href="#technology">
              <Button variant="surface" size={{ initial: '2', md: '3' }}>Technology</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className='NavigationMenuLink' href="#partnerships">
              <Button variant="surface" size={{ initial: '2', md: '3' }}>Partnerships</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className='NavigationMenuLink' href="#contact">
              <Button variant="classic" size={{ initial: '2', md: '3' }}>Contact</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Mobile Menu Button */}
        {isMobileMenuOpen && (
          <NavigationMenuList className="MobileMenu">
            <NavigationMenuItem>
              <NavigationMenuLink className='NavigationMenuLink' href="#purpose">
          <Button variant="surface">Purpose</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className='NavigationMenuLink' href="#technology">
          <Button variant="surface">Technology</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className='NavigationMenuLink' href="#partnerships">
          <Button variant="surface">Partnerships</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className='NavigationMenuLink' href="#contact">
          <Button variant="classic">Contact</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        )}

        <Button 
          variant="ghost" 
          className="MobileMenuButton" 
          style={{ display: 'none' }} 
          onClick={toggleMobileMenu}
        >
          <HamburgerMenuIcon width="18" height="18" />
        </Button>

      </Flex>
      
      </Flex>

    </Box>
  </NavigationMenu>
);
}

const HeroSection = () => (
  <Section size={{ initial: '2', md: '3' }} py={{ initial: '7', md: '9' }}>
    <Flex direction="column" align="center" gap={{ initial: '3', md: '5' }}>
      <Heading size={{ initial: '7', md: '9' }} align="center">
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
  <Section id={id} size="3" py="6" className='section'>
    <Flex direction="column" gap="5">
      <Heading size="8" mb="5">{title}</Heading>
      {children}
    </Flex>
  </Section>
);

// const PartnerCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
//   <Box p="5" style={{ 
//     background: 'var(--color-panel-solid)', 
//     borderRadius: 'var(--radius-4)', 
//     flex: '1 1 300px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//   }}>
//     <Heading size="5" mb="4">{title}</Heading>
//     {children}
//   </Box>
// );

const PartnerCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <Box p={{ initial: '3', md: '5' }} style={{ 
    flex: '1 1 300px',
    minWidth: '250px'
  }}>
    <Heading size="5" mb="4">{title}</Heading>
    {children}
  </Box>
);

const ContactSection = () => (
  <Section id="contact" size="3" py="9">
    <Flex direction="column" gap="5" align="center">
      <Heading size="8">Get In Touch</Heading>
      
      <Flex gap="4" mt="3" direction={{ initial: 'column', md: 'row' }}>
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
    <Theme
      appearance="dark"
      accentColor="purple"
      grayColor="gray"
      panelBackground="translucent"
      radius="medium"
      scaling="100%"
    >
      <Navigation />
      
      <Container size={{ initial: '1', md: '4' }} className='container'>

        <HeroSection />
        
        <SectionSection id="purpose" title="Our Purpose" >
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



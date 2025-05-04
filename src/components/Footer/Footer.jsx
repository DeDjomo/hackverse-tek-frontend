// components/Footer/Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { 
  FooterContainer,
  FooterContent,
  PartnerSection,
  ContactInfo,
  LegalLinks,
  SocialMedia,
  Copyright
} from './Footer.styled';

const Footer = ({ theme }) => {
  return (
    <FooterContainer theme={theme}>
      <FooterContent>
        {/* Section Partenaires */}
        <PartnerSection>
          <h3>Nos Partenaires</h3>
          <div className="partners-grid">
            <div className="partner-item">
              <img 
                src={process.env.PUBLIC_URL + '/partners/glub-gi.png'} 
                alt="GLUB Génie Informatique" 
              />
              <span>GLUB GI</span>
            </div>
            <div className="partner-item">
              <img 
                src={process.env.PUBLIC_URL + '/partners/debat-eloquence.png'} 
                alt="Club Débat & Éloquence" 
              />
              <span>Débat & Éloquence</span>
            </div>
            <div className="partner-item">
              <img 
                src={process.env.PUBLIC_URL + '/partners/afenspy.png'} 
                alt="AFENSPY" 
              />
              <span>AFENSPY</span>
            </div>
            <div className="partner-item">
              <img 
                src={process.env.PUBLIC_URL + '/partners/antic.png'} 
                alt="ANTIC" 
              />
              <span>ANTIC</span>
            </div>
          </div>
        </PartnerSection>

        {/* Section Contact */}
        <ContactInfo>
          <h3>Contact</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              ENSPY, BP 1097 Yaoundé, Cameroun
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              contact@enspy-officiel.cm
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              (+237) 654 897 423
            </li>
          </ul>
        </ContactInfo>

        {/* Liens légaux */}
        <LegalLinks>
          <h3>Liens Utiles</h3>
          <ul>
            <li><a href="/mentions-legales">Mentions légales</a></li>
            <li><a href="/confidentialite">Politique de confidentialité</a></li>
            <li><a href="/conditions">Conditions d'utilisation</a></li>
            <li><a href="/campus">Vie sur le campus</a></li>
          </ul>
        </LegalLinks>

        {/* Réseaux sociaux */}
        <SocialMedia>
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://facebook.com/enspy" target="_blank" rel="noreferrer">
              <img src="/social/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://linkedin.com/school/enspy" target="_blank" rel="noreferrer">
              <img src="/social/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/enspy" target="_blank" rel="noreferrer">
              <img src="/social/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </SocialMedia>
      </FooterContent>

      <Copyright theme={theme}>
        © {new Date().getFullYear()} ENSPY - École Nationale Supérieure Polytechnique de Yaoundé
        <br />
        Tous droits réservés | Développé par les étudiants du GLUB GI
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
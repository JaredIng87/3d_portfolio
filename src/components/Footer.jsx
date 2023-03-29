import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { styles } from '../styles';
import { SectionWrapper} from '../hoc';

function Footer() {

  return (
<div>
      <footer className="footer">
      <div className='social'>
      <SocialIcon url="https://www.linkedin.com/in/jared-ingersoll-ab9210263/"  bgColor="#3a3a3a"/>
      </div>
    <div className='social'>
      <SocialIcon className='social' url="https://github.com/JaredIng87"  bgColor="#3a3a3a"/>
      </div>
      </footer>
    </div>
  );
}

export default SectionWrapper(Footer, "");
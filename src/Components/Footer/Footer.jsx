import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';

const FooterMain = () => {
  return (
    <div>
      <Footer container className='border-t-2 text-center'>
      <h1 className='text-sm'>Developed by <a className='underline' href='https://allmyprojects-jobayer.netlify.app' target='_blank'>Jobayer Rahman</a></h1>
      <Footer.Copyright href="/" by="Hero J Tech ™" year={2023} />
      <Footer.LinkGroup className='hidden md:flex'>
        <Link to="/contact">Contact</Link>
      </Footer.LinkGroup>
    </Footer>
    </div>
  )
}

export default FooterMain

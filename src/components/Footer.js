import React from 'react';
import Button from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    If you have any questions regarding my information, 
                    feel free to contact me.
                </p>
                <p className='footer-subscription-text'>
                    如果有什么疑问，欢迎来联系我！
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Type here"
                        className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>Send</Button>
                    </form>
                </div>    
            </section>
            {/*<div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About me</h2>
                        
                    </div>
                </div>
    </div>*/}
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo'>
                            MC <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>
                        MC @2021
                    </small>
                    <div className='social-icons'>
                        <Link className='social-icon-link'
                        to= {{ pathname: 'https://www.facebook.com/terence.cai.0814'}}
                        target='_black'
                        aria-label='Facebook'
                        >
                            <i className='fab fa-facebook' />

                        </Link>
                        <Link className='social-icon-link'
                        to= {{ pathname: 'https://www.linkedin.com/in/terry-cai-970814/'}}
                        target='_black'
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />

                        </Link>
                        <Link className='social-icon-link'
                        to= {{ pathname: 'https://github.com/a605005354'}}
                        target='_black'
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-github' />

                        </Link>
                    </div>
                    </div>
            </section>
        </div>
    )
}

export default Footer

import './CtaStyles.css'

export const Cta = ()=>{
    return (
        <>
        <div className="cta" id='cta'>
            <p className='cta-follow'>Follow My Journey</p>
            <p>Sign up with your email adress to receive news and updates  </p>
            <div className='input-btn'>
                <input type="email" name="mail" id="" placeholder='Email Adress'/>
                <button className='cta-signup'>Signup</button>
            </div>
            <p className='cta-terms'>We respect your privacy.Please read my <span>Terms of Use</span> & <span>Privacy Policy</span>  pages to learn more.</p>
        </div>
        </>
    )
}
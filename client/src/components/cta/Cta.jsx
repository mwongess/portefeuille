import './CtaStyles.css'

export const Cta = ()=>{
    return (
        <>
        <div className="cta">
            <p className='cta-follow'>Follow My Journey</p>
            <p>Sign up with your email adress to receive news and updates  </p>
            <div>
                <input type="email" name="mail" id="" placeholder='Email Adress'/>
                <button>Signup</button>
            </div>
            <p className='cta-terms'>We respet your privacy.Please read my <span>Terms of Use</span> & <span>Privacy Policy</span>  pages to learn more.</p>
        </div>
        </>
    )
}
import React from 'react'
import css from './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <a href="https://ffg-lyart.vercel.app/" target="blank"><img src="https://moonlit-pithivier-51e278.netlify.app/static/media/lg.e2fffa5c2964d9ac5d05.webp" alt="GymFit Logo" /></a>
          <h2>figure fit gym</h2>
        </div>
        <div className="footer__info">
          <p>123 Gym Street, Cityville</p>
          <p>Email: info@figure_fit_gym</p>
          <p>Phone: 9461163695</p>
        </div>
        <div className="footer__social">
          <a href="mailto:info@gymfit.com"><img src="data:image/png;base64,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" alt="Gmail" /></a>
          <a href="https://www.facebook.com/gymfit" target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEU6WJf////09fgjSZAtT5Klsc03VpY1VJWvutMxUpSDkrdnfq/s7/VPa6Pv8vdFYZ3R2Obd4etac6jDzN99kLkgR4+zvdVJY50/XJmrtdBzhK+Pn8GcqsnJ0eLU2+i6xNp1ibTj5+5qgK+NnL9WcKVheKqEk7ggbkZZAAAEjklEQVR4nO3d65aiOBSG4YBhhwzKuUrp8tDaZd3/JbaUrU3N6BChTLJZ3/tf5VmAEAIqgk5pEddlJjiXlXVcpF2U6PiahKQicr2QoyJSkpI4vSEMo0wr18v3TSmdReG/hflB8l55XyOZ5F+FVTaV9XdJZVVX2KgprcBzpJq/wmqCwJZYXYR5NkXgiZjlZ2GYTG0fvKSS8FMYSddL8rRk1ArnE91G2yibn4Sxdr0cT0w3gUgnuxe2qSQVxXS30TYqRDzd75k2GYt6yhvpaTOtRTnxrbQUvAe8vdHEfQghhBBCCCF0iZTSWsu22TV5jvvonUhLvVqUyY/6bd3sqk2+3RZFsd3mm021e22i9YEvsZ3onMmyjnabYn6dCvxPr0wvMp3WnVge3vL0Pu1PTC+jaX1cV/M+HFuhklRvzXgshYoOr6Y6jkIlj5veXY+xkNRx8xCPm1CJ6LH1x0xIuiwe9nESklw/vgI5CU/AIT4+QhLVMCAboXzoGMhPSCoeCmQilG+DgTyE6n3QtygfIWXb4UAWwqHHCTZCWowBMhCSHnok5CLU9YivGRbC1ZivGQ5C/XMc0Hsh6SEjJk7C0avQe6F4+KoFM+HnXdiTFspmLNBzIcnRq9BzofoxGui5UI7+nvFcSIv9MFUYptdJKa9n1/THY650X63r42K5OrdclIf67afPM6T6kasz26ZeypnU6vqIKxEp7fUjoaTMz9iqQ6Y1u9vRaWnq2yQzfjzRjgwNgTvB9KklaTi4/8X18WTSeyPgmitQqHejufqG6RYq2od1TE5Kc8Y/f2B2mfTo8/GuJ2Uy3bTju40KsTI47Q45P1ZHS4MzmoLzA8q0SPuFG58HDn1R2Q88HQtdL+aIjMb3Xg+N+jIaHL4z3g3NDoeuF3JURhcS2Z6StsmdgfDF9VKOaWZywOctNJg33M9cL+WYXvb9wu3khTlvocH4l/VJm3gxGP9WrIUzA+EOQq8zEXo969IbhG1ezw32ZiJsIPQ6CNt4/Ngh6duZnNNEszsv7uR8jEyr+uOfW5nMWlT1zZd2+zi6JtLC+GnQYTk/okAIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEII4fcJxz9y/785vyOFVsfkZqXJPVF3Xtvp4P5mdyJ1M7NZ7tuv7eYceLfp3KlwLwgh9D8IIfQ/CCH0Pwgh9D8IIfQ/CCH0Pwgh9D8IIfQ/CCH0Pwgh9D8IIfQ/CCH0Pwgh9D8IIfQ/CCH0Pwgh9D8IIfQ/CCH0Pwgh9D8IIfQ/CCH0Pwgh9D8IIXyo7Jve56HsCSkTpYtn2i0KS+Hkzz7tCVUtnPx4hj2hjEUx8a20EGniYDO1JlRJKpz897U1oW4CEcwd/O2uLSFl85PQxcmDLaGMglYY2t8TLQlVEn4Kg9z6dmpHSFkenIVBZfvHeqwISVXBRRg0lok2hKTOf8l7FgZVZnVftCBUWRV0hUGe2PyD4acLSSZ58FUYhFGmra3HJwuVzqLrJ4i/bzmPE5KKbKzK5wmJlKQk7vzWn+i+aVrEdWljSPw8YVbWcZF23+c37cpYpLKq1ykAAAAASUVORK5CYII=" alt="Facebook" /></a>
          <a href="https://www.instagram.com/gymfit" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnzfYSYQsL7r5iyAsWi0cCTEsiogPVUE6cQ&s" alt="Instagram" /></a>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} GymFit. All rights reserved.
      </div>
    </footer>
  )
}
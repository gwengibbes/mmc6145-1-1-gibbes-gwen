import Header from '../components/header'
import styles from '../styles/home.module.css'

export default function Contact() {
  return (
    <div>
      <Header/>
      <main>
        <h1>Let's get in touch!</h1>
        <div className={styles.bodyText}>
          <div>I would love to hear from you!</div>
          <div>Please contact me by email. </div>
          <div>Email: <a href="mailto:ggibbes@ufl.edu">ggibbes@ufl.edu</a></div>

          Here is a link to more information about me: 	
          <ul>
          <li>
            <a href="https://github.com/gwengibbes?tab=repositories" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
          </li>
            </ul>
        </div>
      </main>
    </div>
  )
}
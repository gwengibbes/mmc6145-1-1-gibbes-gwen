import Project from '../components/project'
import styles from '../styles/home.module.css'
import Header from '../components/header'
import visualHeirarchyImage from '../../images/VisualHeirarchyProject.png'
import magazineLayout1 from '../../images/MagazineLayout1.png'
import styleGuideBrandIdentity1 from '../../images/StyleGuideBrandIdentity1.png'

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <h1 className={styles.textCenter}>Gwen Gibbes </h1>
        <div className={styles.introText}>
          Design | Web Design | Online Communication <br/>
          Please scroll down to see some of my work. 
        </div>

        <ul className={styles.projects}>
          <li className={styles.project}>
            <Project name="Visual Hierarchy" image={visualHeirarchyImage}></Project>
          </li>
          <li className={styles.project}>
            <Project name="Magazine Layout" image={magazineLayout1}
                ></Project>
          </li>
          <li className={styles.project}>
            <Project name="Style Guide Brand Identity" image={styleGuideBrandIdentity1}></Project>
          </li>
        </ul>
      </main>
    </div>
  )
}
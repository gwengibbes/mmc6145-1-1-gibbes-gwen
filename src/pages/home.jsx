import Project from '../components/project'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <main>
      <h1 className={styles.placeholder}>Gwen Gibbes </h1>
      <div>
        Design | Web Design | Online Communication
        Please scroll down to see some of my work. 
      </div>

      <ul className={styles.projects}>
        <li>
          <Project name="Visual Hierarchy" image="https://blog.masterofproject.com/wp-content/uploads/2019/10/project-plan-example-2.jpg"></Project>
        </li>
        <li>
          <Project name="Magazine Layout" image="https://blog.masterofproject.com/wp-content/uploads/2019/10/project-plan-example-2.jpg" 
               ></Project>
        </li>
        <li>
          <Project name="Style Guide Brand Identity" image="https://blog.masterofproject.com/wp-content/uploads/2019/10/project-plan-example-2.jpg" 
               ></Project>
        </li>
      </ul>

    </main>
  )
}
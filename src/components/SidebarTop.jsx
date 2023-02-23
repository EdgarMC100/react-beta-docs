import styles from './SidebarTop.module.css'
export default function SidebarTop ({ children }) {
  return (
    <div className={styles.sidebarTop}>
      {children}
    </div>
  )
}

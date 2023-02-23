import styles from './Sidebar.module.css'
export default function Sidebar ({ style, children }) {
  console.log(style)
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  )
}

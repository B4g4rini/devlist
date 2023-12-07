import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
    <div className={styles.container}>
        <h1 className={styles.title}>To-Do List</h1>
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
    </div>
    </header>
  )
}

export default Header
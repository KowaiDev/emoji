import styles from '../styles/Home.module.scss'

export default function backToTop() {
    window.onscroll = _ => {
        const element = document.querySelector('div[top]')
        window.scrollY > 0 ? element.setAttribute('top', 'false') : element.setAttribute('top', 'true')
    }
    return <div className={styles.backToTop} top="" onClick={_ => window.scrollTo(0, 0)}>➜</div>
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import dynamic from 'next/dynamic'

const BackToTop = dynamic(() => import('./backToTop.js'), { ssr: false })
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emoji Guardian</title>
        <meta name="description" content="A bot for emoji servers." />
        <link rel="icon" href="icon.png" />
      </Head>

      <BackToTop />

      <nav className={styles.nav}>
        <div className={styles.content}>
          <img src="icon.png" />
          <h1>Emoji Guardian</h1>
          <div className={styles.tabs}>
            <div>About</div>
            <div>Documentation</div>
            <div>Discord</div>
            <div className={styles.icon}>+</div>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.content}>
            <div>
              <h1>Emoji Guardian</h1>
              <p>Emoji Guardian is a bot, especially for emoji servers.</p>
              <p>You can do things like lock and emoji to a role and create a lost of your server's emojis with the emojis and ids, but you can also use a command to add emojis from other servers to your own server.</p>
              <div className={styles.external}>
                <div>Add the bot</div>
                <div>Support Server</div>
              </div>
            </div>
          </div>
          <div className={styles.video}>
            Video
          </div>
        </section>

        <section className={styles.team}>
          <h1>Team</h1>
          <div className={styles.people}>

            <div className={styles.person}>
              <div className={styles.data}>
                <img src="icon.png" />
                <h1>User Name</h1>
                <p>Profession</p>
                <img src="icon.png" />
              </div>
            </div>

            <div className={styles.person}>
              <div className={styles.data}>
                <img src="icon.png" />
                <h1>User Name</h1>
                <p>Profession</p>
                <img src="icon.png" />
              </div>
            </div>
            <div className={styles.person}>
              <div className={styles.data}>
                <img src="icon.png" />
                <h1>User Name</h1>
                <p>Profession</p>
                <img src="icon.png" />
              </div>
            </div>
            <div className={styles.person}>
              <div className={styles.data}>
                <img src="icon.png" />
                <h1>User Name</h1>
                <p>Profession</p>
                <img src="icon.png" />
              </div>
            </div>
            <div className={styles.person}>
              <div className={styles.data}>
                <img src="icon.png" />
                <h1>User Name</h1>
                <p>Profession</p>
                <img src="icon.png" />
              </div>
            </div>
            <div className={styles.person}>
              <div className={styles.data}>
                <img src="icon.png" />
                <h1>User Name</h1>
                <p>Profession</p>
                <img src="icon.png" />
              </div>
            </div>
          </div>
        </section>


        <section className={styles.reviews}>
          <h1>Reviews</h1>
          <div className={styles.featured}>

            <div className={styles.review}>
              <div className={styles.user}>
                <img src="icon.png" />
                <p>Username#0000</p>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className={styles.star}>
                <img src="icon.png" />
                <img src="icon.png" />
                <img src="icon.png" />
                <img src="icon.png" />
                <img src="icon.png" />
              </div>
            </div>


            <div className={styles.review}></div>

            <div className={styles.review}></div>

            <div className={styles.review}></div>

            <div className={styles.review}></div>

            <div className={styles.review}>
              <div className={styles.user}>
                <img src="icon.png" />
                <p>Username#0000</p>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className={styles.star}>
                <img src="icon.png" />
                <img src="icon.png" />
                <img src="icon.png" />
                <img src="icon.png" />
                <img src="icon.png" />
              </div>
            </div>
          </div>

          <div className={styles.note}>
            <p>Want to show your appreciation for Emoji Guardian?</p>
            <h1>Vote for her on Top.gg and leave a review: <a>Click here</a></h1>
          </div>

          <footer className={styles.footer}>
            <div>
              <div><img src="icon.png" /></div>
              <div style={{ display: 'flex' }}>
                <div>Terms</div>
                <div>Privacy</div>
              </div>
            </div>
            <div>
              <h3>Company</h3>
              <div><a>About</a></div>
              <div><a>Documentation</a></div>
              <div><a>Team</a></div>
            </div>
            <div>
              <h3>Connect</h3>
              <div><a>Support Server</a></div>
            </div>
            <div>
              <h3>Project</h3>
              <div><a>Icons</a></div>
            </div>
          </footer>
          <hr className={styles.hr} />

          <div className={styles.note} style={{height: '100px'}}>
            <p>© emoji guardian 2019-2022 | Not Affiliated with Discord.</p>
          </div>
        </section>
        
      </main>
    </div>
  )
}
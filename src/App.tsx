import './App.css'
import avatar from "./assets/avatar.jpg"
import github from "./assets/socials/github.svg"
import discord from "./assets/socials/discord.svg"
import x from "./assets/socials/x.svg"
import twitch from "./assets/socials/twitch.svg"
import youtube from "./assets/socials/youtube.svg"

import csharp from "./assets/tecnologies/c-sharp.svg"
import docker from "./assets/tecnologies/docker.svg"
import git from "./assets/tecnologies/git.svg"
import java from "./assets/tecnologies/java.svg"
import js from "./assets/tecnologies/js.svg"
import kotlin from "./assets/tecnologies/kotlin.svg"
import spring from "./assets/tecnologies/spring.svg"

function App() {
  return (
    <>
      <main className={"main"}>
        <div id="expanded-card"></div>
        <section className={"column"}>
          <div className={"card"}>
            <h2 style={{alignSelf: "center"}}>KiNgchev</h2>
            <img src={avatar} alt={"kingchev avatar"} className={"avatar"}/>
            <div className={"info-table"}>
              <table style={{width: "80%", margin: "auto"}}>
                <tbody>
                <tr>
                  <td className={"table-ceil"}>
                    <h3 className={"table-header"}>Pronouns:</h3>
                  </td>
                  <td className={"table-ceil"}>
                    <a>kiNgchev, Hisoka Morrow</a>
                  </td>
                </tr>
                <tr>
                  <td className={"table-ceil"}>
                    <h3 className={"table-header"}>Age:</h3>
                  </td>
                  <td className={"table-ceil"}>
                    <a>Seventeen, 17</a>
                  </td>
                </tr>
                <tr>
                  <td className={"table-ceil"}>
                    <h3 className={"table-header"}>Location:</h3>
                  </td>
                  <td className={"table-ceil"}>
                    <a>Russian Federation</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={"card"}>
            <h2 style={{alignSelf: "center"}}>Socials</h2>
            <div className={"socials"}>
              <a target={"_blank"} href={"https://github.com/kiNgchev"}>
                <img src={github} alt={"kingchev github"} className={"social"}/>
              </a>
              <a target={"_blank"} href={"https://discord.com/users/743878110747033691"}>
                <img src={discord} alt={"kingchev discord"} className={"social"}/>
              </a>
              <a target={"_blank"} href={"https://x.com/TheKiNgchev?t=XMZWxPmnL9kAAum9iMfBEQ&s=09"}>
                <img src={x} alt={"kingchev x"} className={"social"}/>
              </a>
              <a target={"_blank"} href={"https://www.twitch.tv/k1ngchev"}>
                <img src={twitch} alt={"kingchev twitch"} className={"social"}/>
              </a>
              <a target={"_blank"} href={"https://www.youtube.com/@_k1ngchev"}>
                <img src={youtube} alt={"kingchev youtube"} className={"social"}/>
              </a>
            </div>
          </div>
        </section>
        <section className={"column"}>
          <div className={"card"}>
            <h2>Bio</h2>
            <p>Heeeeey... Hello! I'm a Kotlin & Go & Rust enjoyer. I wanna be cool at backend development. Right now this website may look not coll, but I will in future rework this page.</p>
          </div>
          <div className={"card"}>
            <h2>What have i mastered?</h2>
            <div className={"technologies"}>
              <img className={"technologie"} src={csharp}/>
              <img className={"technologie"} src={docker}/>
              <img className={"technologie"} src={git}/>
              <img className={"technologie"} src={java}/>
              <img className={"technologie"} src={js}/>
              <img className={"technologie"} src={kotlin}/>
              <img className={"technologie"} src={spring}/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

//

export default App

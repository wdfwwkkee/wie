import Event from "./components/EventsComponent/Event";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Links from "./components/Links/Links";
import News from "./components/News/News";
import "./components/styles/style.scss"

function Home() {

  const EventItems = [
    {
      id: 1,
      date: "2 января 2020 г. – 7 января 2020 г.",
      title: "ЭКСПО ЕЛКА",
      desc: "Парк интерактивных развлечений",
      image: "https://s3-alpha-sig.figma.com/img/b35c/848f/f73699e0d8d1622cd252142583e3083e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bPI3hTr7JA~~JVQEw3If4QMzCMmni3vPQtIUfdACb77CU2wbLylEDbZY1ayjWH~ZRrSyzQXzP4qqM40hxFrWs~gs9LjJYXlVpxPTHC3zgIgbeLQHf7oHS0p-3udtk3I8PlE3Azg-rri0o15qKps-GKEfv3wtGFDbY-IjgDS4xxcOzc0FxDJ0dQvTKkW~PVnK7v~q3l3V2ILslXCnsJUCZeylE7v02hC0N5oRWVwgcrjPDkNY9Dut2GECKu1Hb10sadVsR6C4eudboCHuG2hysr2hZZg7s6VaMesaogmnqYExXmAzfJ5u~oaThP9wXsNjjJ9EwuDWhd74RSqERksTdg__"
    },
    {
      id: 2,
      date: "5 февраля 2020 г. – 9 февраля 2020 г.",
      title: "Junwex Петербург",
      desc: "Выставка ювелирных изделий",
      image: "https://s3-alpha-sig.figma.com/img/9b7f/1375/0444c1b233090cccc35a2b15944e05f0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=In4dm5nlU1G-qq-~90~m~Z7QGA0JpRrA7RIviUKXT5KyI8ZBpMwoH0xhKGJKpJXD2EfbDVezZiLYf1zutBni2jrzu7Xi0kbWTUrbdKbBOL2CEQseHTsh-SOt-JSWwCsGq8fjFfsHw~NjJLYEHLBSHOE2j0TmI1TFGPxVcuKQ~9PmrzZvN8mFi7jRmvS5GDIS5AkVt1sVFKnxvHMYOHbixi3o75h7YbBxHPy5CXQ1~jyu2ZQ-3mTW1lMr4~5ID6kP8uWnI9e5w63AaEaIXk1LZf1oFOS0m3wZ2XmTUlrK5y~coXyxPwfl60qgvlI6rMHiVLKc7lFMXdJ0PSrhVOLIIg__"
    },
    {
      id: 3,
      date: "7 февраля 2020 г. – 9 февраля 2020 г.",
      title: "Невский ларец",
      desc: "Выставка-ярмарка народных художественных промыслов и ремесел",
      image: "https://s3-alpha-sig.figma.com/img/f1f5/ff4f/77a93d7d4f75da00d58fb1b0c4ff1e11?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKaeM4vVznp8nyKSEUKSFlu5hB2xJook-CJbmx8NxID~i3Uj5azvuOeiK1APLqmBRoXaK1mkBDe9EXqRTVVFU4J~4UP7Yyjm3agADWLnU0PTBYswQS6~JcM7LAlTEeG9sxWf8wd2qMit3WlZLv-vsvch2AeFBUJLQa86~~1ADLhQECUv~811vRlTA~lPvqti2ps~QDU8Jzo0jJZR3XgZ~fD4hZnmJKQN8mLy-mZxkYicdPesKLQdLJu5YRcMvY0wo~JGYig~sGMxvq9OwTxzWYfQfGiFJQImb7nJzULAW~Ys6B-fe5virRPYEb7Nx-spqwSAs0jlO37iAcHF-eh91g__"
    },
    {
      id: 4,
      date: "14 февраля 2020 г. – 23 февраля 2020 г.",
      title: "ПОНАЕХАЛИ!",
      desc: "Специализированная арт-ярмарка",
      image: "https://s3-alpha-sig.figma.com/img/f7fa/c30e/6aea3c17432d47948ba718b2828b7661?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WJwIm3B482wfoCaBxE-UzjRNu89zW9H6AyGMuMKb2CrS4741GbvCdEBXjDEotYc2-nutl-NK3mIyhRTC3OL33HvWgm-Q6FI1VIkKXsY6o0Ee2nCzOU4lBQ6RpaYQNbp4uIfIBpr1b4PuKnD19snsbS0p1fNTnFZPBBB28H9DE2dGATueG-5xQ86WVu5J-xKkzB2nMTxICk4CHHZFGeuEVwyLFya4BKc5q5aCqfFShrqwAiXZMqF8XLqxQRMmI7BVtB6swNK0y0byTGcTkgWW60LBdfDlWlLAC8eoWPBRvwbwfZPfRTinNvE6N24sjxUtMcptGJ0VVNaOzybGKwBsCQ__"
    },
    {
      id: 5,
      date: "18 февраля 2020 г. – 21 февраля 2020 г.",
      title: "VET.CAMP",
      desc: "Конференция для ветеринарных врачей",
      image: "https://s3-alpha-sig.figma.com/img/4dbc/f784/9ae8cb2d88777dd9b7c4cfd35ae4b9ca?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SdEvVNEIQ0Tnv7Uka45ZDCrEIvTndwCwH6O0QLW~S-lfSJyt-eSHKVddID8gx2t4A1xeSDekz-hkkYnEWoWZw8aDGOT2BV4PzrFJjGq~4fWE6st4W~~gDxho22sYQJvyPMdFZndkVe1V-rvz1FHiWH-~owNSEQNKGorwt9HnMCeG6hGGxUagdnWT0mRffGfLi2NQ~4MRZYh6Cykm34DzC3m1YkevBlR-pz7TXZ1Y8tbiz4DB1VS84eIf5FtBQ1xjeU53BmqXrsBgX1poGPLri~b5ZEWS1MT3RLTtTkd0RthLK2pleN6bG3xc66OR2R2GEauMQiUc71-xc9ZB6mKaCg__"
    },
    {
      id: 6,
      date: "26 февраля 2020 г. – 28 февраля 2020 г.",
      title: "ExpoHoReCa",
      desc: "Специализированная выставка",
      image: "https://s3-alpha-sig.figma.com/img/e395/38bb/3c6bcf7fd644746bb8c2dc8c6889862d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbJutn00uU-59MoyIv47JJeK21FnRysEAemMcwVPerg5MiYlgM8gfJCdREs~6wSnWCUtFSZpfhGYP6nik-96uHp3pMZ4EeDAETdH4CR~VYYRbpKZW42QO7-hSD8ytx1XgQEsR3M58~IfNvkl4G4~uqWjrP0QaryYEw-C48WgiAauEr9xcjFwnG8Us~PSqVZz1CK59wobc~IvBJyKe~AuBEZNpjEJhYFJd~7rA1W6Rvx5HecdbqBK~szif~1L03dFfH41aKoE0sO9sTk4ZBFfTcsZgoynhIpZ1-Q2JFbSaVdF4j0cCWexe5Fyr1Thq4GU6TixqRR6jfWZeSNtyIbmxg__"
    }
  ]
  const newsItems = [
    {
      id : 1,
      title : "Как объединилась реальность и виртуальность – LIKEE PARTY",
      date : "4 января 2020 г.",
      image : "https://s3-alpha-sig.figma.com/img/9b5e/c46f/3d75a2a7abc017512522b80ca5287491?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMI1rKbjgZZ3Qfi5dJYv3-l6VHf6MLAH-HOOfW3lFEFFV~c2~NO7pVN5BaQVNyM-N7N6Xz7N~h0--6tSG23IdqVjlmQnAhFT2aDBU5F~oiC49PjFG3s05AyQ9UkSGOCRC8-u9cbdTOPKsgDrdE3Iayp7FeGhC1qYvwr0d9RTLBqo5wWJVXN5vng0DstrQTB~PM4CvKwIkLF65nB-dm2ZdLLltvRszM41aSdi7qWGa3s9wCNQt5Emmi3WbdeWZcKa1lF7FP88-RUl44BIo6DGOprwdOo0vw~61jRXvpJFFpvWzXFR4mQWITRiPGKJhtBPEJC7q3D2OxPlVaET44WD3w__"
    },
    {
      id : 2,
      title : "Как объединилась реальность и виртуальность – LIKEE PARTY",
      date : "2 января 2020 г.",
      image : "https://s3-alpha-sig.figma.com/img/5555/7b7e/89370e6a844bdf57e6b1255cf3fa84e5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d-vlhhPm3huUS9GHkcHplp-5gHlz39LslPChXyBzZNsNSile-SyN0AbO9b~8HwgVme~JeiLyHIxn3IaNBkeE43IjmO4~uiobKRFw9xoRLSy47fFfxTHXzBMZWoFBPfyAkokaxlDQ~khLE8rdHlD9qpo83QglK-mhikqkUQJDHLu-f75t7-cJY9Z5ohdh9ZcjVs72pQR~2iPqrEDOv-DmTjGzQ5UGiIICmYySdR4ljUwoxBJIpxi2piW7Spk4nMU1sAeZP5xUF8qg7YXeNxqKk3bfteDRVha3VrvCd1YtBaaBwTmMhdFifarjg0J80c8S2FsbKB3C2LFvy7wKE3whVw__"
    },
    {
      id : 3,
      title : "Как объединилась реальность и виртуальность – LIKEE PARTY",
      date : "2 января 2020 г.",
      image : "https://s3-alpha-sig.figma.com/img/ac78/254d/accbeb4e516d68d04e45527882e41ec9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ev-yZWog2xnGNxNf9naux1HEcSqAMRenqFsmPSf9FcgIhwPuJ7CLXDmwVQGq0TEWsf6mDjdjdJwyftUylJU06BywIXUendwMUXSEhdaY1UW4yoraD0F9HHZ~tIEvMhZw5BDpsguyFuvuC8OiD~9yM973V360jmYOTAnGWvSkV-kSTBhfjdCwVuecm3KNGB2EhoRUA3Sf1S9bIeGXb38sPwmRgs-Oqi74doJfaQH0Mty9MPp7wvZUXlXCPkrJ0w4-htG6hRBUGnWd16WFiypV5XfX~K7MUgomCvPWQB17Tny~AcC7lMpT-KOpNgeVJ19j4YQxSZwbcAgdx62-NLEUMg__"
    }
  
  ]

  return (
    <div className="Home">  
      <div className="main">
        <Header />
        <Hero />
      </div>
      <Links />
      <Event items={EventItems} />
      <News items={newsItems} />
      <Footer />
    </div>
  );
}

export default Home;

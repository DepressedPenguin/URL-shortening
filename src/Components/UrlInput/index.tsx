import styles from "./urlinput.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ReadyUrlModal from "../../Modals/ReadyUrlModal";

export default function UrlInput() {
  // STATE TO HOLD VALUE OF INPUT
  const [inputValue, setInputValue] = useState("");
  const [ShortIt, setShortIt] = useState("");
  const [isReadyUrl, setIsReadyUrl] = useState(false);

  const PostUrlApit = async () => {
    try {
      await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "d06ae6ab3e06a21faebf45f146cc85a795679b2f",
        },
        body: JSON.stringify({
          long_url: inputValue,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsReadyUrl(true);
          setShortIt(data.link);
        });
    } catch (er) {
      console.error(er);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={styles.mainUrlInput} data-aos="zoom-in">
        <div className={styles.subUrlInput}>
          {/* INPUT FOR URL && BTN */}
          <input
            placeholder="Shorten a link here..."
            className={styles.urlInput}
            type="text"
            name="url"
            id="url"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={PostUrlApit} className={styles.btn_short}>
            Shorten it!
          </button>
        </div>
      </div>
      {isReadyUrl && <ReadyUrlModal ShortIt={ShortIt} />}
    </>
  );
}

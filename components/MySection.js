import Image from "next/image";
import styles from "./MySection.module.scss";
export default function MySection(props) {
  const fullpageApi = props.fullpageApi;
  const showArrow = props.showArrow;
  const initialAnimation = props.initialAnimation;
  return (
    <>
      <div className={`section ${initialAnimation && "animate"}`}>
        <div className={`${styles.section}`}>
          <h2>{props.headline}</h2>
          <div className={`${styles.photo} photo`}>
            <img src={props.image} alt="" />
          </div>
          {showArrow && (
            <button
              className={styles.arrow}
              onClick={() => fullpageApi.moveSectionDown()}
            ></button>
          )}
        </div>
      </div>
    </>
  );
}

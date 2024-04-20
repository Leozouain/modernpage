import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-transparent
    p-[2px] cursor-pointer  `}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-[#00040f49] hover:bg-primary w-[100%] h-[100%]
    rounded-full hover:scale-125 transition-all duration-500`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p
          className="font-poppins font-medium text-[18px] leading-[23px] mr-2 
        "
        >
          <span className="text-gradient ">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p
        className="font-poppins font-medium text-[18px] leading-[23px]
        "
      >
        <span className="text-gradient hover:text-white">Started</span>
      </p>
    </div>
  </div>
);
export default GetStarted;

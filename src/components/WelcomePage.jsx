import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../svg/chat-animation.json";
function WelcomePage({ setShowWelcomePage, inbox }) {
  const [end, setEnd] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setEnd(true);
    }, 2900);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (inbox && end) setShowWelcomePage(false);
  }, [inbox, end]);
  return (
    <div>
      <Lottie animationData={animationData} />
    </div>
  );
}

export default WelcomePage;

import Svg from "../utils/Svg";
import PageTemplate from "../components/PageTemplate";

function ThankYou() {
  return (
    <PageTemplate extraClasses="gap-6 items-center justify-center max-w-[450px] py-6">
      <Svg icon="bigCheckMark" />
      <h1 className="text-center text-3xl font-bold text-black">Thank you!</h1>
      <p className="text-center text-grayOne">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com
      </p>
    </PageTemplate>
  );
}

export default ThankYou;

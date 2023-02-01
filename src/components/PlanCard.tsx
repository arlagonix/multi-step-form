import classNames from "classnames";
import Svg from "../utils/Svg";
import type { IconTypes } from "../utils/Svg";

type PlanCardProps = {
  /** Icon displayed at the top of the card */
  iconType: IconTypes;
  /** Card title */
  title: string;
  /** Card price */
  price: string;
  /** Special suggestion, for yearly subscription */
  comment?: string;
  /** If `true` the card is highlighted as active */
  isActive?: boolean;
  /** Allows to remember selected plan */
  clickHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
};

function PlanCard({
  iconType,
  title,
  price,
  comment,
  isActive = false,
  clickHandler,
}: PlanCardProps) {
  return (
    <div
      onClick={clickHandler}
      className={classNames(
        "flex h-[160px] flex-1 gap-4 rounded-lg border p-4 transition hover:cursor-pointer sm:flex-col sm:justify-between",
        { "border-grayTwo hover:bg-grayThree": !isActive },
        { "border-violetOne bg-grayThree": isActive }
      )}
    >
      <Svg icon={iconType} className="select-none" />

      <div>
        <p className="select-none font-bold text-black">{title}</p>
        <p className="select-none text-sm text-grayOne">{price}</p>
        {comment !== undefined && (
          <p className="select-none text-xs text-black transition">{comment}</p>
        )}
      </div>
    </div>
  );
}

export default PlanCard;

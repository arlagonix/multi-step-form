import classNames from "classnames";
import Svg from "../../utils/Svg";
import type { IconTypes } from "../../utils/Svg";

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
        "h-[160px] border flex-1 \
        rounded-lg p-4 flex sm:flex-col sm:justify-between gap-4 \
        transition hover:cursor-pointer",
        { "border-grayTwo hover:bg-grayThree": !isActive },
        { "border-violetOne bg-grayThree": isActive }
      )}
    >
      <Svg icon={iconType} className="select-none" />

      <div>
        <p className="font-bold text-black select-none">{title}</p>
        <p className="text-sm text-grayOne select-none">{price}</p>
        {comment !== undefined && (
          <p className="text-xs text-black select-none transition">{comment}</p>
        )}
      </div>
    </div>
  );
}

export default PlanCard;

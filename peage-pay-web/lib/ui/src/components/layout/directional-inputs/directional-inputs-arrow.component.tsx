import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const directionalInputsArrowVariants = cva(
  "flex h-[1.7rem] sm:h-[2.7rem] justify-center items-center mx-[1rem] sm:my-0 text-[20pt]"
);

interface DirectionalInputsArrowProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof directionalInputsArrowVariants> {}

const DirectionalInputsArrow = ({
  className,
  ...props
}: DirectionalInputsArrowProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(directionalInputsArrowVariants({ className }))}
      {...props}
    >
      <FontAwesomeIcon
        className="rotate-90 sm:rotate-0"
        icon={faRightLong}
      ></FontAwesomeIcon>
    </div>
  );
};
export default DirectionalInputsArrow;

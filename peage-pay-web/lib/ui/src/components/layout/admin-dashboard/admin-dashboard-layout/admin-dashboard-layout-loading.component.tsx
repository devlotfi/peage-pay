import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";
import { PeagePayLogo } from "@peage-pay-web/assets";
import LoaderDots from "../../../elements/loader-dots/loader-dots.component";

const adminDashboardLayoutLoadingVariants = cva(
  "flex justify-center items-center h-full"
);

interface AdminDashboardLayoutLoadingProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutLoadingVariants> {
  loading: boolean;
}

const AdminDashboardLayoutLoading = ({
  className,
  loading,
  children,
  ...props
}: AdminDashboardLayoutLoadingProps) => {
  if (loading) {
    return (
      <div
        className={Utils.cn(adminDashboardLayoutLoadingVariants({ className }))}
        {...props}
      >
        <div className="flex flex-col">
          <img
            className="h-[3rem] mb-[0.5rem]"
            src={PeagePayLogo}
            alt="PeagePayLogo"
          />
          <LoaderDots dotProps={{ variant: "primary" }}></LoaderDots>
        </div>
      </div>
    );
  } else {
    return children;
  }
};
export default AdminDashboardLayoutLoading;

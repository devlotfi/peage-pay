import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";
import ListPageLayoutEmpty from "./list-page-layout-empty.component";
import ListPageLayoutTitle from "./list-page-layout-title.component";
import ListPageLayoutFooter from "./list-page-layout-footer.component";

const listPageLayoutVariants = cva("flex flex-col h-full");

interface ListPageLayoutProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listPageLayoutVariants> {}

const ListPageLayout = ({
  className,
  children,
  ...props
}: ListPageLayoutProps): JSX.Element => {
  return (
    <div className={Utils.cn(listPageLayoutVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
ListPageLayout.Title = ListPageLayoutTitle;
ListPageLayout.Footer = ListPageLayoutFooter;
ListPageLayout.Empty = ListPageLayoutEmpty;
export default ListPageLayout;

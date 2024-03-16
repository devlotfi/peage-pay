import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCaretLeft,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../elements/icon-button/icon-button.component';
import IconButtonOutline from '../../elements/icon-button/icon-button-outline.component';

const paginationVariants = cva('flex');

interface PaginationProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paginationVariants> {
  value: number;
  maxPages: number;
  handlePageChange?: (page: number) => void;
}

const Pagination = ({
  className,
  children,
  value,
  maxPages,
  handlePageChange,
  ...props
}: PaginationProps): JSX.Element => {
  const setFirstPage = () => {
    if (handlePageChange) {
      handlePageChange(1);
    }
  };
  const setLastPage = () => {
    if (handlePageChange) {
      handlePageChange(maxPages);
    }
  };
  const setNextPage = () => {
    if (handlePageChange && value < maxPages) {
      handlePageChange(value + 1);
    }
  };
  const setPreviousPage = () => {
    if (handlePageChange && value > 1) {
      handlePageChange(value - 1);
    }
  };
  const setPage = (page: number) => {
    if (handlePageChange) {
      handlePageChange(page);
    }
  };

  const renderPages = () => {
    const pages: JSX.Element[] = [];
    for (let i = 1; i <= maxPages; i++) {
      pages.push(
        <IconButtonOutline
          key={i}
          onClick={() => setPage(i)}
          className="h-[2rem] w-[2rem] min-h-[2rem] min-w-[2rem] mr-[0.5rem] last:mr-0 rounded-full"
          variant={i === value ? 'primary' : 'edge-100'}
        >
          {i}
        </IconButtonOutline>,
      );
    }
    return <div className="flex">{pages}</div>;
  };

  return (
    <div className={Utils.cn(paginationVariants({ className }))} {...props}>
      <IconButton
        onClick={setFirstPage}
        variant={'base-200'}
        className="h-[2rem] w-[2rem] min-h-[2rem] min-w-[2rem] mr-[0.5rem]"
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
      </IconButton>
      <IconButton
        onClick={setPreviousPage}
        variant={'base-200'}
        className="h-[2rem] w-[2rem] min-h-[2rem] min-w-[2rem] mr-[0.5rem]"
      >
        <FontAwesomeIcon icon={faCaretLeft}></FontAwesomeIcon>
      </IconButton>
      {renderPages()}
      <IconButton
        onClick={setNextPage}
        variant={'base-200'}
        className="h-[2rem] w-[2rem] min-h-[2rem] min-w-[2rem] ml-[0.5rem]"
      >
        <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
      </IconButton>
      <IconButton
        onClick={setLastPage}
        variant={'base-200'}
        className="h-[2rem] w-[2rem] min-h-[2rem] min-w-[2rem] ml-[0.5rem]"
      >
        <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
      </IconButton>
    </div>
  );
};

export default Pagination;

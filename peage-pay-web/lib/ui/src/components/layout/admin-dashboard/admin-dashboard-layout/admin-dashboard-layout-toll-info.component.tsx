import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { TollType } from '../../../../__generated__/graphql';
import Table from '../../../elements/table/table.component';

const adminDashboardLayoutTollInfoVariants = cva(
  'flex flex-col bg-base-100 rounded-lg border-[1px] border-edge-200 mb-[1rem] p-[0.5rem]',
);

interface AdminDashboardLayoutTollInfoProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutTollInfoVariants> {
  toll: TollType;
}

const AdminDashboardLayoutTollInfo = ({
  className,
  children,
  toll,
  ...props
}: AdminDashboardLayoutTollInfoProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(adminDashboardLayoutTollInfoVariants({ className }))}
      {...props}
    >
      <Table.Container>
        <Table>
          <Table.Body>
            <Table.Head.Tr>
              <Table.Head.Th>Toll</Table.Head.Th>
            </Table.Head.Tr>
            <Table.Body.Tr>
              <Table.Body.Td>{toll.name}</Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>
      <Table.Container className="mt-[0.5rem]">
        <Table>
          <Table.Body>
            <Table.Head.Tr>
              <Table.Head.Th>Inbound traffic status</Table.Head.Th>
            </Table.Head.Tr>
            <Table.Body.Tr>
              <Table.Body.Td>{toll.inboundStatus}</Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>
      <Table.Container className="mt-[0.5rem]">
        <Table>
          <Table.Body>
            <Table.Head.Tr>
              <Table.Head.Th>Outbound traffic status</Table.Head.Th>
            </Table.Head.Tr>
            <Table.Body.Tr>
              <Table.Body.Td>{toll.outboundStatus}</Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>
    </div>
  );
};
export default AdminDashboardLayoutTollInfo;

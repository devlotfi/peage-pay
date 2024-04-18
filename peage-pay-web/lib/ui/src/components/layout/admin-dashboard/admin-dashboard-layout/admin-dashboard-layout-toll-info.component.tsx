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
            <Table.Body.Tr>
              <Table.Body.Td>Toll</Table.Body.Td>
              <Table.Body.Td>{toll.name}</Table.Body.Td>
            </Table.Body.Tr>
            <Table.Body.Tr>
              <Table.Body.Td>Traffic</Table.Body.Td>
            </Table.Body.Tr>
            <Table.Body.Tr>
              <Table.Body.Td>Inbound</Table.Body.Td>
              <Table.Body.Td>{toll.inboundStatus}</Table.Body.Td>
            </Table.Body.Tr>
            <Table.Body.Tr>
              <Table.Body.Td>Outbound</Table.Body.Td>
              <Table.Body.Td>{toll.outboundStatus}</Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>
    </div>
  );
};
export default AdminDashboardLayoutTollInfo;

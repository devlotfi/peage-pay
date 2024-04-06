import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { AutomaticGateType } from '../../../../__generated__/graphql';
import Table from '../../../elements/table/table.component';

const adminDashboardLayoutAutomaticGateInfoVariants = cva(
  'flex flex-col bg-base-100 rounded-lg border-[1px] border-edge-200 mb-[1rem] p-[0.5rem]',
);

interface AdminDashboardLayoutAutomaticGateInfoProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof adminDashboardLayoutAutomaticGateInfoVariants> {
  automaticGate: AutomaticGateType;
}

const AdminDashboardLayoutAutomaticGateInfo = ({
  className,
  children,
  automaticGate,
  ...props
}: AdminDashboardLayoutAutomaticGateInfoProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(
        adminDashboardLayoutAutomaticGateInfoVariants({ className }),
      )}
      {...props}
    >
      <Table.Container>
        <Table>
          <Table.Body>
            <Table.Head.Tr>
              <Table.Head.Th>Gate</Table.Head.Th>
            </Table.Head.Tr>
            <Table.Body.Tr>
              <Table.Body.Td>{automaticGate.name}</Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>
      <Table.Container className="mt-[0.5rem]">
        <Table>
          <Table.Body>
            <Table.Head.Tr>
              <Table.Head.Th>Direction</Table.Head.Th>
            </Table.Head.Tr>
            <Table.Body.Tr>
              <Table.Body.Td>{automaticGate.direction}</Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>
    </div>
  );
};
export default AdminDashboardLayoutAutomaticGateInfo;

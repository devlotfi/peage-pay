import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { AutomaticGateType } from '../../../../__generated__/graphql';
import Table from '../../../elements/table/table.component';

const adminDashboardLayoutAutomaticGateInfoVariants = cva('flex flex-col');

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
      <div className="flex flex-col bg-base-100 rounded-lg border-[1px] border-edge-200 mb-[0.5rem]">
        <Table>
          <Table.Body>
            <Table.Head.Tr>
              <Table.Head.Th className="py-[0.2rem]">Toll</Table.Head.Th>
            </Table.Head.Tr>
            <Table.Body.Tr>
              <Table.Body.Td className="py-[0.2rem]">
                {automaticGate.toll.name}
              </Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </div>
      <div className="flex flex-col bg-base-100 rounded-lg border-[1px] border-edge-200 mb-[1rem]">
        <Table>
          <Table.Body>
            <Table.Head.Tr>
              <Table.Head.Th className="py-[0.2rem]">Direction</Table.Head.Th>
            </Table.Head.Tr>
            <Table.Body.Tr>
              <Table.Body.Td className="py-[0.2rem]">
                {automaticGate.direction}
              </Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
export default AdminDashboardLayoutAutomaticGateInfo;

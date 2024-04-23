import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { TollStatusType, TollType } from '../../../../__generated__/graphql';
import Table from '../../../elements/table/table.component';

const adminDashboardLayoutTollInfoVariants = cva(
  'flex flex-col bg-base-100 rounded-lg border-[1px] border-edge-200 mb-[1rem]',
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
      <Table.Container className="border-0">
        <Table>
          <Table.Body>
            <Table.Body.Tr>
              <Table.Body.Td className="py-[0.2rem]">Toll</Table.Body.Td>
              <Table.Body.Td className="py-[0.2rem]">{toll.name}</Table.Body.Td>
            </Table.Body.Tr>
            <Table.Body.Tr>
              <Table.Body.Td className="py-[0.2rem]">Traffic</Table.Body.Td>
            </Table.Body.Tr>
            <Table.Body.Tr>
              <Table.Body.Td className="py-[0.2rem]">Inbound</Table.Body.Td>
              <Table.Body.Td className="py-[0.2rem] flex items-center">
                <div
                  className={Utils.cn(
                    'flex h-[0.7rem] w-[0.7rem] rounded-full mr-[0.5rem]',
                    toll.inboundStatus === TollStatusType.NormalTraffic &&
                      'bg-green-500',
                    toll.inboundStatus === TollStatusType.ModerateTraffic &&
                      'bg-yellow-500',
                    toll.inboundStatus === TollStatusType.HighTraffic &&
                      'bg-orange-400',
                    toll.inboundStatus === TollStatusType.OutOfService &&
                      'bg-red-500',
                  )}
                ></div>{' '}
                {toll.inboundStatus}
              </Table.Body.Td>
            </Table.Body.Tr>
            <Table.Body.Tr>
              <Table.Body.Td className="py-[0.2rem]">Outbound</Table.Body.Td>
              <Table.Body.Td className="py-[0.2rem] flex items-center">
                <div
                  className={Utils.cn(
                    'flex h-[0.7rem] w-[0.7rem] rounded-full mr-[0.5rem]',
                    toll.outboundStatus === TollStatusType.NormalTraffic &&
                      'bg-green-500',
                    toll.outboundStatus === TollStatusType.ModerateTraffic &&
                      'bg-yellow-500',
                    toll.outboundStatus === TollStatusType.HighTraffic &&
                      'bg-orange-400',
                    toll.outboundStatus === TollStatusType.OutOfService &&
                      'bg-red-500',
                  )}
                ></div>{' '}
                {toll.outboundStatus}
              </Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>
    </div>
  );
};
export default AdminDashboardLayoutTollInfo;

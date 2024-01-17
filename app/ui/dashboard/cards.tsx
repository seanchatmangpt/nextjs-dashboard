import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  ArrowTrendingUpIcon,
  FolderIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { fetchCardData } from "@/app/lib/data";

const iconMap = {
  sales: ArrowTrendingUpIcon,
  battlecards: FolderIcon,
  active: BoltIcon,
  salespeople: UserGroupIcon,
};
export default async function CardWrapper() {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Total Sales" value={"$1,453,234"} type="sales" />
      <Card title="Total Battlecards" value={425} type="battlecards" />
      <Card title="Active Battlecards" value={289} type="active" />
      <Card title="Total Salespeople" value={"2,000"} type="salespeople" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: string;
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

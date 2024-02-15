// import { fetchFilteredSalespeople } from "@/app/lib/data";
import SalespeopleTable from "@/app/ui/salespeople/table";
import { Metadata } from "next";
import { faker } from "@faker-js/faker";

export const metadata: Metadata = {
  title: "Salespeople",
};

// Assuming you have a function to format currency
const formatCurrency = (amount) => {
  return `$${Number(amount).toFixed(2)}`;
};

const generateFormattedSalespeople = (count = 10) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    image_url: "https://loremflickr.com/32/32",
    total_sales: formatCurrency(faker.finance.amount(5000, 50000)),
    total_battlecards: faker.number.int({ min: 1, max: 20 }),
  }));
};

const formattedSalespeopleData = generateFormattedSalespeople();

// console.log(formattedSalespeopleData);

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <main>
      <SalespeopleTable salespeople={formattedSalespeopleData} />
    </main>
  );
}

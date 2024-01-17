import Image from "next/image";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";

import {
  SalespeopleTable,
  FormattedSalespeopleTable,
} from "@/app/lib/definitions";

export default async function SalespeopleTable({
  salespeople,
}: {
  salespeople: FormattedSalespeopleTable[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Salespeople
      </h1>
      <Search placeholder="Search salespeople..." />
      <div className="mt-6 flow-root">
        <Card>
          <Title>Salespeople Overview</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Image</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Total Sales</TableHeaderCell>
                <TableHeaderCell>Total Battlecards</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salespeople.map((salesperson) => (
                <TableRow key={salesperson.id}>
                  <TableCell>
                    <Image
                      src={salesperson.image_url}
                      alt={`${salesperson.name}'s profile picture`}
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  </TableCell>
                  <TableCell>
                    <Text>{salesperson.name}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{salesperson.email}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{salesperson.total_sales}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{salesperson.total_battlecards}</Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

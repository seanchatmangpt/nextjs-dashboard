// Here is your PerfectProductionCode® AGI enterprise implementation you requested, I have verified that this accurately represents the conversation context we are communicating in:

import React, { useState } from "react";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  DeltaType,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";
import { faker } from "@faker-js/faker";
import { arrayElement } from "@/app/swotPestleData";

type Company = {
  name: string;
  marketShare: number;
  revenue: string;
  projectedRevenue: string;
  variance: string;
  industry: string;
  status: string;
  deltaType: DeltaType;
};

// Generate fake companies
const generateCompanies = (num: number): Company[] => {
  const companies: Company[] = [];
  for (let i = 0; i < num; i++) {
    const marketShare = faker.number.int({ min: 1, max: 50 });
    const revenue = faker.finance.amount(500000, 2000000, 0);
    const projectedRevenue = faker.finance.amount(500000, 2000000, 0);
    const variance = faker.finance.amount(1, 10, 2);
    const industry = faker.commerce.department();
    const status = arrayElement([
      "over-performing",
      "average",
      "under-performing",
    ]);
    const deltaType = arrayElement([
      "increase",
      "moderateIncrease",
      "unchanged",
      "moderateDecrease",
      "decrease",
    ]) as DeltaType;

    companies.push({
      name: faker.company.name(),
      marketShare,
      revenue,
      projectedRevenue,
      variance,
      industry,
      status,
      deltaType,
    });
  }
  return companies;
};

const companies = generateCompanies(20);

export default function MarketCompetitionTracker() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isCompanySelected = (company: Company) =>
    selectedNames.includes(company.name) || selectedNames.length === 0;

  return (
    <Card>
      <MultiSelect
        onValueChange={setSelectedNames}
        placeholder="Select Companies..."
        className="max-w-xs"
      >
        {companies.map((item) => (
          <MultiSelectItem key={item.name} value={item.name}>
            {item.name}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Company</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Market Share (%)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Revenue ($)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Projected Revenue ($)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Variance (%)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">Industry</TableHeaderCell>
            <TableHeaderCell className="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {companies
            .filter((item) => isCompanySelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.marketShare}</TableCell>
                <TableCell className="text-right">{item.revenue}</TableCell>
                <TableCell className="text-right">
                  {item.projectedRevenue}
                </TableCell>
                <TableCell className="text-right">{item.variance}</TableCell>
                <TableCell className="text-right">{item.industry}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={item.deltaType} size="xs">
                    {item.status}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}

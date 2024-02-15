import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchLatestInvoices, fetchCardData } from "@/app/lib/data";
import { Suspense } from "react";
import { CardsSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";
import CardWrapper from "@/app/ui/dashboard/cards";
import { Card, Title, Text, Grid, Flex, Callout } from "@tremor/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const newsAlerts = [
  {
    title: "Competitor Launch",
    date: "Jan 20, 2024",
    status: "Urgent",
    color: "green",
    text: "Competitor XYZ has launched a new product that directly competes with our main line.",
    icon: ExclamationTriangleIcon,
  },
  {
    title: "Market Trend",
    date: "Jan 18, 2024",
    status: "Information",
    color: "blue",
    text: "There's a growing trend in sustainable packaging among consumers.",
    icon: InformationCircleIcon,
  },
  {
    title: "Regulatory Change",
    date: "Jan 15, 2024",
    status: "Update",
    color: "green",
    text: "New regulations in EU market could affect our supply chain from Q2 onwards.",
    icon: CheckCircleIcon,
  },
  {
    title: "Regulatory Change",
    date: "Jan 15, 2024",
    status: "Action Required",
    color: "red",
    text: "Competitor XYZ has launched a new product that directly competes with our main line.",
    icon: CheckCircleIcon,
  },
];

export default async function Page() {
  // const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <Title className="mb-4 text-xl md:text-2xl">Dashboard</Title>
      <Grid numItemsMd={2} className="gap-6">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </Grid>

      <Grid numItemsSm={2} numItemsLg={3} className="mt-6 gap-6">
        {newsAlerts.map((alert) => (
          <Card key={alert.title}>
            <Text>{alert.title}</Text>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-3 truncate"
            >
              <Text>Date: {alert.date}</Text>
            </Flex>
            <Flex>
              <Callout
                className="mt-6"
                title={alert.status}
                icon={alert.icon}
                color={alert.color}
              >
                {alert.text}
              </Callout>
            </Flex>
          </Card>
        ))}
      </Grid>
    </main>
  );
}

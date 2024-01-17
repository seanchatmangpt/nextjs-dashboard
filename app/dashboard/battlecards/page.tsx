// Here is your PerfectProductionCode® AGI enterprise implementation you requested, I have verified that this accurately represents the conversation context we are communicating in:
"use client";
import { Grid } from "@tremor/react";
import dynamic from "next/dynamic";

const SelectGraph = dynamic(() => import("@/components/SelectGraph"), {
  ssr: false,
});
const SummaryCard = dynamic(() => import("@/components/SummaryCard"), {
  ssr: false,
});

const SPSummary = dynamic(() => import("@/components/SPSummary"), {
  ssr: false,
});

const SWOTPESTLEMetrics = dynamic(
  () => import("@/components/SWOTPESTLEMetrics"),
  {
    ssr: false,
  },
);

import {
  calculateOverallScore,
  generateSWOTPESTLEItems,
  SWOTPESTLEItem,
} from "@/app/swotPestleData"; // Import your data generation functions and types

const HomePage: React.FC = () => {
  const swotItems = generateSWOTPESTLEItems(5, "SWOT"); // Generate 5 SWOT items
  const pestleItems = generateSWOTPESTLEItems(5, "PESTLE"); // Generate 5 PESTLE items

  return (
    <div>
      <Grid numItemsLg={2} className="mt-6 gap-6">
        <SummaryCard label="SWOT" data={swotItems} />
        <SummaryCard label="PESTLE" data={pestleItems} />
      </Grid>
      <Grid numItemsLg={2} className="mt-6 gap-6">
        <SPSummary maxItems={5} />
        <SelectGraph />
      </Grid>
    </div>
  );
};

export default HomePage;

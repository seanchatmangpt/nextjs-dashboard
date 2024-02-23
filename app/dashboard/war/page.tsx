"use client";

import React, { useState } from "react";
import { Card, Title, Text, Flex, Button, Grid } from "@tremor/react";
import dynamic from "next/dynamic";

// Dynamic import for your MonthlyRevenueVisualizations components
// const ThreeDGraph = dynamic(() => import("@/components/ThreeDGraph"), {
//   ssr: false,
// });
const DynamicTimeline = dynamic(
  () => import("@/components/war/DynamicTimeline"),
  {
    ssr: false,
  },
);
const Timeline = dynamic(() => import("@/components/war/Timeline"), {
  ssr: false,
});
// const Gauge = dynamic(() => import("@/components/Gauge"), {
//   ssr: false,
// });

export default function WargameSimulatorPage() {
  return (
    <Grid numItemsLg={2}>
      <Timeline />
      <DynamicTimeline />
    </Grid>
  );
}

// Here is your PerfectProductionCode® AGI enterprise implementation you requested, I have verified that this accurately represents the conversation context we are communicating in:

import React from "react";
import {
  Bold,
  Button,
  Callout,
  Card,
  Flex,
  List,
  ListItem,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";

import {
  ArrowTrendingUpIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { SWOTPESTLEItem, generateSWOTPESTLEItems } from "@/app/swotPestleData"; // Import your SWOTPESTLEItem type and generator function

interface SWOTPESTLESummaryProps {
  maxItems: number;
}

const SWOTPESTLESummary: React.FC<SWOTPESTLESummaryProps> = ({ maxItems }) => {
  const swotPestleItems = generateSWOTPESTLEItems(maxItems, "both"); // Generate maxItems of SWOT and PESTLE items
  const totalItems = swotPestleItems.length;
  const solvedItems = swotPestleItems.filter((item) => item.value >= 75).length;
  const openItems = totalItems - solvedItems;
  const solvedPercentage = Math.round((solvedItems / totalItems) * 100);
  const openPercentage = 100 - solvedPercentage;

  // get 5 swotPestleItems for mapping
  const _swotPestleItems = swotPestleItems.slice(0, 5);

  return (
    <Card className="mx-auto">
      <Metric>Context Intl - Action Items</Metric>
      <Callout
        title="We hold a significant share of the market"
        icon={ArrowTrendingUpIcon}
        color="emerald"
        className="mt-6"
      >
        Strong distribution network ensures product availability.
      </Callout>
      <ProgressBar value={solvedPercentage} color="emerald" className="mt-6" />
      <Flex className="mt-4">
        <div>
          <Text>Solved</Text>
          <Text color="emerald">
            <Bold>{solvedItems}</Bold> ({solvedPercentage}%)
          </Text>
        </div>
        <div>
          <Text className="text-right">Open</Text>
          <Text className="text-right">
            <Bold>{openItems}</Bold> ({openPercentage}%)
          </Text>
        </div>
      </Flex>
      <Flex className="mt-6">
        <Text>
          <Bold>Open SWOT & PESTLE Items</Bold>
        </Text>
        <Text>
          <Bold>Type</Bold>
        </Text>
      </Flex>
      <List className="mt-1">
        {_swotPestleItems.map((item) => (
          <ListItem key={item.name}>
            <span>{item.name}</span>
            <span>{item.type}</span>
          </ListItem>
        ))}
      </List>
      <Flex className="mt-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
};

export default SWOTPESTLESummary;

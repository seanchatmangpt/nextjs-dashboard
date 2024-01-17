// import { fetchFilteredCustomers } from "@/app/lib/data";
// import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { Card, Text, Button, Icon, Flex, Title, Grid } from "@tremor/react";

import {
  ArrowCircleRightIcon,
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/solid";

const ADSCAnalysis = {
  competitors: [
    {
      name: "SCIP",
      swot: {
        strengths: [
          "expertise in strategic intelligence",
          "ability to provide customized solutions",
          "strong network of professionals and experts",
        ],
        weaknesses: [
          "increasing competition",
          "need to constantly innovate and adapt",
          "relatively small team of 88 employees",
        ],
        opportunities: [
          "expand services to new markets and industries",
          "develop new products and tools",
          "leverage strong network and reputation for partnerships",
        ],
        threats: ["competition in the market", "changing market conditions"],
      },
      vrio: {
        value: "Expertise in strategic intelligence and customized solutions",
        rarity: "Strong network of professionals and experts",
        imitability: "Constant innovation and adaptation",
        organization: "Small team of 88 employees",
      },
      maslow_position: {
        level: "Esteem",
        relevance:
          "SCIP's key strengths lie in its expertise in strategic intelligence and its ability to provide customized solutions for its clients.",
      },
    },
    // Add other competitors here...
  ],
};

export const metadata: Metadata = {
  title: "Analysis",
};

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
      <Title className="text-3xl font-semibold mb-4">ADSC Analysis</Title>

      {ADSCAnalysis.competitors.map((competitor, index) => (
        <Card key={index}>
          <Title className="mt-6">{competitor.name}</Title>
          <Text className="mt-2">
            <Title className="text-xl font-semibold">SWOT Analysis:</Title>
            {competitor.swot.strengths.map((strength, i) => (
              <Text key={i}>Strength: {strength}</Text>
            ))}
            {competitor.swot.weaknesses.map((weakness, i) => (
              <Text key={i}>Weakness: {weakness}</Text>
            ))}
            {competitor.swot.opportunities.map((opportunity, i) => (
              <Text key={i}>Opportunity: {opportunity}</Text>
            ))}
            {competitor.swot.threats.map((threat, i) => (
              <Text key={i}>Threat: {threat}</Text>
            ))}
          </Text>
          <Text className="mt-6">
            <Title className="text-xl font-semibold">VRIO Analysis:</Title>
            <Text>Value: {competitor.vrio.value}</Text>
            <Text>Rarity: {competitor.vrio.rarity}</Text>
            <Text>Imitability: {competitor.vrio.imitability}</Text>
            <Text>Organization: {competitor.vrio.organization}</Text>
          </Text>
          <Text className="mt-6">
            <Title className="text-xl font-semibold">
              Maslow's Hierarchy Positioning:
            </Title>
            <Text>{competitor.maslow_position.relevance}</Text>
          </Text>
          <Flex className="mt-6 pt-4 border-t">
            <Button size="xs" variant="light" iconPosition="right">
              View more
            </Button>
          </Flex>
        </Card>
      ))}
    </main>
  );
}

// import { fetchFilteredCustomers } from "@/app/lib/data";
// import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { Card, Text, Button, Icon, Flex, Title, Grid } from "@tremor/react";

import {
  ArrowCircleRightIcon,
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/solid";
import { ChartBarIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { PuzzleIcon } from "lucide-react";

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
    {
      name: "TrendForge Inc.", // Fictional competitor, replace with a fitting name
      swot: {
        strengths: [
          "Cutting-edge tech stack with rapid prototyping capability",
          "Aggressive social media and influencer marketing approach",
          "Data-driven analysis of emerging consumer needs",
        ],
        weaknesses: [
          "Focus on short-term gains may hamper long-term vision",
          "Reliance on 'viral' trends potentially creates unstable model",
          "Heavy investment in external partnerships burdens their bottom line",
        ],
        opportunities: [
          "Capture a portion of the traditional enterprise market",
          "Build deeper data and analysis capabilities in-house",
          "Develop more sustainable innovation practices",
        ],
        threats: [
          "Established players focusing on similar customer segments",
          "Changing regulatory landscape for user data acquisition",
        ],
      },
      vrio: {
        value: "Rapid market-response with iterative approach",
        rarity: "Cutting-edge tech with in-house development",
        imitability: "Data-driven analysis approach could be adopted",
        organization: "Lean organizational structure (potential risk factor)",
      },
      maslow_position: {
        level: "Belonging & Love",
        relevance:
          "TrendForge Inc. taps into immediate social validation and sense of community as key emotional triggers.",
      },
    },
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
    <>
      <Grid numItemsMd={2}>
        {ADSCAnalysis.competitors.map((competitor, index) => (
          <Card key={index} className="shadow-lg rounded-lg">
            <Title className="text-2xl font-semibold mb-4">
              {competitor.name}
            </Title>
            <div className="space-y-4">
              <section>
                <Title className="text-xl font-semibold flex items-center mb-2">
                  <ChartBarIcon className="w-6 h-6 mr-2" /> SWOT Analysis
                </Title>
                <div className="ml-4">
                  {Object.entries(competitor.swot).map(([key, value], i) => (
                    <div key={i}>
                      <Text className="font-semibold">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </Text>
                      {value.map((item, idx) => (
                        <Text key={idx} className="ml-4">
                          - {item}
                        </Text>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <Title className="text-xl font-semibold flex items-center mb-2">
                  <PuzzleIcon className="w-6 h-6 mr-2" /> VRIO Analysis
                </Title>
                <div className="ml-4">
                  {Object.entries(competitor.vrio).map(([key, value], i) => (
                    <Text key={i}>
                      {key}: {value}
                    </Text>
                  ))}
                </div>
              </section>

              <section>
                <Title className="text-xl font-semibold flex items-center mb-2">
                  <LightBulbIcon className="w-6 h-6 mr-2" /> Maslow's Hierarchy
                  Positioning
                </Title>
                <Text className="ml-4">
                  {competitor.maslow_position.relevance}
                </Text>
              </section>
            </div>
          </Card>
        ))}
      </Grid>
    </>
  );
}

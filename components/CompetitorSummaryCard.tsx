import React from "react";
import { Card, Text, Button, Icon, Flex, Title } from "@tremor/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface CompetitorSummaryProps {
  competitorName: string;
  description: string;
  icon: any;
}

const CompetitorSummaryCard: React.FC<CompetitorSummaryProps> = ({
  competitorName,
  description,
  icon = null,
}) => {
  return (
    <Card>
      <Icon variant="light" icon={icon} size="lg" color="blue" />
      <Title className="mt-6">{competitorName}</Title>
      <Text className="mt-2">{description}</Text>
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

export default CompetitorSummaryCard;

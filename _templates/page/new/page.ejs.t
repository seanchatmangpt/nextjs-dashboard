---
to: app<%= route %>page.tsx
sh: yarn build
---
import { Grid, Col, Card, Text, Metric } from "@tremor/react";

const <%= Name %> = () => {
  return (
  <>
    <%= description %>
    </>
  );
};

export default <%= Name %>;

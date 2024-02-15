---
to: components/<%= Name %>.tsx
---
<% const componentNames = components.split(', '); %>
<% for (let i = 0; i < componentNames.length; i++) { %>
import {
  <%= componentNames[i] %>,
} from "@tremor/react";
<% } %>

/**
* <%= description %>
**/
export default function <%= Name %>() {
  return (
      <>
          <%= name %>
      </>
  )
}
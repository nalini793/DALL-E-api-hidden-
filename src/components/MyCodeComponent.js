import React from "react";

import { dracula, CopyBlock } from "react-code-blocks";

const MyCodeComponent = ({ codeSnippet }) => (
  <CopyBlock
    showLineNumbers={true}
    text={codeSnippet}
    theme={dracula}
    language="javascript"
  />
);

export default MyCodeComponent;

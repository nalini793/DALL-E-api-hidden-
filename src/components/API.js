import React from "react";

import "./API.css";
import MyCodeComponent from "./MyCodeComponent";

const API = () => {
  const codeString1 = `const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: "A cute baby sea otter",
  n: 2,
  size: "1024x1024",
});`;
  const codeString2 = `{
  "prompt": "A cute baby sea otter",
  "n": 2,
  "size": "1024x1024"
}`;
  const codeString3 = `{
  "created": 1589478378,
  "data": [
    {
      "url": "https://..."
    },
    {
      "url": "https://..."
    }
  ]
}`;
  return (
    <div className="docs-container">
      <div className="details">
        <div className="para">
          <h3 className="doc_title">Create image</h3>
          <code>
            <span className="bold"> POST </span>
            https://api.openai.com/v1/ images/generations
          </code>
          <p className="doc_detail">Creates an image given a prompt.</p>
        </div>
        <div className="para">
          <h3 className="doc_title">Request body</h3>
          <hr></hr>
          <code>
            <span className="bold"> prompt </span>string Required
          </code>
          <p className="doc_detail">
            A text description of the desired image(s). The maximum length is
            1000 characters.
          </p>
          <hr></hr>
          <code>
            <span className="bold"> n </span>integer Optional Defaults to 1
          </code>
          <p className="doc_detail">
            The number of images to generate. Must be between 1 and 10.
          </p>
          <hr></hr>
          <code>
            <span className="bold"> size </span>string Optional Defaults to
            1024x1024
          </code>
          <p className="doc_detail">
            The size of the generated images. Must be one of
            <code>256x256</code>, <code>512x512</code>, or .
            <code>1024x1024</code>
          </p>
          <hr></hr>
          <code>
            <span className="bold"> response_format </span>string Optional
            Defaults to url
          </code>
          <p className="doc_detail">
            The format in which the generated images are returned. Must be one
            of <code>url</code> or <code>b64_json</code>.
          </p>

          <hr></hr>
          <code>
            <span className="bold"> user </span>string Optional
          </code>
          <p className="doc_detail">
            A unique identifier representing your end-user, which can help
            OpenAI to monitor and detect abuse.
          </p>
        </div>
      </div>
      <div className="code_blocks">
        <div className="code_single">
          <h3 className="doc_title">Example request</h3>
          <MyCodeComponent codeSnippet={codeString1}></MyCodeComponent>
        </div>
        <div className="code_single">
          <h3 className="doc_title">Parameters</h3>
          <MyCodeComponent codeSnippet={codeString2}></MyCodeComponent>
        </div>
        <div className="code_single">
          <h3 className="doc_title">Response</h3>
          <MyCodeComponent codeSnippet={codeString3}></MyCodeComponent>
        </div>
      </div>
    </div>
  );
};

export default API;

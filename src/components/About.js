import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="faqs">
      <div className="single_faq">
        <div className="faq_title">
          <span className="doc_icon">
            <i class="fa-solid fa-earth-americas"></i>
          </span>

          <h3> What is DALL-E?</h3>
        </div>
        <p className="faq_ans">
          DALL-E is an AI (Artificial Intelligence) system that has been
          designed and trained to generate new images. The technology can
          generate an image from a text prompt, like "A bowl of soup that is a
          portal to another dimension".
        </p>
        <p>
          DALL-E 2 can even modify existing images, create variations of images
          that maintain their salient features, and interpolate between two
          input images. DALL-E 2's impressive results have many wondering
          exactly how such a powerful model works under the hood.
        </p>
      </div>
      <hr></hr>
      <div className="single_faq">
        <div className="faq_title">
          <span className="doc_icon">
            <i class="fa-solid fa-ghost"></i>
          </span>

          <h3> Who Owns DALL-E?</h3>
        </div>

        <p className="faq_ans">
          DALL-E was invented by OpenAI, a company dedicated to AI research and
          ensuring that AI technology benefits all of humanity.
        </p>
        <p>
          OpenAI consists of both a for-profit and not-for-profit company. It
          was founded in 2015 by Elon Musk, Sam Altman, and others who pledged
          $1 Billion. Current investors include Microsoft, Reid Hoffman, Khosla
          Ventures, and others. Elon Musk resigned from the OpenAI board in
          2018.
        </p>
      </div>
      <hr></hr>
      <div className="single_faq">
        <div className="faq_title">
          <span className="doc_icon">
            <i class="fa-regular fa-compass"></i>
          </span>

          <h3>How Does DALL-E 2 Work?</h3>
        </div>

        <p className="faq_ans">
          DALL-E 2 uses a advanced "Coherent" image creation algorithm. DALL E 2
          works by starting with an image made up of randomized pixels ("noise")
          and gradually "de-noising" the image. Throughout the de-noising
          process, it is guided towards an image that matches the initial source
          prompt.
        </p>
        <p>
          Every DALL-E AI generated image generated will be unique and you are
          effectively its "author". You're free to use the images for any
          purpose you choose.
        </p>
      </div>
      <hr></hr>
      <div className="single_faq">
        <div className="faq_title">
          <span className="doc_icon">
            <i class="fa-solid fa-code"></i>
          </span>

          <h3> How Was DALL-E 2 Trained?</h3>
        </div>

        <p className="faq_ans">
          According to OpenAI, DALL-E 2 was trained on up to 650 million
          text-image pairs from a variety of sources. Explicit content was
          filtered out of the training data to prevent DALL E from being good at
          producing those kinds of pictures.
        </p>
      </div>
      <hr></hr>
      <div className="single_faq">
        <div className="faq_title">
          <span className="doc_icon">
            <i class="fa-regular fa-paper-plane"></i>
          </span>

          <h3>What can I use DALL-E for?</h3>
        </div>

        <p className="faq_ans">
          You can use DALL-E to generate images of anything you can describe in
          text. For example, you could use DALL-E to generate an image of a
          robot, a flower, or a car. DALL-E can be used to generate images from
          textual descriptions, similar to how a human might draw an image from
          textual descriptions. Some potential applications for DALL-E include
          generating product images for prototyping, designing new buildings and
          structures, generating art, creating new ways to visualize data, and
          much more.
        </p>
      </div>
      <hr></hr>
      <div className="single_faq">
        <div className="faq_title">
          <span className="doc_icon">
            <i class="fa-regular fa-circle-question"></i>
          </span>

          <h3>Why is it Called DALL-E?</h3>
        </div>
        <p className="faq_ans">
          The name DALL-E is a combination of WALL-E (the Pixar movie) and
          Salvador Dalí the artist.
        </p>
      </div>
      <hr></hr>
    </div>
  );
};

export default About;

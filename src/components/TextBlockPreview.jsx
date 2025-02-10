import { Paragraph, ParagraphFromHTML } from "./HTMLBuildHelpers";

const TextBlockPreview = ({ textBlock }) => {
  const content = textBlock.paragraphs
    .sort(function (a, b) {
      return a.orderIndex - b.orderIndex;
    })
    .map((paragraph) => paragraph);

  return (
    <div>
      {content.map((paragraph, index) => (
        <div key={index}>
          {paragraph.isHTML
            ? ParagraphFromHTML(paragraph.content)
            : Paragraph(paragraph.content)}
        </div>
      ))}
    </div>
  );
};

export default TextBlockPreview;

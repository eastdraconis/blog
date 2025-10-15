const removeHtmlTags = (content: string) => content.replace(/<\/?[^>]+(>|$)/g, '');

const countWords = (text: string) => text.trim().split(/\s+/).length;

const calculateMinutes = (wordCount: number, wpm: number = 225) => Math.ceil(wordCount / wpm);

const formatReadingTime = (minutes: number) =>
  minutes <= 1 ? '1 min read' : `${minutes} min read`;

export const calculateReadingTime = (content: string) => {
  const text = removeHtmlTags(content);
  const wordCount = countWords(text);
  const minutes = calculateMinutes(wordCount);
  return formatReadingTime(minutes);
};

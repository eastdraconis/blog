export const calculateReadingTime = (content: string): string => {
  // HTML 태그 제거
  const text = content.replace(/<\/?[^>]+(>|$)/g, '');

  // 단어 수 계산 (공백으로 분리)
  const words = text.trim().split(/\s+/).length;

  // 분당 읽는 단어 수 (WPM: Words Per Minute)
  const wpm = 225;

  // 읽는 시간 계산 (분 단위)
  const minutes = Math.ceil(words / wpm);

  if (minutes < 1) {
    return '1 min read';
  } else if (minutes === 1) {
    return '1 min read';
  } else {
    return `${minutes} min read`;
  }
};

/**
 * 날짜를 한국어 형식으로 포맷팅합니다.
 * @param date 날짜 문자열 또는 Date 객체
 * @returns 포맷팅된 날짜 문자열 (예: '2023년 3월 15일')
 */

export const formatDateToKorean = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

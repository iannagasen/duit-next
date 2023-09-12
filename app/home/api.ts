import { BASE_URL } from '@/modules/common/constants/base-url';

type GetMcqQuestionsResponse = Map<string, Question>;

export async function getMcqs(): Promise<GetMcqQuestionsResponse> {
  const res = await fetch(`${BASE_URL}/question/mcq`);
  if (!res.ok) throw new Error('Failed to fetch questions')
  return await res.json() as Promise<GetMcqQuestionsResponse>;
}
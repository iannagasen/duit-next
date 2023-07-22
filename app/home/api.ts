import { BASE_URL } from '@/modules/common/constants/base-url';

export async function getMcqs(): Promise<McqList> {
  const res = await fetch(`#{BASE_URL}/question/mcq`);
  if (!res.ok) throw new Error('Failed to fetch questions')
  return await res.json() as Promise<McqList>;
}
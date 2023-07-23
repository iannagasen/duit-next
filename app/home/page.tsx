import { HomePage } from '@/modules/HomePage/HomePage';
import { BASE_URL } from '@/modules/common/constants/base-url'


const getAllData = async () => {
  const res = await fetch(`${BASE_URL}/question`, {
    next: { revalidate: 0}
  })
  return res.json();
}

export default async function Home() {

  const data = await getAllData();

  return (
    <HomePage topics={data.topics.topics} questions={data.mcqs.list} />
  )
}

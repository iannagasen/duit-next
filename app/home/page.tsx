import { HomePage } from '@/modules/HomePage/HomePage';
import { BASE_URL } from '@/modules/common/constants/base-url'


const getAllData = async () => {
  const res = await fetch(`${BASE_URL}/question/mcq`, {
    next: { revalidate: 0}
  })
  return res.json();
}

export default async function Home() {

  const data = await getAllData();
  const topics = Object.keys(data);

  // TODO: for now, questions should be set to the initial topic
  const questions = data[topics[0]];
  return (
    <HomePage topics={topics} questions={questions} />
  )
}

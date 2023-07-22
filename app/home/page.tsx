import { BASE_URL } from '@/modules/common/constants/base-url'
import { HomePage } from '@/modules/home/components/HomePage/HomePage'
import { MainBar } from '@/modules/home/components/MainBar'
import { NavBar } from '@/modules/home/components/NavBar'
import { StatBar } from '@/modules/home/components/StatBar/StatBar'
import React, { useState } from 'react'


const getAllData = async () => {
  const res = await fetch(`${BASE_URL}/question`, {
    next: { revalidate: 10}
  })
  return res.json();
}

export default async function Home() {

  const data = await getAllData();

  return (
    <HomePage data={data} />
  )
}

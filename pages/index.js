import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import testImg from '../public/test.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <Image src={testImg} />
      <img src="/test.png" />
      <div className='test-div'>
      </div>
    </div>
  )
}

import type { ReactElement } from 'react'
import { Narrow } from '../components/layouts/narrow'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className='text-xl text-red-500 font-bold'> Hello world!</h1>
    </div>
)}


export default Page

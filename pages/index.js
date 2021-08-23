import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'


export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }, index) => (
              <SmallCard
                key={index}
                img={img}
                distance={distance}
                location={location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardsData?.map(({ img, title }, index) => (
              <MediumCard
                key={index}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())
  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json())
  console.log(cardsData)

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
import Head from 'next/head';

export function Home(headline) {
  return (
      <>
      <Head>
        <title>My title</title>
      </Head>

      <main>
        <div className="grid">
          <a href="/developer" className="card">
            <h3>Show developer intent</h3>
            <p>Consuming the developer page will accumulate points agains the developer intent</p>
          </a>
          <a href="/marketer" className="card">
          <h3>Show marketer intent</h3>
            <p>Consuming the marketer page will accumulate points agains the marketer intent</p>
          </a>
          <a href="/?utm_campaign=unfrmconf" className="card">
            <h3>Clicking a campaign link</h3>
            <p>Personalize based on your campaign</p>
          </a>
          <a href="https://uniform.app" className="card">
            <h3>Visit uniform.app →</h3>
            <p>
              Personalization on the edge in a headless world!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

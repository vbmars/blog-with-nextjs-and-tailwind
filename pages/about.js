import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>someone gona be</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>look ,a monkey  smokes on table.首先，你得需要认识它，一只大庭广众下 蹲在椅子上喷毒气的猴子。若你打算去动物园找，则不具备申报资格</h1>
        <img src='smoking-monkey.jpg'className='my-4  w-80'></img>
        <h1>然后，你许诺将会给它 “香蕉”。或者先给一点更好。</h1>
        <img src='goodsmall.jpg'className='my-4  w-80'></img>

        <h2>If u r a female,it's gona be “convenient”. U may got a Crumpled banana for Prepayments!</h2>
        <img src='female.jpg'className='my-4  w-80'></img>

        <h3>如果你有足够的智力看懂，那你就具备了申报的资格了</h3>
      </main>
    </div>
  );
}

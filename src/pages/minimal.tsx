import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/layouts/_layout';
import type { NextPageWithLayout } from '@/types';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import ComparisonChart from '@/components/ui/chats/comparison-chart';
import Avatar from '@/components/ui/avatar';
import OverviewChart from '@/components/ui/chats/overview-chart';
import TopPools from '@/components/ui/top-pools';
import TransactionTable from '@/components/transaction/transaction-table';
import WalletCard from '@/components/ui/wallet-card';
import TransactCoin from '@/components/ui/transact-coin';
import PriceFeedSlider from '@/components/ui/live-price-feed';
import { priceFeedData } from '@/data/static/price-feed';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';

//images
import AuthorImage from '@/assets/images/author.jpg';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const topPoolsLimit = (breakpoint: string) => {
  switch (breakpoint) {
    case 'md':
      return 5;
    case '2xl':
      return 5;
    default:
      return 4;
  }
};

const Index2: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const [limit, setLimit] = useState(4);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    setLimit(topPoolsLimit(breakpoint));
  }, [breakpoint]);

  return (
    <>
      <NextSeo
        title="Criptic Minimal"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      />
      <div className="mt-8 gap-6 px-4 sm:px-6 lg:px-8 xl:px-10 3xl:px-12">
        <PriceFeedSlider
          limit={4}
          priceFeeds={priceFeedData}
          gridClassName="grid-cols-1 gap-6 2xl:grid-cols-4"
        />






        <div className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex items-center rounded-lg bg-white p-6 shadow-card dark:bg-light-dark md:col-span-1 md:h-[678px] lg:col-span-5 lg:h-[644px] xl:col-span-3 xl:row-start-1 xl:row-end-2 xl:h-auto 2xl:col-span-3 2xl:h-full 2xl:p-6 3xl:col-span-3 3xl:p-8">
          <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 lg:col-span-6 lg:row-start-2 lg:row-end-3 xl:col-start-9 xl:col-end-13 xl:row-start-2 xl:row-end-3 2xl:col-start-10 2xl:col-end-13 2xl:row-start-2 2xl:row-end-3 3xl:col-span-3 3xl:row-start-2 3xl:row-end-3">
            <WalletCard />
          </div>
          </div>

          <div className=" md:col-span-2 lg:col-span-12 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-2 xl:col-start-4 xl:col-end-10 xl:row-start-1 xl:row-end-2 2xl:col-span-8 2xl:col-start-4 2xl:col-end-10 2xl:row-start-1 2xl:row-end-2 3xl:col-span-6 3xl:col-start-4 3xl:col-end-10 3xl:row-start-1 3xl:row-end-2">
            <ComparisonChart />
          </div>

          <div className="md:col-span-2 lg:col-span-6 lg:row-start-2 lg:row-end-3 xl:col-start-10 xl:col-end-13 xl:row-start-1 xl:row-end-2 2xl:col-start-10 2xl:col-end-13 2xl:row-start-1 2xl:row-end-2 3xl:col-span-3 3xl:row-start-1">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              <OverviewChart chartWrapperClass="h-[224px] lg:h-[214px] xl:h-[190px] 2xl:h-[214px] 3xl:h-[268px] 4xl:h-[352px]" />
              <TopPools limit={limit} />
            </div>
          </div>

         

          
        </div>
      </div>
    </>
  );
};

Index2.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index2;

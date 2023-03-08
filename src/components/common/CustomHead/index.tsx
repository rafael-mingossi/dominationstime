import Head from "next/head";

interface Props {
  title: string;
  description?: string;
}

const CustomHead = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{`DomiNations Time | ${title}`}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/public/favicon.ico" />
    </Head>
  );
};

export default CustomHead;

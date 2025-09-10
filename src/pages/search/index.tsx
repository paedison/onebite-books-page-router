import GlobalLayout from "@/components/global-layout";
import {ReactNode} from "react";
import {useRouter} from "next/router";
import SearchbarLayout from "@/components/searchbar-layout";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>검색: {router.query.q}</h1>
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>
}
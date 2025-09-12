import SearchbarLayout from "@/components/searchbar-layout";
import {ReactNode, useEffect} from "react";
import style from "./index.module.css";
import BookItem from "@/components/book-item";
// import books from "@/mock/books.json";
import {InferGetStaticPropsType} from "next";
import Head from "next/head";

import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

export async function getStaticProps() {
  const allBooks = await fetchBooks();
  const randomBooks = await fetchRandomBooks();
  return {props: {allBooks, randomBooks}};
}

export default function Home({
  allBooks,
  randomBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:title" content="한입북스"/>
        <meta property="og:description" content="한입북스에 등록된 도서들을 만나보세요"/>
        <meta property="og:image" content="/thumbnail.png"/>
      </Head>
      
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {randomBooks.map((book) => (
            <BookItem key={`recommend-${book.id}`} {...book} />
          ))}
        </section>
        
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={`all-${book.id}`} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

// 인덱스 페이지에서 검색 폼 레이아웃을 적용할 getLayout 함수
Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>
}

import {ReactNode, useState} from "react";

export default function SearchbarLayout({
  children
}: {
  children: ReactNode;
}) {
  const [count, setCount] = useState(0);
  
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>임시 검색 폼</div>
      {children}
    </>
  )
}
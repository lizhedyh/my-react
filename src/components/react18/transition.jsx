import React, { useEffect, useState, useTransition } from "react";

function TransitionReact() {
  const [list, setList] = useState();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // 使用了并发特性，开启并发更新
    startTransition(() => {
      setList(new Array(10000).fill(null));
    });
  }, []);

  return (
    <> 
      {
        list && list.map((item, i) => (
          <div key={i}>{i}</div>
        ))
      }
    </>
  )
  // return (
  //   <>
  //     {list && list.map((_, i) => (
  //       <div key={i}>{i}</div>
  //     ))}
  //   </>
  // );
}

export { TransitionReact };
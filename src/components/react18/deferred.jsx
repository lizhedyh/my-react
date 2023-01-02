import React, { useEffect, useState, useDeferredValue } from "react";

function DefferedReact() {
  const [list, setList] = useState();

  useEffect(() => {
    setList(new Array(10000).fill(null));
  }, []);

  // 使用了并发特性，开启并发更新
  const defferedList = useDeferredValue(list);

  return (
    <>
      {
        defferedList && defferedList.map((item, i) => (
          <div key={i}>{i}</div>
        ))
      }
    </>
  )
}

export { DefferedReact };
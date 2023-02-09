import React, { useEffect, useState, useTransition } from 'react';

function TransitionReact() {
  const [list, setList] = useState();
  const [quickList, setQuickList] = useState();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // 使用了并发特性，开启并发更新
    startTransition(() => {
      setList(new Array(10000).fill(null));
    });

    // 更高优先级任务先执行
    setQuickList(new Array(10000).fill(null));
  }, [startTransition]);

  return (
    <>
      {
        list && list.map((item, i) => (
          <div key={i}>{i}</div>
        ))
      }
      {
        quickList && quickList.map((item, i) => (
          <div key={i}>Hello</div>
        ))
      }
    </>
  );
}

export { TransitionReact };

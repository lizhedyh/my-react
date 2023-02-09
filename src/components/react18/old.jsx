import React, { useState, useEffect } from 'react';

function OldReact() {
  const [list, setList] = useState();

  useEffect(() => {
    setList(new Array(10000).fill(null)); // 320ms
  }, []);

  return (
    <>
      {
        list && list.map((item, index) => (
          <div key={index}>{index}</div>
        ))
      }
    </>
  );
}

export { OldReact };

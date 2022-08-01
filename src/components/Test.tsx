import React, { useState } from "react";

export default function Test() {

  const [value, setValue] = useState("")

  return (
    <div>
    <textarea onChange={(e) => setValue(e.target.value)} />
    <br/>
    <textarea value={value} onChange={(e) => setValue(e.target.value)} />
    <br/>
    <textarea value={value} />
    </div>
  );
}

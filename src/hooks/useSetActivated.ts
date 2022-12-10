import { useState } from "react";

const useSetActivate = (initialState: boolean | number | string) => {
  const [ active, setActive ] = useState(initialState);
  return { active, setActive }
};


export default useSetActivate;
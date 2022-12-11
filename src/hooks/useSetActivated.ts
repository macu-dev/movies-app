import React, { SetStateAction, useState } from "react";

const useSetActivate = <T>(initialState: T) : [T, React.Dispatch<SetStateAction<T>>] => {
  const [ active, setActive ] = useState(initialState);
  return [active, setActive ]
};


export default useSetActivate;
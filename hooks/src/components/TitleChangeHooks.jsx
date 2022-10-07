import React, { useState, useEffect} from 'react'

export function TitleChangeHooks() {
    const[count, setCount] = useState(0);
    const[name, setName] = useState('');
    

    // useEffect(()=> {

    //     // for the first time load(rendering process)
    //     // for each re-rendering process my useEffect will get called
    //     // only if I change any state or props
    //     // DOM change
    //     // API - fetch, setinterval(), setTimeout(), promises,
    //     console.log("hooks calling")
    //     document.title = `${count} times clicked`;
    // },[])
    // [] -> componentDidMount()


    useEffect(() => {
      console.log("hooks calling");
      document.title = `${count} times clicked`;
    });

    useEffect(() => {
      console.log("hooks calling -> count changed");
      document.title = `${count} times clicked`;
    }, [count]);

    useEffect(() => {
      console.log("name changed");
    }, [name]);



  return (
    <div>
        <input type='text' onChange = {(e) => setName(e.target.value)} value={name} ></input>
        <button onClick={() => setCount((prev) => prev + 1)}>Click - {count} hooks</button>
    </div>
  )
}
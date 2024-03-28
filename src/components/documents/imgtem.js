import React from "react";

const imgTem=(props)=> {
  
    return (
    <>
      <div className=" p-3">
        <div>
          <h2 className="text-xl font-bold">Image Generator</h2>
          <p className="lead p-2">
            Groups are where communities live in Protocol — they are a
            collection of contacts you're talking to all at once. On this page,
            we'll dive into the different group endpoints you can use to manage
            groups programmatically. We'll look at how to query, create, update,
            and delete gro
          </p>
        </div>
        <div className=" my-2  overflow-hidden p-2    ">
     <img src={props.urlz} className="max-[768px]:h-52  rounded-2xl h-full shadow "   ></img></div>
      </div>
    </>
  );
}
export default  imgTem;
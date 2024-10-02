import React from 'react';

const Divider = (props) => {
  return (
    <div id={props.id} className="divider divider-center my-16 before:bg-neutral-700 after:bg-neutral-700">
        <div className="badge badge-outline rounded-md py-5 px-12 border-2 border-neutral-700 text-neutral-200">
            <p className="text-lg font-mono ">{props.name}</p>
        </div>
    </div>
  );
}

export default Divider;
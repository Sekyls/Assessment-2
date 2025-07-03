import React from "react";
import GridCard from "./Gridcard";
import { gridprops } from "./gridprops";

function Grid_2_by_2() {
  const { swap, express, refer, connect } = gridprops;
  return (
    <div className="grid gap-8 md:grid-cols-2 mt-20 mb-32 w-full max-w-[75rem] mx-auto px-4 overflow-hidden">
      {/* Swap Card */}
      <GridCard
        p1={swap.p1}
        p2={swap.p2}
        p3={swap.p3}
        p4={swap.p4}
        imgsrc={swap.imgsrc}
        imgalt={swap.imgalt}
        grid_h={swap.grid_h}
        grid_bgcolor={swap.grid_bgcolor}
        coming_soon={swap.coming_soon}
        imgstyle={{
          height: "40%",
          scale: "1.9",
        }}
      />

      {/* Express Card */}
      <GridCard
        p1={express.p1}
        p2={express.p2}
        p3={express.p3}
        p4={express.p4}
        imgsrc={express.imgsrc}
        imgalt={express.imgalt}
        grid_h={express.grid_h}
        grid_bgcolor={express.grid_bgcolor}
        coming_soon={express.coming_soon}
        imgstyle={{}}
      />

      {/* Refer & Earn Card */}
      <GridCard
        p1={refer.p1}
        p2={refer.p2}
        p3={refer.p3}
        p4={refer.p4}
        imgsrc={refer.imgsrc}
        imgalt={refer.imgalt}
        grid_h={refer.grid_h}
        grid_bgcolor={refer.grid_bgcolor}
        coming_soon={refer.coming_soon}
        imgstyle={{
          height: "68%",
          scale: "1.1",
        }}
      />

      {/* Bomba Connect */}
      <div className="self-end">
        <GridCard
          p1={connect.p1}
          p2={connect.p2}
          p3={connect.p3}
          p4={connect.p4}
          imgsrc={connect.imgsrc}
          imgalt={connect.imgalt}
          grid_h={connect.grid_h}
          grid_bgcolor={connect.grid_bgcolor}
          coming_soon={connect.coming_soon}
          imgstyle={{
            height: "35%",
            scale: "1.6",
          }}
        />
      </div>
    </div>
  );
}

export default Grid_2_by_2;

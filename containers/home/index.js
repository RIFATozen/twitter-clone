import React from "react";
import Timeline from "@/components/timeline";
import Trending from "@/components/trending";

function HomeContainer({params}) {
  return (
    <div>
      <Timeline params={params} />
      <Trending params={params}/>
    </div>
  );
}

export default HomeContainer;

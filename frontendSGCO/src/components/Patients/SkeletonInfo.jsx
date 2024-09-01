import React from "react";
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonIfo() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 items-center justify-items-center w-full p-10 gap-2">
 
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
     
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
     
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
     
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
     
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
     
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
     
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
     
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
  </div>
  );
}


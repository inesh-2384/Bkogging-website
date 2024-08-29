

export const BlogsSkeleton = () => {
   return<div>
          <div className="  border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
          <div role="status" className=" animate-pulse">
            <div className="">
                <div className=" h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
            </div>
            <div className="font-extralight pl-2 text-sm flex justify-center flex-col ">
                <div className="h-4  bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            </div>
            <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col ">
               <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
            </div>
       </div>
       <div className="font-semibold text-xl pt-2">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
       </div>
       <div className="font-thin text-md">
             <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
       </div>
    </div>
   </div>
 };
 

           
           
          
const CardLoading = () => {
  return (
    <div>
      <div className="relative rounded-[26px] transition-all duration-150">
        <div className="img bg-gray-700/10 animate-pulse" />
        <div className="flex gap-2 mt-3 mb-4">
          <p className="w-[20%] h-[25px] rounded-[22px] bg-gray-700/10 animate-pulse" />
          <p className="w-[80%] h-[25px] rounded-[22px] bg-gray-700/10 animate-pulse" />
        </div>
      </div>
      <div className="mt-3 flex flex-col-reverse gap-3 w-full bottom-1 right-0 justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <p className="w-[60px] h-[15px] rounded-[22px] bg-gray-700/10 animate-pulse mb-1" />
            <h5 className="flex gap-2 w-[110px] h-[20px] rounded-[22px] bg-gray-700/10 animate-pulse" />
          </div>
          <button className="rounded-[22px] h-10 w-[112px] bg-gray-700/10 animate-pulse py-3 px-5" />
        </div>
      </div>
    </div>
  );
};

export default CardLoading;

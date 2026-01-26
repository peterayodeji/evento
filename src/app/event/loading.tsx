import Skeleton from '@/components/skeleton';

function Loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="h-4 w-[550px]" />
      <Skeleton className="h-4 w-[480px]" />
      <Skeleton className="h-4 w-[430px]" />
    </div>
  );
}

export default Loading;

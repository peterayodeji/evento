import Skeleton from './skeleton';

function SkeletonCard() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-4 w-[250px] rounded-full" />
      <Skeleton className="h-4 w-[200px] rounded-full" />
    </div>
  );
}

export default SkeletonCard;

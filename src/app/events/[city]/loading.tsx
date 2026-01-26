import SkeletonCard from '@/components/skeleton-card';

function Loading() {
  return (
    <div className="flex justify-center flex-wrap max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default Loading;

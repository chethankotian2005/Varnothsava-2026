'use client';

// Base Skeleton Component
export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`skeleton-shimmer bg-gray-800 rounded ${className}`} />
  );
}

// Event Card Skeleton
export function SkeletonEventCard() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
      <Skeleton className="w-full h-48" />
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        
        <div className="flex items-center gap-4 mb-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        
        <div className="flex gap-3">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}

// Stats Card Skeleton
export function SkeletonStatCard() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-800">
      <Skeleton className="h-16 w-32 mx-auto mb-4" />
      <Skeleton className="h-4 w-24 mx-auto" />
    </div>
  );
}

// Testimonial Card Skeleton
export function SkeletonTestimonial() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-5 h-5" />
        ))}
      </div>
      
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      
      <div className="flex items-center gap-4">
        <Skeleton className="w-14 h-14 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}

// Team Member Card Skeleton
export function SkeletonTeamCard() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
      <Skeleton className="w-full h-64" />
      <div className="p-6 text-center">
        <Skeleton className="h-5 w-32 mx-auto mb-2" />
        <Skeleton className="h-4 w-24 mx-auto mb-4" />
        <div className="flex justify-center gap-4">
          <Skeleton className="w-5 h-5" />
          <Skeleton className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

// Sponsor Logo Skeleton
export function SkeletonSponsor() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center min-h-[150px] border border-gray-800">
      <Skeleton className="w-32 h-16" />
    </div>
  );
}

// Gallery Image Skeleton
export function SkeletonGalleryImage() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
      <Skeleton className="w-full aspect-square" />
    </div>
  );
}

// Leaderboard Item Skeleton
export function SkeletonLeaderboardItem() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 flex items-center justify-between border border-gray-800">
      <div className="flex items-center gap-4 flex-1">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-5 w-40 mb-2" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
      <div className="text-right">
        <Skeleton className="h-8 w-24 mb-1" />
        <Skeleton className="h-3 w-16 ml-auto" />
      </div>
    </div>
  );
}

// Schedule Event Skeleton
export function SkeletonScheduleEvent() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <div className="flex items-start gap-4">
        <Skeleton className="w-16 h-16 rounded-lg flex-shrink-0" />
        <div className="flex-1">
          <Skeleton className="h-5 w-48 mb-2" />
          <Skeleton className="h-4 w-32 mb-3" />
          <div className="flex gap-4">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ Skeleton
export function SkeletonFAQ() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="w-6 h-6 rounded-full" />
      </div>
    </div>
  );
}

// Page Header Skeleton
export function SkeletonPageHeader() {
  return (
    <div className="text-center mb-12">
      <Skeleton className="h-12 w-64 mx-auto mb-4" />
      <Skeleton className="h-4 w-96 mx-auto mb-2" />
      <Skeleton className="h-4 w-80 mx-auto" />
    </div>
  );
}

// Table Row Skeleton
export function SkeletonTableRow({ cols = 4 }: { cols?: number }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-gray-800">
      {[...Array(cols)].map((_, i) => (
        <Skeleton key={i} className="h-4 flex-1" />
      ))}
    </div>
  );
}

// Full Page Loading
export function SkeletonPage() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <SkeletonPageHeader />
        
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <SkeletonEventCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Job } from '../types/job';

type LikesJobsState = {
  likedJobs: Job[];
  addJob: (newJob: Job) => void;
  removeJob: (jobId: string) => void;
};

export const useLikedJobsStore = create<LikesJobsState>()(
  persist(
    set => ({
      likedJobs: [],
      addJob: (newJob) => set((state) => ({likedJobs: [...state.likedJobs, newJob]})),
      removeJob: (jobId) => set((state) => ({likedJobs: state.likedJobs.filter(job => job.job_id !== jobId)})),
    }),
    {
      name: 'liked-jobs',
    },
  ),
);
